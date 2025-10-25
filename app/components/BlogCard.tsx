import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  author: string;
  date: string;
  tags: string[];
}

function BlogCard({ title, image, description, author, date }: BlogCardProps) {
  return (
    <div className="border bg-white p-5 hover:shadow-lg transition duration-200 border-gray-100">
      <div className="flex flex-col items-center text-center">
        <h2 className="p-5 text-2xl text-gray-700 font-semibold mb-2">{title}</h2>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-3/4 h-2/3 object-cover"
        />

        <div className="p-2 pt-10">
          <p className="text-gray-500 mb-3">{description}</p>
          <p className="text-gray-500 mb-3">{author}</p>
          <p className="text-sm text-gray-500">{date}</p>
          <div className="pt-15 flex justify-between">
            <p className="text-xs font-semibold text-gray-600">TAGS HERE</p>
            <p className="text-xs font-semibold text-gray-600">READ ME</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
