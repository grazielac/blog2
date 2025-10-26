import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cormorant } from "../fonts/cormorant";

interface BlogCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  author?: string;
  date: string;
  tags?: string[];
  slug: string;
  bgColor: string;
}

function BlogCard({
  title,
  image,
  description,
  author,
  date,
  tags,
  slug,
  bgColor,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div style={{ backgroundColor: bgColor }} className="flex flex-col h-full border bg-white p-5 hover:shadow-lg transition duration-200 border-gray-100">
        <div className="flex flex-col items-center text-center flex-1">
          {/* title */}
          <h2 className={`${cormorant.className} pt-10 line-clamp-2 text-2xl text-center text-gray-700 font-semibold mb-2`}>
            {title}
          </h2>

          {/* image */}
          <div className="relative mb-4 w-full h-120 overflow-hidden p-10 pt-4">
            <Image src={image} alt={title} className="object-cover w-full h-full rounded-lg" />
          </div>

          {/* description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 text-center">{description}</p>
          <p className="text-gray-500 text-sm line-clamp-4 text-center">
             {date}
          </p>

          <div className="pt-10 flex flex-wrap items-center gap-12 justify-around">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-xl"
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
