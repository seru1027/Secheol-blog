"use client";

import { motion } from "framer-motion";
import AdminHeader from "./_components/AdminHeader";
import LoginForm from "./_components/LoginForm";
import PostForm from "./_components/PostForm";

interface AdminClientProps {
  isAuth: boolean;
}

export default function AdminClient({ isAuth }: AdminClientProps) {
  if (!isAuth) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Background Orbs for Aurora Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <AdminHeader />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <PostForm />
        </motion.div>
      </main>
    </div>
  );
}
