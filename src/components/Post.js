import React from "react";
import BlogCard from "./BlogCard";

const Post = () => {
  const posts = [
    {
      title: "The Benefits of Meditation",
      author: "John Doe",
      date: "May 1, 2023",
      image: "/blog-image-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra fringilla mauris, at blandit mauris sollicitudin vel. Suspendisse lacinia sodales interdum.",
      url: "#",
    },
    {
      title: "10 Tips for Better Sleep",
      author: "Jane Smith",
      date: "April 27, 2023",
      image: "/blog-image-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra fringilla mauris, at blandit mauris sollicitudin vel. Suspendisse lacinia sodales interdum.",
      url: "#",
    },
    {
      title: "How to Build a Successful Business",
      author: "Bob Johnson",
      date: "April 20, 2023",
      image: "/blog-image-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra fringilla mauris, at blandit mauris sollicitudin vel. Suspendisse lacinia sodales interdum.",
      url: "#",
    },
  ];

  return (
    <section className="bg-[#fffffe] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" mt-2 text-center text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          What we Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
