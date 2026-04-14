"use client";

import { motion } from "framer-motion";
import { GithubIcon as Github, ShieldAlertIcon as ShieldAlert } from "@/components/ui/Icons";

export default function LoginForm() {
  const handleLogin = () => {
    window.location.href = "/api/auth/github/login";
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-12 glass-card p-12 relative overflow-hidden group"
      >
        {/* Subtle inner grid decoration */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="text-center space-y-6 relative z-10">
          <div className="mx-auto w-20 h-20 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-8 shadow-[0_0_30px_rgba(0,229,255,0.1)]">
            <Github className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <span className="editorial-label text-primary uppercase tracking-[0.4em] text-[10px] font-black">Security Protocol</span>
            <h1 className="text-4xl font-black font-display tracking-tighter leading-none">
              Command Access<span className="text-primary">.</span>
            </h1>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs mx-auto leading-relaxed">
            Welcome back, Architect. Please initiate authentication to enter the control interface.
          </p>
        </div>

        <div className="space-y-6 pt-4 relative z-10">
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-4 rounded-sm bg-white text-zinc-950 px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <Github className="w-4 h-4" />
            Initialize Auth
          </button>
          
          <div className="flex items-center gap-3 justify-center py-3 px-6 rounded-xl bg-black/20 border border-white/[0.05]">
            <div className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </div>
            <span className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">Authorized Access Only</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
