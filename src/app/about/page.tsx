import Image from "next/image";

export default function About(){
return(<>
<div className="p-10 hidden md:block" >
<h1 className="ml-72 mt-12 text-2xl font-extrabold text-gray-700">Hello, I'm Noor Ul Sehar!
</h1>
<p className="ml-72 mr-10 mt-5 text-xl">
I’m a dedicated developer with a strong passion for coding and technology. Specializing in languages like Java, TypeScript, HTML, and CSS, I enjoy creating projects that solve real-world problems while focusing on quality, user experience, and innovation.
<br />
Through CodeCraft Hub, I aim to showcase my journey in the world of software development. My projects reflect my commitment to growth, learning, and crafting solutions that make a difference.
</p>
<Image className="rounded-full -mt-64" src="/pic.jpeg" alt="picture" height={350} width={250} />
</div>



{/* for moblie */}
<div className="p-2 lg:hidden">
<h1 className=" -scroll-mt-2 text-2xl font-bold text-center ">Hello, I'm Noor Ul Sehar!</h1>
<p className="ml-2 mr-2 mt-5">
I’m a dedicated developer with a strong passion for coding and technology. Specializing in languages like Java, TypeScript, HTML, and CSS, I enjoy creating projects that solve real-world problems while focusing on quality, user experience, and innovation.
<br />
Through CodeCraft Hub, I aim to showcase my journey in the world of software development. My projects reflect my commitment to growth, learning, and crafting solutions that make a difference.
</p>
<Image className="rounded-full mt-2 ml-14" src="/pic.jpeg" alt="picture" height={250} width={250} />
</div>
</>
)
}