"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { ShieldAlertIcon as ShieldAlert } from "@/components/ui/Icons";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass max-w-md w-full p-8 md:p-12 rounded-[var(--radius)] text-center border border-zinc-500/10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="w-20 h-20 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-indigo-500/20"
        >
          <ShieldAlert className="w-10 h-10 text-indigo-400" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="text-gradient">Access Denied</span>
        </h1>

        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          죄송합니다. 이 구역은 관리자 전용입니다. <br />
          <span className="text-zinc-200 font-medium">seru1027</span> 계정만 접근할 수 있습니다.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="glow-button group flex items-center justify-center gap-2 w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            홈으로 돌아가기
          </Link>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
            <Lock className="w-4 h-4" />
            <span>Secure Admin Authentication</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
