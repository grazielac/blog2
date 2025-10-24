import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  author: string;
  date: string;
}

function BlogCard({ title, image, description, author, date }: BlogCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-200 border border-gray-100">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-3">{description}</p>
        <p className="text-gray-400 mb-3">{author}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
