"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from 'next/head';

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import memoji from './image/memoji-removebg-preview.png'
import webdev from './image/webdev.svg'
import hero from './image/hero.webp'
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const redirectGithub = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/geraldosaidina';
    link.target = "_blank"
    link.click();
  }

  const redirectLinkedIn = () => {
    const link = document.createElement('a');
    link.href = 'https://www.linkedin.com/in/geraldo-saidina-junior-0237a22a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
    link.target = "_blank"
    link.click();
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Geraldo Saidina's Portfolio</title>
      </Head>
      <main className="font-sans text-black bg-white px-10 dark:bg-gray-900 dark:text-white md:px-20 lg:px-40">
        <section className=" min-h-screen dark:text-white">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-black dark:text-white">Geraldo Saidina</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-black"/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8 " href="https://drive.google.com/file/d/1Fx5LdYeUKTfh3GqI0Mxb5_dgFoTAuLnm/view?usp=sharing" target="_blank">Resume (CV)</a></li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-500 md:text-6xl">Geraldo Saidina</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">Enthusiastic software engineer driven by a love for problem-solving and building cutting-edge applications. With a focus on full-stack development, I leverage my technical skills and creativity to develop solutions that make a positive impact.</p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillLinkedin onClick={redirectLinkedIn} className="cursor-pointer" />
            <AiFillGithub onClick={redirectGithub} className="cursor-pointer" />
          </div>
          <div className="flex justify-center">
            <Image className=" bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:h-96 md:w-96" alt="" src={memoji} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-3 text-center">Services I offer</h3>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              
              <h3 className="text-lg font-medium  pt-8 pb-2">Front-end development</h3>
              <p className="py-2">Creating modern, responsive interfaces ensuring a smooth and optimized user experience.</p>
              <h4 className="py-4 text-teal-600">Tools: </h4>
              <p className="text-gray-800 py-1 dark:text-white">ReactJS</p>
              <p className="text-gray-800 py-1 dark:text-white">NextJS</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind CSS</p>
              <p className="text-gray-800 py-1 dark:text-white">Bootstrap</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              {/* <Image alt="" src={webdev} width={100} height={100} /> */}
              <h3 className="text-lg font-medium  pt-8 pb-2">Back-end development</h3>
              <p className="py-2">Building robust and scalable APIs, integrating databases, and applying architectural principles and best practices.</p>
              <h4 className="py-4 text-teal-600">Tools: </h4>
              <p className="text-gray-800 py-1 dark:text-white">Spring Boot</p>
              <p className="text-gray-800 py-1 dark:text-white">ExpressJS</p>
              <p className="text-gray-800 py-1 dark:text-white">PostgreSQL</p>
              
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <h3 className="text-3xl py-1">Projects</h3>
            
          </div>

          <div className="text-center py-5 items-center">
            
            <h3 className="text-2xl">Shortsbot AI</h3>
            <p className="py-5">An AI-powered web app that generates engaging short videos for TikTok and YouTube. With advanced algorithms, it creates tailored, high-quality content in minutes, simplifying the video creation process for content creators and businesses</p>
            <a className="bg-gray-900 text-white px-4 py-2 rounded-md ml-8 " href="https://shortsbot.ai" target="_blank">Live site</a>
          </div>
          <div>

          </div>

        </section>

        <section>
          <footer className="bg-gray-900 text-white">
      
            <ItemsContainer />
              <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Geraldo Saidina. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
        </div>
      </footer>
        </section>
      </main>
      
    </div>
  );
}
