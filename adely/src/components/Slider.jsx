"use client";
import Animate from "./Animate"
import { useState } from "react";
import { motion } from "framer-motion";
import slider1 from "../imgs/slider-1.png";
import slider2 from "../imgs/slider-2.png";
import chevron from "../svg/chevron.svg";
import Image from "next/image";
import Link from "next/link";

export default function Slider() {
  const [active, setActive] = useState(0);

  const handleToggle = () => {
    setActive((prev) => (prev === 0 ? 1 : 0));
  }

  return <div role="slider" className="slider relative">
    <div role="slides" className="relative flex gap-6">
      <motion.div role="slide"
        initial={false}
        animate={{
          x: active === 0 ? 0 : 'calc(100% + 30px)',
          opacity: active === 0 ? 1 : [0, 1],
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grow-1 shrink-0 max-w-full md:w-[60%] md:grow-0 lg:shrink"
      >
        <div role="content" className="mb-2">
          <Animate
            duration={0.8}
            initStyle={{ opacity: 0, y: "300%", }}
            animateStyle={{ opacity: 1, y: "0%", }}
          >
            <h3 className={`font-tanPearl opacity-85 font-normal text-xl md:text-[28px] ${active === 0 ? "text-black/90" : "bg-clip-text text-transparent bg-gradient-to-r from-black/90 from-0% to-white to-65%"} leading-normal`} >NY HJEMMESIDE</h3>
          </Animate>
          <div className="flex items-center gap-3 mt-1">
            <Animate
              duration={0.8}
              initStyle={{ opacity: 0, y: "300%", }}
              animateStyle={{ opacity: 1, y: "0%", }}
            >
              <span role="line" className="w-[1.8px] h-16 block line-color"></span>
            </Animate>
            <div>
              <Animate
                duration={0.8}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <h4 className={`font-suisse opacity-90 font-semibold text-lg md:text-xl ${active === 0 ? "text-black/90" : "bg-clip-text text-transparent bg-gradient-to-r from-black/90 from-0% to-white to-65%"} -mb-[3px]  tracking-wide`}>Topgaard Film ApS</h4>
              </Animate>
              <Animate
                duration={0.8}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <p className={`font-suisse opacity-90 font-normal  ${active === 0 ? "text-black-19" : "w-[370px] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-black-19/90 from-0% to-white to-55%"} text-sm sm:text-base md:text-lg tracking-wide`}>Design, udvikling og vedligeholdelse af Niki Topgaard’s nye hjemmeside</p>
              </Animate>
            </div>
          </div>
        </div>
        <Image
          src={slider1}
          alt="NY HJEMMESIDE"
          className={`object-cover w-full h-[300px] sm:h-auto rounded-tl-2xl ${active === 0 ? "" : "opacity-65"}`}
        />
        {active === 0 && <div className="flex items-start justify-between">
          <Animate
            containerStyle={{}}
            duration={0.8}
            initStyle={{ opacity: 0, y: "300%", }}
            animateStyle={{ opacity: 1, y: "0%", }}
          >
            <div className="bg-white w-fit overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-full before:transition-transform before:duration-300 before:-rotate-[3deg] before:translate-y-4 hover:before:translate-y-0 before:[background-image:linear-gradient(to_left,#2ed1ff12,#c2f2ffa6)] rounded-[3px] mt-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-100">
              <Link href="#" className="font-suisse font-semibold tracking-wider block py-1 px-4 bg-gradient-to-r opacity-90 from-black to-gray-4f4 bg-clip-text text-transparent text-xs sm:text-sm border-[2.2px] border-black/5">SE DENNE CASE</Link>
            </div>
          </Animate>
          <Animate
            duration={0.8}
            initStyle={{ opacity: 0, y: "300%", }}
            animateStyle={{ opacity: 1, y: "0%", }}
          >
            <p className="text-[11px] text-black font-suisseWorks font-medium mt-1 tracking-wider">Web Design</p>
          </Animate>
        </div>}
      </motion.div>

      <motion.div
        role="slide"
        initial={false}
        animate={{
          x: active === 1 ? (window.innerWidth > 768 ? "calc(-100% + -20px)" : "calc(-100% + -25px)") : '0',
          opacity: active === 1 ? 1 : [0, 1],
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`grow-1 max-w-full ${active === 1 ? "md:w-[60%] shrink-0 lg:shrink" : "md:flex-1 shrink-0 mt-[144px]"} `}
      >
        <Image
          src={slider2}
          alt="3D ANIMATION"
          className={`object-cover w-full h-[300px] sm:h-auto rounded-bl-2xl ${active === 1 ? "" : "opacity-65"}`}
        />
        <div role="content" className="mt-4">
          <div>
            <Animate
              duration={0.8}
              initStyle={{ opacity: 0, y: "300%", }}
              animateStyle={{ opacity: 1, y: "0%", }}
            >
              <h4 className={`font-suisse font-semibold opacity-90 tracking-wide text-xl ${active === 1 ? "text-black/90" : "bg-clip-text text-transparent bg-gradient-to-r from-black/90 from-0% to-white to-65%"}`}>Quality Rights A/S</h4>
            </Animate>
            <Animate
              duration={0.8}
              initStyle={{ opacity: 0, y: "300%", }}
              animateStyle={{ opacity: 1, y: "0%", }}
            >
              <p className={`font-suisse font-normal opacity-90 tracking-wide text-lg -mt-0.5 ${active === 1 ? "text-black-19" : "bg-clip-text text-transparent bg-gradient-to-r from-black-19/90 from-0% to-white to-55%"}`}>Animeret en film som har til formål at</p>
            </Animate>
          </div>
          <Animate
            duration={0.8}
            initStyle={{ opacity: 0, x: "-300%", }}
            animateStyle={{ opacity: 1, x: "0%", }}
          >
            <span role="line" className={`h-[1.7px] opacity-90 w-52 block ${active === 1 ? "line-color-2" : "bg-gradient-to-r from-black-999 from-0% to-white to-90%"} mt-4 mb-3`}></span>
          </Animate>
          <Animate
            duration={0.8}
            initStyle={{ opacity: 0, y: "300%", }}
            animateStyle={{ opacity: 1, y: "0%", }}
          >
            <h3 className={`font-tanPearl opacity-85 font-normal text-[28px] ${active === 1 ? "text-black/90" : "bg-clip-text text-transparent bg-gradient-to-r from-black/85 from-0% to-white to-75%"}`}>3D ANIMATION</h3>
          </Animate>
        </div>
      </motion.div>
    </div>
    <Animate
      duration={0.8}
      initStyle={{ opacity: 0, }}
      animateStyle={{ opacity: 1, }}
    >
      <motion.div
        className="w-fit bg-white lg:bg-transparent overflow-hidden absolute left-4 lg:-left-16 top-1/2 -translate-y-[200%] md:-translate-y-1/2 before:absolute before:w-[calc(100%+10px)] before:h-full before:transition-transform before:duration-300 before:-rotate-[10deg] before:translate-y-[18px] hover:before:translate-y-0 before:[background-image:linear-gradient(to_left,#2ed1ff12,#c2f2ffa6)] rounded-[3px] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-200"
        whileTap={{ opacity: 0 }}
      >
        <button
          onClick={handleToggle}
          className="relative z-10 flex items-center justify-center h-[34px] w-[34px] border-[2.2px] border-black/5"
        >
          <Image
            src={chevron}
            width={12}
            height={20}
            className="w-3 h-5"
            alt="chevron icon"
          />
        </button>
      </motion.div>
    </Animate>
  </div>
}