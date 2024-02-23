import React from "react";
import Link from "next/link";
const Header = () => {
  return(
    <header className="bg-cyan-950 text-violet-300 body-font fixed top-0 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-violet-300">Justin Torres</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#Home" className="mr-5 hover:text-violet-900">Home</Link>
          <Link href="#Project" className="mr-5 hover:text-violet-900">Projects</Link>
          <Link href="#Contact" className="mr-5 hover:text-violet-900">Contact Me</Link>
          <Link href="/blog" className="mr-5 hover:text-violet-900">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;