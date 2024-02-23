import Image from "next/image";
import Link from "next/link"
import React from "react";
import Contact from "../contact/page"

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-800 to-cyan-900 text-violet-200 body-font">
      <div id="Home" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/Prof_img.jpg"
            height={500}
            width={400}
          />
        </div>
        <br/>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-violet-300">
            Justin Torres
          </h1>
          <h2 className="sub-title-font sm:text-2xl text-1xl mb-2 font-medium text-violet-300">
            Junior Web Developer | Software Engineer
          </h2>
          <br/>
          <p className="mb-8 leading-relaxed">
            I am an aspiring developer dedicated to refining my skills and driving innovative projects forward. My passion for crafting and designing solutions is matched only by my commitment to problem-solving, honed through four years of hands-on experience in designing, developing, and implementing applications across various technologies and programming languages. I am eager to leverage my diverse development background and technical expertise in a challenging role as a junior front-end developer/software engineer. 
          </p>
          <div className="flex justify-center">
            <Link href="/blog">
              <button className="inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg">
                Visit Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </section>
    
  );
};

export default Hero;