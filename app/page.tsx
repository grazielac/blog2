"use client";
import { useState } from "react";

import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import lovenote from "../public/lovenote.png";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const posts = [
    {
      slug: "my-trip-to-barcelona",
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL", "PERSONAL"],
      content: "Full blog content goes here..."
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["WORK", "CAREER"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["CREATIVE", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["LIFESTYLE", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL", "PERSONAL"],
    },
  ];

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
