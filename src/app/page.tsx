import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import memoji from './image/memoji-removebg-preview.png'

export default function Home() {
  return (
    <div className="text-black">
      <head>
        <title>Geraldo Saidina's Portfolio</title>
      </head>
      <main className="bg-white px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-black">Geraldo Saidina</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl text-black"/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8 " href="#">Home</a></li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-500">Geraldo Saidina</h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore non tempore in eum possimus iure qui iusto quis sed velit, at amet distinctio natus fuga ipsa, nisi ullam minus doloribus.</p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillGithub className="cursor-pointer" />
          </div>
          <div className="flex justify-center">
            <Image className=" bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 " alt="" src={memoji} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolor alias fugit veritatis delectus, numquam molestias voluptatem est, itaque perferendis consectetur libero eveniet quam quo ad facilis magnam, impedit omnis!
            </p>
          </div>
        </section>
      </main>
      
    </div>
  );
}
