"use client";
import { useState, useEffect, useRef } from "react";
import Animate from "@/components/Animate";
import mainimg from "../imgs/main.png";
import Image from "next/image";
import arrowD from "../svg/arrow-d.svg";

export default function Hero({ scrollInstance }) {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    if (!scrollInstance) return;
    const onScroll = ({ actualScroll }) => {
      setIsScrolled(actualScroll);
    };
    scrollInstance.on('scroll', onScroll);
    return () => scrollInstance.off('scroll', onScroll);
  }, [scrollInstance]);


  const handleScrollToContent = (e) => {
    e.preventDefault();
    if (scrollInstance) {
      scrollInstance.scrollTo("#content", { offset: -100 });
    }
  };

  return <div className="relative w-full h-full">
    <Image
      src={mainimg}
      alt="hero main image"
      className="h-full w-full bg-black object-cover"
      style={{ transition: "0.2s ease-out", filter: isScrolled > 0 && `brightness(${1 - isScrolled / 1100})` }}
    />
    <div className="w-full absolute top-1/2 left-1/2 text-white space-y-7"
      style={{ transform: `translate(-50%, ${-50 + Math.min(isScrolled / 15, 50)}%)` }}
    >
      <Animate
        duration={1}
        initStyle={{ opacity: 0, y: "300%", scale: 0.9 }}
        animateStyle={{ opacity: 1, y: "0%", scale: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-tanPearl font-normal text-center !leading-normal">ADELY MEDIA</h1>
      </Animate>

      <div className="space-y-2 text-xl md:text-[28px] font-suisse font-normal text-center leading-relaxed tracking-wider">
        <Animate
          duration={1}
          delay={0.05}
          initStyle={{ opacity: 0, y: "300%", scale: 0.9 }}
          animateStyle={{ opacity: 1, y: "0%", scale: 1 }}
        >Fremtidens</Animate>
        <Animate
          duration={1}
          delay={0.09}
          initStyle={{ opacity: 0, y: "300%", scale: 0.9 }}
          animateStyle={{ opacity: 1, y: "0%", scale: 1 }}
        >
          digitale løsninger
        </Animate>
      </div>
    </div>
    <button type="button" onClick={handleScrollToContent}
      className="block px-4 pt-6 w-full max-w-[calc(100%-70px)] md:max-w-[calc(100%-200px)] xl:max-w-[80%] text-center absolute left-1/2 -translate-x-1/2 -bottom-16 bg-white rounded-tr-2xl"
      style={{ transform: `translate(-50%,${Math.min(isScrolled / 20, 20)}px)` }}
    >
      <Animate
        duration={1}
        initStyle={{ opacity: 0, y: "-300%", scale: 0.9 }}
        animateStyle={{ opacity: 1, y: "0%", scale: 1 }}
      >
        <Image
          src={arrowD}
          alt="arrow down"
          className="mx-auto w-[30px] h-[40px] md:w-10 md:h-[50px] transition-transform duration-300 hover:scale-110"
        />
      </Animate>
      <Animate
        duration={1}
        initStyle={{ opacity: 0, y: "300%", }}
        animateStyle={{ opacity: 1, y: "0%", }}
      >
        <p className="font-suisse font-normal text-gray-4f4 text-sm sm:text-base md:text-xl mt-4 tracking-wide">Dyk ned i din virksomheds fremtid</p>
      </Animate>
    </button>
  </div>
}