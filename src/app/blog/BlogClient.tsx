"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, MoveRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Post, PostMetadata } from "@/types/blog";
import { formatDate, cn } from "@/lib/utils";
import BentoCard from "@/components/ui/BentoCard";
import { CATEGORIES, CATEGORY_COLORS } from "@/lib/constants";

interface BlogClientProps {
  posts: PostMetadata[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Search & Filter UI */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pb-8 border-b border-white/5">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search by title, description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600 font-medium"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="h-3 w-3 text-zinc-400" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory("All")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border",
              selectedCategory === "All"
                ? "bg-white text-zinc-950 border-white shadow-lg"
                : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
            )}
          >
            All
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border",
                selectedCategory === category
                  ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center text-zinc-500">
        <p className="text-sm font-medium">
          Showing <span className="text-white">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'post' : 'posts'}
        </p>
        {(searchQuery || selectedCategory !== "All") && (
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="text-xs font-bold text-primary hover:underline underline-offset-4"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <BentoCard 
                  href={`/blog/${post.slug}`}
                  className="p-8 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-x-4 mb-6">
                      <time dateTime={post.date} className="editorial-label">
                        {formatDate(post.date)}
                      </time>
                      <span className={cn(
                        "px-2 py-0.5 rounded-md editorial-label border",
                        CATEGORY_COLORS[post.category as keyof typeof CATEGORY_COLORS] || "bg-primary/10 text-primary border-primary/20"
                      )}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-extrabold leading-tight mb-4 group-hover:text-primary transition-colors tracking-tight">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-sm text-zinc-500 line-clamp-3 mb-8 flex-1">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-400 group/link hover:text-white transition-colors"
                      >
                        Read Post
                        <MoveRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center glass rounded-3xl border border-white/5"
        >
          <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Filter className="h-8 w-8 text-zinc-600" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
          <p className="text-zinc-500 max-w-xs mx-auto">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </motion.div>
      )}
    </div>
  );
}
