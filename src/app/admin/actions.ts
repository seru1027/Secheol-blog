
"use server";

import { createPostOnGitHub } from "@/lib/github";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin");
}

export async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "true";
}

export async function createPost(formData: FormData) {
  const isAuth = await checkAuth();
  if (!isAuth) throw new Error("인증이 필요합니다.");

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const date = new Date().toISOString().split("T")[0];

  if (!title || !slug || !content) {
    throw new Error("필수 항목을 모두 채워주세요.");
  }

  // Create Frontmatter
  const frontmatter = `---
title: "${title}"
date: "${date}"
description: "${description}"
category: "${category}"
---

${content}`;

  const fileName = `src/content/posts/${slug}.md`;

  try {
    await createPostOnGitHub({
      path: fileName,
      content: frontmatter,
      message: `feat: add new post ${title}`,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
