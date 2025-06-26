"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Homes() {
  const [number,setNumber]=useState(10)


  //useEffect is triggered when value of number changes
  
  useEffect(() => {
    //adding event listener so that it can track scroll behaviour
     const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 50) {
        setNumber((prevValue)=> prevValue+1)
      }
    };

    window.addEventListener("scroll", handleScroll);

    AOS.init({
      offset: 50,
      duration: 600,
      easing: 'fade-up',
      delay: 100,
    });
  }, [number])

  return (
    <div className="py-30">
      <div className="w-[70%] grid mx-auto ">
        <p className="text-center font-bold text-2xl">Vertical scrolling</p>
        {number > 19 ? [...Array(number)].splice(0, 19).map((_, i) => (
          <div className="bg-gradient-to-b from-green-500 via-yellow-400 to-teal-500 my-2 py-2 flex justify-center text-white" key={i} data-aos="fade-up" data-aos-delay={i * 500}>
            <span className="w-12 h-12 bg-blue-400 flex justify-center items-center rounded-[50%]">{i + 1}</span>
          </div>
        )) : [...Array(number)].map((_, i) => (
          <div className="bg-gradient-to-b from-green-500 via-yellow-400 to-teal-500 my-2 py-2 flex justify-center text-white" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <span className="w-12 h-12 bg-blue-400 flex justify-center items-center rounded-[50%]">{i+1}</span>
          </div>
        ))}

        {number > 25 && <p className="text-center font-bold text-2xl mt-4 mb-1">Horizontal scrolling</p>}
        
        {number >19 && <div className="border-green-300 border-2 px-1 h-38 flex gap-x-4 w-full overflow-x-auto overflow-y-hidden">
          
          {
            [...Array(number)].splice(20, 11).map((_,i)=>{
              return <div className="w-32 h-32  shrink-0 items-center bg-gradient-to-b from-green-500 via-yellow-400 to-teal-500 my-2 py-2 flex justify-center text-white" key={i} data-aos="fade-up" data-aos-delay={ i*500}>
                {i+1+19}
              </div>
            })
          }
        
        </div>}
        {number > 33 && <p className="text-center font-bold text-2xl mt- mb-1">Vertical scrolling</p>}
        {number > 30 && [...Array(number)].splice(30, number).map((_, i) => (
          <div className="bg-gradient-to-b from-green-500 via-yellow-400 to-teal-500 my-2 py-2 flex justify-center text-white" key={i} data-aos="fade-up" data-aos-delay={i * 500}>
            <span className="w-12 h-12 bg-blue-400 flex justify-center items-center rounded-[50%]">{i + 1+30}</span>
          </div>
        ))}
      </div>

      
      
    </div>
    
  )
}
