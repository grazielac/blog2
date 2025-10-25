"use client";
import { useState } from "react";

import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import lovenote from "../public/lovenote.png";

export default function Home() {
  const posts = [
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL, ", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL, ", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL, ", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL, ", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL, ", "PERSONAL"],
    },
    {
      title: "My trip to barcelona",
      image: lovenote,
      description: "Hey playboy it's about time",
      author: "Graziela Caringal",
      date: "October 24, 2025",
      tags: ["TRAVEL, ", "PERSONAL"],
    },
  ];

  return (
    <>
      <Nav />
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
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
