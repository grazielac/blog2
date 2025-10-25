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
      <div className="border bg-white p-5 hover:shadow-lg transition duration-200 border-gray-100">
        <div className="flex flex-col items-center text-center">
          <h2 className="p-5 text-2xl text-gray-700 font-semibold mb-2">
            {title}
          </h2>
          <div className="relative w-[400px] h-[500px] mb-5">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded object-cover"
          />
          </div>

          <div className="p-2 pt-10">
            <p className="text-gray-500 mb-3">{description}</p>
            <p className="text-gray-500 mb-3">
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
      </div>
    </Link>
  );
}

export default BlogCard;
