import React from 'react';
import Post from './Post';
const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a href={post.url}>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      </a>
      <div className="p-4 sm:p-6">
        <a href={post.url} className="text-lg font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors duration-300">
          {post.title}
        </a>
        <div className="text-sm font-medium text-gray-500 mb-2">
          By {post.author} on {post.date}
        </div>
        <p className="text-gray-700">{post.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
