"use client"

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-screen-[99vw] h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/image/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className=" md:text-[50px] text-[30px] text-white font-semibold">
            Mohamad Fadel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Frontend Developer
            </span>
          </h1>
          <p className="text-[12px] text-justify md:text-[16px] md:text-gray-200 md:block ">
            Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications. Experience in developing applications using NodeJs Services, MongoDb, and Restful Web Services. Experience in developing web applications using HTML, CSS,SASS, JavaScript, ReactJS,
            and NextJs. and accustomed to working using SDLC and Agile methods in developing a website.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/experience"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Experience
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Projects
            </Link>

            <Link
              href="/resume"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-[13rem] z-[20] right-5 flex-col md:hidden gap-5">
      <Link
              href="/experience"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Experience
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Projects
            </Link>

            <Link
              href="/resume"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Resume
            </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/image/horse.png"
          alt="horse"
          width = {300}
          height = {200}
          className="absolute right-30 top-[17rem] md:right-55 md:top-40"
        />

        <Image src="/image/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/image/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/image/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}