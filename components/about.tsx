"use client";

import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="profile"
      className="w-full min-h-screen bg-none text-xl tracking-wide text-slate-300 font-light px-6 py-6 mb-24"
      // Replay animations and trigger when 20% of the section is visible
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center w-full mb-8">
        <hr className="flex-grow border-t-1 border-teal-400 mb-1 rounded-full" />

        <h2 className="my-0 ml-4 text-teal-400 font-semibold tracking-widest">
          PROFILE
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[180px] h-[180px] mb-12">
          <Image
            src="/images/front-pic.jpeg"
            width={500}
            height={500}
            className="rounded-full"
            alt="Picture of the author"
          />
        </div>
      </div>

      <p>
        I’m a developer who loves creating user-friendly applications that look
        great and work smoothly. I enjoy blending creative design with strong
        technical skills to build experiences that are easy to use and perform
        well.
      </p>
      <div className="my-4" />
      <p>
        Currently, I’m learning more about back-end development with tools like
        Java and .NET to add to my skills in JavaScript and React. This helps me
        build complete solutions that connect the front-end and back-end
        seamlessly.
      </p>
      <div className="my-4" />
      <p>
        When I’m not coding, I enjoy watching movies, keeping up with new tech
        and design trends, and exploring hobbies that combine creativity and
        logic.
      </p>
    </section>
  );
}
