export interface GitHubFile {
  path: string;
  content: string;
  message: string;
}

const GITHUB_OWNER = process.env.GITHUB_OWNER || "seru1027";
const GITHUB_REPO = process.env.GITHUB_REPO || "Secheol-blog";

export async function createPostOnGitHub(file: GitHubFile) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not defined in environment variables.");
  }

  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${file.path}`;

  // Check if file already exists to get its SHA (for updates)
  let sha: string | undefined;
  try {
    const getRes = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }
  } catch (error) {
    // File probably doesn't exist, which is fine for creation
    console.error("Error checking file existence:", error);
  }

  const body = {
    message: file.message,
    content: Buffer.from(file.content).toString("base64"),
    sha: sha, // Include SHA if updating an existing file
  };

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`GitHub API Error: ${errorData.message}`);
  }

  return await res.json();
}
