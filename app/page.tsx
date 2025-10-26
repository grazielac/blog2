"use client";
import { useState } from "react";
import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import { posts } from "./data/posts";
import SortDropdown from "./components/SortDropdown";
import NewPost from "./components/NewPost";

export default function Home() {
  // sort

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

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
      <div className=" w-full px-5 flex justify-between items-center mb-4">
        <SortDropdown onChange={setSortOrder} />
        
        <NewPost />
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {filterPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            image={post.image}
            description={post.description}
            date={post.date}
            tags={post.tags}
            bgColor={post.bgColor}
          />
        ))}
      </main>
    </>
  );
}
