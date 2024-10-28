// src/app/project/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
  return (
    <div className="p-8">
      <div className="text-center font-extrabold text-3xl mb-6 text-gray-700">
        <h1 >My Projects</h1>
      </div>
      
      {/* Project containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 h-96">
          <h2 className="text-xl font-semibold mb-4">Number game</h2>
          
          <img 
    src="/game.png"
    alt="Number Game" 
    className="w-full h-60 mb-4 rounded" 
  />
          <a
  href="https://updatednumbergame.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-500 hover:underline"
>
 Click here
</a> <br />
to view

        </div>

        {/*  Project 2 */}
        <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 h-96">
          <h2 className="text-xl font-semibold mb-4">Word Counter</h2>
          
          <img 
    src="/wordcounter.png"
    alt="Word Counter" 
    className="w-full h-60 mb-4 rounded" 
  />
          <a
  href="https://counterword.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-500 hover:underline"
>
 Click here
</a> <br />
to view

        </div>

        {/* Project 3 */}
        <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 h-96">
          <h2 className="text-xl font-semibold mb-4">Quize</h2>
          
          <img 
    src="/quize.png"
    alt="Quize" 
    className="w-full h-60 mb-4 rounded" 
  />
          <a
  href="https://updated-eight.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-500 hover:underline"
>
 Click here
</a> <br />
to view

        </div>

         {/* Project 4 */}
<div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">Calculator</h2>
  
  <img 
    src="/calcu.png"
    alt="Calculator" 
    className="w-full h-60 mb-4 rounded" 
  />
  <a
    href="https://calculator-lyart-eta.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div>

{/*project5*/}
<div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 h-96 mt-7">
          <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
          
          <img 
    src="/currency.png"
    alt="Currency converter" 
    className="w-full h-60 mb-4 rounded" 
  />
          <a
  href="https://currencyconverter-teal.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-500 hover:underline h-80"
>
 Click here
</a> <br />
to view

        </div>

            
          {/*project6*/}
          <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">ATM Machine</h2>
  
  <img 
    src="/ATM.PNG"
    alt="ATM Machine" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://atmmeachain.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div>
      {/*project7*/}
      <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">MY BANK</h2>
  
  <img 
    src="/bank.PNG"
    alt="MY BANK" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://mybank-three.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div>
          {/*project8*/}

      <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">To-Do list</h2>
  
  <img 
    src="/todo.PNG"
    alt="Todo list" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://todo-list-alpha-one-82.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div>  

  {/*project9*/}
  <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">Student Management</h2>
  
  <img 
    src="/mng.PNG"
    alt="Student Management" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://studentma.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div> 
             

             {/*project10*/}
             <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">Countdown Timer</h2>
  
  <img 
    src="/count.PNG"
    alt="Countdown Timer" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://countdowntimer-taupe.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div> 

               {/*project11*/}
               <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">Resume Builder</h2>
  
  <img 
    src="/pdfresume.PNG"
    alt="Resume Builder" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://pdf-downloader-resume.vercel.app//"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div> 

       {/*project11*/}
       <div className="bg-black text-yellow-500 text-center shadow-md rounded-lg p-6 mt-6 h-96">
  <h2 className="text-xl font-semibold mb-4">MY Resume</h2>
  
  <img 
    src="/resume.PNG"
    alt="MY Resume" 
    className="w-full  mb-4 rounded h-60" 
  />
  <a
    href="https://resume-six-rose.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-500 hover:underline"
  >
    Click here
  </a>
  <br />
  to view
</div> 
      </div>
    </div>
  );
};

export default Project