"use client";

import { logout } from "../actions";
import { LogOut, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminHeader() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <div className="p-2 rounded-xl bg-primary/10 text-primary">
          <LayoutDashboard className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold font-display text-gradient tracking-tighter">
          Admin Dashboard
        </h1>
      </motion.div>
      
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => logout()}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition-all"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </motion.button>
    </header>
  );
}
