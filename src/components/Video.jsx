"use client";
import Animate from "@/components/Animate";
import Image from "next/image";
const room = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";
import Player from "@vimeo/player";
import LazyLoadVideo from "./LazyLoadVideo";
import { useRef, useState, useEffect } from "react";

export default function VideoReel() {
  const container = useRef(null);
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (iframeRef.current && !player) {
      const newPlayer = new Player(iframeRef.current);
      setPlayer(newPlayer);

      newPlayer.on("loaded", () => {
        setIsLoading(false);
      });

      newPlayer.on("bufferstart", () => {
        setIsLoading(true);
      });

      newPlayer.on("bufferend", () => {
        setIsLoading(false);
      });

      newPlayer.on("ended", () => {
        setIsPlaying(false);
        newPlayer.setCurrentTime(0)
      });
    }
  }, [iframeRef, player]);

  const handlePlayPause = (e) => {
    if (!player) return;
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }
  };

  return <div className="xl:max-w-[80%] mx-auto">
    <div ref={container} onClick={handlePlayPause} className="group/video cursor-pointer relative mx-auto">
      <p className="font-suisseWorks font-medium text-[11px] tracking-wider text-black text-right mb-1.5">3D Animation / Storytelling</p>
      <Image
        src={room}
        className="invisible appearance-none opacity-0 w-full sm:h-auto object-cover"
        loading="lazy"
        alt="3D Animation / Storytelling"
      />
      <iframe
        ref={iframeRef}
        src="https://player.vimeo.com/video/598738228?title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;app_id=122963"
        width="1920"
        height="1080"
        frameBorder="0"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="Femme Fatale Studio - Showreel 2021" data-ready="true"
        className="absolute -z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%]"
      >
      </iframe>
      <button
        className={`w-14 h-14 sm:w-20 sm:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          transition-all duration-500 ease-linear group-hover/video:scale-125 sm:group-hover/video:scale-150
          ${isPlaying ? "opacity-0" : "opacity-100"}`}
      >
        <svg viewBox="0 0 100 100" >
          <defs>
            <mask id="maskCircle0">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <polygon points="45 40, 60 50, 45 60" fill="black" />
            </mask>
          </defs>
          <circle
            mask="url(#maskCircle0)"
            fill="white"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
      </button>
      <button
        className={`w-14 h-14 sm:w-20 sm:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        transition-all duration-500 ease-linear group-hover/video:scale-125 sm:group-hover/video:scale-150
        ${!isPlaying ? "opacity-0" : `${isLoading ? "opacity-0" : "opacity-0 group-hover/video:opacity-100"}`}`}
      >
        <svg viewBox="0 0 100 100">
          <defs>
            <mask id="maskPause0">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <rect x="42" y="40" width="5" height="20" fill="black" />
              <rect x="52" y="40" width="5" height="20" fill="black" />
            </mask>
          </defs>
          <circle
            mask="url(#maskPause0)"
            fill="white"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
      </button>
    </div>

    <Animate
      duration={0.8}
      initStyle={{ opacity: 0, y: "300%", }}
      animateStyle={{ opacity: 1, y: "0%", }}>
      <h2 className="font-tanPearl font-normal text-xl md:text-[28px] text-black/90 mt-7 md:mt-10">
        EN FIKTIV SUCCESHISTORIE
      </h2>
    </Animate>

    <Animate
      duration={0.8}
      initStyle={{ opacity: 0, y: "300%", }}
      animateStyle={{ opacity: 1, y: "0%", }}
    >
      <p className="font-suisse font-normal mt-5 text-sm md:text-lg tracking-wide text-black-19 opacity-90 leading-[22px]">En pingvin kæmper med at skaffe kunder til sin fiskebutik. Frustreret ser han en Adely Media-annonce og får hjælp til markedsføring. Pludselig strømmer kunderne til og pingvinen er overrasket.</p>
    </Animate>

    <Animate
      duration={0.8}
      initStyle={{ opacity: 0, y: "300%", }}
      animateStyle={{ opacity: 1, y: "0%", }}
    >
      <p className="font-suisse font-normal mt-3.5 text-sm md:text-lg tracking-wide text-black-19 opacity-90 leading-[22px]">Filmen slutter med, at pingvinen nyder en piña colada foran sin fine lille butik – en sjov og kreativ fortælling om, hvordan vi kan hjælpe din virksomhed ved hjælp af kreative løsninger!</p>
    </Animate>
  </div>
}