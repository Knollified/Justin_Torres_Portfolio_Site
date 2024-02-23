import React from "react";

const page = ({ posts }) => {
  return (
    <section className="bg-gradient-to-r from-indigo-800 to-cyan-900 text-violet-200 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div>
          <h1>Blog</h1>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
