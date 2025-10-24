import React from 'react'

interface BlogCardProps {
    title: string;
    img: url;
    description: string;
    author: string;
    date: string;
}

function BlogCard({ title, img, description, author, date }: BlogCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-200 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 mb-3">{description}</p>
      <p className="text-gray-400 mb-3">{author}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  )
}

export default BlogCard
