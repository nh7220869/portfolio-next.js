import Image from "next/image";


export default function Home() {
  return (
    <>
   <div className="lg:hidden">
    <h1 className="font-extrabold text-2xl text-center text-gray-700 lg:hidden p-4">Greetings and thank you for visiting our site</h1>
    
    <p className="text-xl p-4">
    Here, I share my love for coding and technology through a variety of projects I’ve worked on. As a passionate developer, I focus on creating clean, efficient, and creative solutions using languages like Java, TypeScript, HTML, and CSS. <br />

Take a tour of my portfolio to explore a range of projects, from web applications to interactive websites. Each project showcases my skills and dedication to delivering a smooth and enjoyable user experience.
    </p>
    
    <Image src="/image.jpeg" alt="image" height={300} width={300} className=" rounded-3xl ml-10 "></Image>
    
   </div>



  {/* for pc */}

   <div className="hidden md:block">
    <h1 className="font-extrabold text-3xl text-center mt-7 mb-20 text-gray-700 hidden md:block">Greetings and thank you for visiting our site</h1>
    
    <p className="text-xl ml-96 mr-20 mt-11">
    Here, I share my love for coding and technology through a variety of projects I’ve worked on. As a passionate developer, I focus on creating clean, efficient, and creative solutions using languages like Java, TypeScript, HTML, and CSS. <br />

Take a tour of my portfolio to explore a range of projects, from web applications to interactive websites. Each project showcases my skills and dedication to delivering a smooth and enjoyable user experience.
    </p>
    
    <Image src="/image.jpeg" alt="image" height={300} width={300} className=" rounded-3xl ml-16 -mt-52 hidden md:block"></Image>
    
   </div>
   </>
  );
}
