"use client";

import { useState, useRef, useEffect } from "react";
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
  const [category, setCategory] = useState("");
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
    <div className="space-y-8 max-w-5xl mx-auto pb-20">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Post Metadata Card */}
        <div className="glass rounded-2xl border border-white/10 p-8 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Title</label>
              <input
                name="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="The Future of Web Development"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 font-medium"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-zinc-400">Slug (URL path)</label>
                {isSlugManual && (
                  <button 
                    type="button" 
                    onClick={() => {
                      setIsSlugManual(false);
                      setSlug(title.toLowerCase().trim().replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-+|-+$/g, ""));
                    }}
                    className="text-xs text-primary hover:underline"
                  >
                    Auto-generate
                  </button>
                )}
              </div>
              <input
                name="slug"
                type="text"
                value={slug}
                onChange={handleSlugChange}
                placeholder="future-web-dev"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 font-mono"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-semibold text-zinc-400 ml-1 block">Category</label>
            <div className="flex flex-wrap gap-3">
              {["Project", "DevLog", "Insights"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl border text-sm font-bold transition-all",
                    category === cat
                      ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105"
                      : "bg-white/5 border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-300"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input type="hidden" name="category" value={category} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-400 ml-1">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief summary of your post... (recommended: 150-160 characters)"
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 resize-none"
            />
            <div className="text-right text-xs text-zinc-500 font-mono mt-1">
              {description.length} chars
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-xl min-h-[650px] flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-white/10 bg-white/2 gap-4">
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
            
            {activeTab === "edit" && (
              <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg border border-white/5 overflow-x-auto scrollbar-none">
                <button type="button" onClick={() => insertFormatting("**", "**")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Bold"><Bold className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("*", "*")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Italic"><Italic className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("### ")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Heading"><Heading className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-white/10 mx-1"></div>
                <button type="button" onClick={() => insertFormatting("[", "](url)")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Link"><LinkIcon className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("> ")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Quote"><Quote className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("`", "`")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Code"><Code className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("\n```typescript\n", "\n```\n")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Code Block"><Code className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("- ")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="List"><List className="w-4 h-4" /></button>
                <button type="button" onClick={() => insertFormatting("![alt text](", ")")} className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded transition-colors" title="Image"><ImageIcon className="w-4 h-4" /></button>
              </div>
            )}
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
                  className="absolute inset-0 flex flex-col"
                >
                  <textarea
                    ref={textareaRef}
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your masterpiece here in Markdown..."
                    className="w-full flex-1 bg-transparent p-8 outline-none resize-none font-mono text-sm md:text-base text-zinc-300 leading-relaxed placeholder:text-zinc-700"
                    required
                  />
                  <div className="flex justify-end p-2 bg-black/20 border-t border-white/5 text-xs text-zinc-500 font-mono">
                    {content.split(/\s+/).filter(Boolean).length} words | {content.length} characters
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 overflow-auto p-8 prose prose-invert prose-blue max-w-none prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-img:rounded-xl"
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
                Publishing...
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
