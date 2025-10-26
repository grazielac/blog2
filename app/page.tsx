"use client";
import { useState } from "react";
import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import { posts } from "./data/posts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SortDropdown from "./components/SortDropdown";

export default function Home() {
  // sort
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
      <SortDropdown />
      <div className="flex ">
        <div className="col-span-full flex gap-4 mb-4">
          <p className="text-sm bg-gray-200 py-2 px-2 rounded-2xl p-8 m-5">
            SORT
          </p>
          <Link href="/blog?sort=asc">Sort ascending</Link>
          <Link href="/blog?sort=desc">Sort descending</Link>
        </div>
        <div className="col-span-full flex gap-4 mb-4">
          <p className="text-sm bg-gray-200 py-2 px-2 rounded-2xl p-8 m-5">
            FILTER
          </p>
          <Link href="/blog?sort=asc">Sort ascending</Link>
          <Link href="/blog?sort=desc">Sort descending</Link>
        </div>
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
