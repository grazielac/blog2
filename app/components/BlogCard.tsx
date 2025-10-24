import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  author: string;
  date: string;
}

function BlogCard({ title, image, description, author, date }: BlogCardProps) {
  return (
    <div className=" bg-white p-5 hover:shadow-lg transition duration-200 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <h2 className="p-5 text-2xl font-semibold mb-2">{title}</h2>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-3/4 h-2/3 object-cover"
        />

        <div className="p-5">
          <p className="text-gray-400 mb-3">{description}</p>
          <p className="text-gray-400 mb-3">{author}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
