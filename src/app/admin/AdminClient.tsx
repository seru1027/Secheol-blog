"use client";

import { motion } from "framer-motion";
import AdminHeader from "./_components/AdminHeader";
import LoginForm from "./_components/LoginForm";
import PostForm from "./_components/PostForm";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

interface AdminClientProps {
  isAuth: boolean;
}

export default function AdminClient({ isAuth }: AdminClientProps) {
  if (!isAuth) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <main className="relative z-10 container mx-auto px-4 py-32 max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="editorial-label text-primary uppercase tracking-[0.3em] font-black text-[10px]">Security Zone</span>
            <div className="h-px w-12 bg-primary/20" />
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest leading-none">Access: Authorized</span>
          </div>
          
          <AdminHeader />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-16"
        >
          <PostForm />
        </motion.div>
      </main>
    </div>
  );
}
