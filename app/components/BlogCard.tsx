import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  author: string;
  date: string;
  tags?: string[];
  slug: string;
}

function BlogCard({
  title,
  image,
  description,
  author,
  date,
  tags,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex flex-col h-full border bg-white p-5 hover:shadow-lg transition duration-200 border-gray-100">
        <div className="flex flex-col items-center text-center flex-1">
          {/* title */}
          <h2 className="line-clamp-2 text-lg text-center text-gray-700 font-semibold mb-2">
            {title}
          </h2>

          {/* image */}
          <div className="relative mb-4 w-full h-120 overflow-hidden p-10 pt-8">
            <Image src={image} alt={title} className="object-cover w-full h-full" />
          </div>

          {/* description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-4 text-center">{description}</p>
          <p className="text-gray-500 text-sm mb-4 line-clamp-4 text-center">
            {author} - {date}
          </p>

          <div className="pt-15 flex justify-between">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold text-gray-600"
                >
                  {tag}
                </span>
              ))}

            <p className="text-xs font-semibold text-gray-600">READ ME</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
