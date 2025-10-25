"use client";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import lovenote from "../../../public/lovenote.png";

// dynamic blog post for each content

interface Post {
  slug: string;
  title: string;
  image: StaticImageData;
  description: string;
  author: string;
  date: string;
  content: string;
}

const posts: Post[] = [
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to Barcelona",
    image: lovenote,
    description: "Hello world u there",
    author: "Graziela Caringal",
    date: "October 25, 2025",
    content: "Full content here...",
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
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
    </div>
  );
}
