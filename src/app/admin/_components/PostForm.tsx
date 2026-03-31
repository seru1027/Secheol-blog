"use client";

import { useState } from "react";
import { createPost } from "../actions";
import { Eye, Edit3, Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function PostForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [content, setContent] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await createPost(formData);
      if (res.success) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = "/blog";
        }, 2000);
      } else {
        setError(res.error || "Failed to publish post.");
      }
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20">
      <form action={handleSubmit} className="space-y-8">
        {/* Post Metadata Card */}
        <div className="glass rounded-2xl border border-white/10 p-8 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Title</label>
              <input
                name="title"
                type="text"
                placeholder="The Future of Web Development"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 font-medium"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Slug (URL path)</label>
              <input
                name="slug"
                type="text"
                placeholder="future-web-dev"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 font-mono"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Category</label>
              <input
                name="category"
                type="text"
                placeholder="Technology"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 font-medium"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Description</label>
              <input
                name="description"
                type="text"
                placeholder="A deep dive into upcoming trends..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-xl min-h-[600px] flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/2">
            <div className="flex items-center gap-2 p-1 bg-white/5 rounded-lg border border-white/5">
              <button
                type="button"
                onClick={() => setActiveTab("edit")}
                className={cn(
                  "flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                  activeTab === "edit" 
                    ? "bg-white text-zinc-950 shadow-lg scale-105" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={cn(
                  "flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                  activeTab === "preview" 
                    ? "bg-white text-zinc-950 shadow-lg scale-105" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              {content.length} characters
            </div>
          </div>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              {activeTab === "edit" ? (
                <motion.div
                  key="edit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <textarea
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your masterpiece here in Markdown..."
                    className="w-full h-full bg-transparent p-8 outline-none resize-none font-mono text-zinc-300 leading-relaxed placeholder:text-zinc-700"
                    required
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 overflow-auto p-8 prose prose-invert prose-blue max-w-none prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
                >
                  {content ? (
                    <ReactMarkdown>{content}</ReactMarkdown>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[400px] text-zinc-600 gap-4">
                      <Eye className="w-12 h-12 opacity-20" />
                      <p className="font-medium">Nothing to preview yet</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Global Feedback & Submit */}
        <div className="flex items-center justify-between gap-6 px-2">
          <div className="flex-1">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center gap-2 text-red-400 font-medium text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center gap-2 text-emerald-400 font-medium text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Published successfully! Redirecting...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-white font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Publishing to GitHub...
              </>
            ) : success ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Published
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Publish Post
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
