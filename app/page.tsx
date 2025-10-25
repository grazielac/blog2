"use client";
import { useState } from "react";
import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import { posts } from "./data/posts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("sort");

  const sortedPosts = query === "desc" ? [...posts].reverse() : posts;

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // filter by tag
  const filterPosts = !selectedTag
    ? sortedPosts
    : sortedPosts.filter((post) =>
        post.tags?.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
        )
      );

  return (
    <>
      <Nav onTagSelect={setSelectedTag} />
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full flex gap-4 mb-4">
          <Link href="/blog?sort=asc">Sort ascending</Link>
          <Link href="/blog?sort=desc">Sort descending</Link>
        </div>
        {filterPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            image={post.image}
            description={post.description}
            author={post.author}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </main>
    </>
  );
}
