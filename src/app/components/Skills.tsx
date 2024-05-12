import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { SiDart, SiTypescript, SiTailwindcss, SiJavascript, SiAxios } from "react-icons/si";

export default function Skills() {
    return (
        <div className="py-10 -mt-5 mb-10 px-5">
            <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <TbBrandNextjs className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white " /><span className="text-black dark:text-white font-bold text-[12px]">NextJs</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiFlutter className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Flutter</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiDart className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Dart</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiJavascript className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Javascript</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiTypescript className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Typescript</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaHtml5 className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Html</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <IoLogoCss3 className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Css</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiTailwindcss className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Tailwind</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <DiNodejs className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">NodeJs</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <SiAxios className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">Axios</span></div>
                <div className="h-14 w-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <FaReact className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">React</span></div>
                <div className="h-14  md:h-24 md:w-24 border-black dark:border-white  grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
                    <TbBrandReactNative className="h-8 w-8 md:h-12 md:w-12  text-black dark:text-white" /><span className="text-black dark:text-white font-bold text-[12px]">React native</span></div>
            </div>
        </div>
    )
}