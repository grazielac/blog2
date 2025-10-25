"use client";
import { useState } from "react";
import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import { posts } from "./data/posts";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filterPosts = 
    !selectedTag
    ? posts
    : posts.filter((post) =>
      post.tags?.some(
        (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
      )
    );

  return (
    <>
      <Nav onTagSelect={setSelectedTag} />
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filterPosts.map((post, index) => (
          <BlogCard
            key={index}
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
