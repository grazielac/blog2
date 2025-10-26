"use client";
import Image from "next/image";
import { posts } from "../../data/posts";
import { cormorant } from "../../fonts/cormorant";
import AddComment from "@/app/components/AddComment";
import { useState } from "react";
import HomeButton from "@/app/components/HomeButton";

interface BlogPostProps {
  postId: string;
}
// dynamic blog post for each content
export default function BlogPost({ postId }: BlogPostProps) {
  // find post by slug
  // const { postId } = useParams() as { postId: string };
  const post = posts.find((p) => p.slug === postId);
  const [comments, setComments] = useState<string[]>([]);

  console.log("postId:", postId);
  console.log("posts:", posts);

  if (!post) return <p>Post not found</p>;

  const handleAddComment = (comment: string) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <>
     <HomeButton />
    <div className="max-w-3xl mx-auto p-8">
      <h1 className={`${cormorant.className} text-4xl font-bold mb-4`}>
        {post.title}
      </h1>
      <p className="text-gray-500 mb-2">
        {post.author} - {post.date}
      </p>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="object-cover mb-5"
      />
      <p className="text-gray-700">{post.content}</p>
      <AddComment onSubmit={handleAddComment} />

      <ul className="mt-4 space-y-2">
        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet.</p>
        )}
        {comments.map((comment, index) => (
          <li
            key={index}
            className="border border-gray-200 rounded p-2 bg-gray-50"
          >
            {comment}
          </li>
        ))}
      </ul>
    </div>
  
  </>
  );
}
