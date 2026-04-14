"use client";

import { logout } from "../actions";
import { LogOut, LayoutDashboard, Activity, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminHeader() {
  return (
    <header className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,229,255,0.1)]">
            <LayoutDashboard className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-4xl font-black font-display tracking-tighter leading-none mb-2">
              System<span className="text-primary">.</span>Monitor
            </h1>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Control Interface v3.2.0</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 px-6 py-3 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2 pr-4 border-r border-white/5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </div>
              <span className="text-[9px] font-black font-mono text-zinc-400 uppercase tracking-widest">System Online</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-600 uppercase font-black tracking-widest mb-1">Status</span>
                <Activity className="h-3 w-3 text-zinc-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-zinc-600 uppercase font-black tracking-widest mb-1">Server</span>
                <Server className="h-3 w-3 text-zinc-400" />
              </div>
            </div>
          </div>

          <button
            onClick={() => logout()}
            className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all group"
            title="Terminate Session"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
