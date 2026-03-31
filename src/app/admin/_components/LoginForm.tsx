"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function LoginForm() {
  const handleLogin = () => {
    window.location.href = "/api/auth/github/login";
  };

  const GithubIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 glass p-10 rounded-2xl border border-white/10 shadow-2xl"
      >
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <GithubIcon className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold font-display text-gradient tracking-tighter">
            Admin Access
          </h1>
          <p className="text-sm text-zinc-400 max-w-xs mx-auto">
            Welcome back, Secheol. Please sign in with your GitHub account to manage your blog.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 rounded-xl bg-white text-zinc-950 px-6 py-4 font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
          >
            <GithubIcon className="w-5 h-5" />
            Continue with GitHub
          </button>
          
          <div className="flex items-center gap-2 justify-center py-2 px-4 rounded-lg bg-red-500/5 border border-red-500/10">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span className="text-xs text-red-400/80 font-medium">Authorized Users Only (seru1027)</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
