"use client";

import { useState, useRef } from "react";
import { createPost } from "../actions";
import { 
  Eye, 
  Edit3, 
  Send, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  Bold, 
  Italic, 
  Heading, 
  Link as LinkIcon, 
  Quote, 
  Code, 
  List, 
  Activity,
  Image as ImageIcon 
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function PostForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugManual, setIsSlugManual] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("DevLog");
  const [content, setContent] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (!isSlugManual) {
      setSlug(
        e.target.value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9가-힣]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
    setIsSlugManual(true);
  };

  const insertFormatting = (prefix: string, suffix: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = content;
    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);

    setContent(before + prefix + selected + suffix + after);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selected.length
      );
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("content", content);

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
    <div className="space-y-12 max-w-5xl mx-auto pb-24">
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Post Metadata Card: Architectural Monitor Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 relative overflow-hidden group"
        >
          {/* Subtle inner grid lines */}
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">Parameter.Title</span>
                <div className="h-px flex-1 bg-white/[0.05]" />
              </div>
              <input
                name="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Entry Title..."
                className="w-full bg-transparent border-b border-white/[0.08] pb-2 outline-none focus:border-primary transition-colors text-3xl font-display font-black tracking-tight placeholder:text-zinc-800"
                required
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">System.Path</span>
                <div className="h-px flex-1 bg-white/[0.05] mx-2" />
                {isSlugManual && (
                  <button 
                    type="button" 
                    onClick={() => {
                      setIsSlugManual(false);
                      setSlug(title.toLowerCase().trim().replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-+|-+$/g, ""));
                    }}
                    className="text-[9px] font-black text-primary uppercase hover:underline"
                  >
                    Auto
                  </button>
                )}
              </div>
              <input
                name="slug"
                type="text"
                value={slug}
                onChange={handleSlugChange}
                placeholder="entry-slug"
                className="w-full bg-transparent border-b border-white/[0.08] pb-2 outline-none focus:border-primary transition-colors text-xl font-mono text-zinc-400 placeholder:text-zinc-800"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">Class.Category</span>
                <div className="h-px flex-1 bg-white/[0.05]" />
              </div>
              <div className="flex flex-wrap gap-4">
                {["Project", "DevLog", "Insights"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border",
                      category === cat
                        ? "bg-primary/10 border-primary/40 text-primary shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                        : "bg-transparent border-white/[0.05] text-zinc-600 hover:text-zinc-400 hover:border-white/[0.1]"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-none">Metadata.Description</span>
                <div className="h-px flex-1 bg-white/[0.05]" />
              </div>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Summarize the core logic..."
                rows={2}
                className="w-full bg-transparent border-b border-white/[0.08] pb-1 outline-none focus:border-primary transition-colors text-sm text-zinc-400 font-medium placeholder:text-zinc-800 resize-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section: Detailed Editor */}
        <div className="glass-card min-h-[700px] flex flex-col relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-8 py-6 border-b border-white/[0.05] bg-white/[0.01] gap-6">
            <div className="flex items-center gap-1 p-1 bg-black/20 rounded-xl border border-white/[0.05]">
              <button
                type="button"
                onClick={() => setActiveTab("edit")}
                className={cn(
                  "flex items-center gap-2 px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === "edit" 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-zinc-600 hover:text-zinc-300"
                )}
              >
                <Edit3 className="w-3.5 h-3.5" />
                Write
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={cn(
                  "flex items-center gap-2 px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === "preview" 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-zinc-600 hover:text-zinc-300"
                )}
              >
                <Eye className="w-3.5 h-3.5" />
                Preview
              </button>
            </div>
            
            {activeTab === "edit" && (
              <div className="flex items-center gap-2 p-1.5 bg-white/[0.02] rounded-xl border border-white/[0.05] overflow-x-auto">
                {[
                  { icon: Bold, action: () => insertFormatting("**", "**"), label: "Bold" },
                  { icon: Italic, action: () => insertFormatting("*", "*"), label: "Italic" },
                  { icon: Heading, action: () => insertFormatting("### "), label: "H3" },
                  { icon: LinkIcon, action: () => insertFormatting("[", "](url)"), label: "Link" },
                  { icon: Quote, action: () => insertFormatting("> "), label: "Quote" },
                  { icon: Code, action: () => insertFormatting("\n```typescript\n", "\n```\n"), label: "Code" },
                  { icon: List, action: () => insertFormatting("- "), label: "List" },
                ].map((tool, i) => (
                  <button 
                    key={i}
                    type="button" 
                    onClick={tool.action} 
                    className="p-2 text-zinc-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" 
                    title={tool.label}
                  >
                    <tool.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 relative flex flex-col">
            <AnimatePresence mode="wait">
              {activeTab === "edit" ? (
                <motion.div
                  key="edit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col h-full"
                >
                  <textarea
                    ref={textareaRef}
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="// Initialize content schema here..."
                    className="w-full flex-1 bg-transparent p-10 outline-none resize-none font-mono text-base text-zinc-400 font-medium leading-[1.8] placeholder:text-zinc-800"
                    required
                  />
                  <div className="px-10 py-4 bg-black/40 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-black text-zinc-700 uppercase tracking-widest">
                    <span>Markdown Buffer</span>
                    <span>{content.length} Characters Detected</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 overflow-auto p-12 lg:p-16 prose prose-invert prose-blue max-w-none 
                             prose-headings:font-display prose-headings:font-black prose-headings:tracking-tighter
                             prose-p:text-zinc-400 prose-p:leading-relaxed
                             prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/[0.05] prose-pre:rounded-2xl"
                >
                  {content ? (
                    <ReactMarkdown>{content}</ReactMarkdown>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[400px] text-zinc-800 gap-6">
                      <Activity className="w-16 h-16 opacity-10 animate-pulse" />
                      <p className="text-[10px] font-black uppercase tracking-[0.3em]">No Buffer Found</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between gap-12 px-2">
          <div className="hidden md:block">
            <AnimatePresence>
              {error && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-red-500 font-black text-[10px] uppercase tracking-widest">
                  <AlertCircle className="w-4 h-4" />
                  System.Error: {error}
                </motion.div>
              )}
              {success && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" />
                  Deployment.Success: Redirecting...
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="group relative flex items-center gap-6 rounded-sm bg-primary px-12 py-5 text-white text-[10px] font-black uppercase tracking-[0.4em] disabled:opacity-20 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Executing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Commit Post
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
