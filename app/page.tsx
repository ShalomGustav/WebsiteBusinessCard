import Particle from "./components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/new.jpg')]">
      <div className="absolute right-0 top-0 h-full w-full md:w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-[-20px] md:right-0 bottom-20 md:bottom-20 z-[10]">
        <Image
          src="/assets/face_four.png"
          alt="face_four"
          width={240}
          height={280}
          className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] object-cover"
        />
      </div>
      <Image
        src="/assets/1.png"
        alt="paint"
        width={300}
        height={300}
        className="absolute left-0 top-0"
      />
      <div className="absolute flex flex-col gap-6 z-[10] pl-6 md:pl-10 lg:pl-20 pt-10 md:pt-20 lg:pt-32 bottom-10 md:bottom-20 lg:bottom-32" style={{ transform: 'translateY(-10px)' }}>
        <h1 className="text-[18px] md:text-[30px] lg:text-[40px] text-white max-w-[100%] max-w-[300px] md:max-w-[500px] lg:max-w-[800px]">
          Сайт{" "}
          <span className="text-red-500">- визитка.</span>
        </h1>
        <h1 className="text-[18px] md:text-[30px] lg:text-[40px] text-white max-w-[100%] max-w-[300px] md:max-w-[500px] lg:max-w-[800px]">
          Back-end разработчик{" "}
          <span className="text-red-500">C# / .Net</span>
        </h1>
        <h1 className="text-[18px] md:text-[30px] lg:text-[40px] text-white max-w-[100%] max-w-[300px] md:max-w-[730px] lg:max-w-[980px]">
          Преподаватель{" "}
          <span className="text-red-500">математики / программирования</span>
        </h1>
        <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] mt-[10px] mb-14 md:mb-0 lg:mb-0">
          <Image
            src="/assets/rounded-text.png"
            alt="projects"
            layout="fill"
            className="object-contain slow-spin"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center pb-8">
        <blockquote className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-300 italic">
          &quot;Что можно сказать о человеке, который не интересуется ничем, кроме рисования? <br />
          Человек, интерес которого состоит лишь в чем-то одном, может вызывать лишь жалость. <br />
          Но я не могу заниматься ничем другим.&quot; — Клод Моне
        </blockquote>
      </div>
    </main>
  );
}
