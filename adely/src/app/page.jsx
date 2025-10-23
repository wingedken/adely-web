'use client';
import useButteryScroll from "@/components/useScroll";
import Animate from "@/components/Animate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import LazyLoadVideo from "@/components/LazyLoadVideo";
import Link from "next/link";
import Slider from "@/components/Slider";
import zine from "../imgs/zine.jpg";
import smoke from "../imgs/smoke.png";
import girls from "../imgs/girls.png";
import scaled from "../imgs/scaled.png";
import bgSec3 from "../imgs/bg-sec-2.jpg";
import partner1 from "../imgs/partner-1.png";
import partner2 from "../imgs/partner-2.png";
import partner3 from "../imgs/partner-3.png";
import partner4 from "../imgs/partner-4.png";
import partner5 from "../imgs/partner-5.png";
import partner6 from "../imgs/partner-6.png";
import partner7 from "../imgs/partner-7.png";
import partner8 from "../imgs/partner-8.png";
import logo2 from "../svg/logo-scroll.svg";
import VideoReel from "@/components/Video";

export default function Home() {
  const { scrollInstance } = useButteryScroll()

  return (
    <>
      <Header scrollInstance={scrollInstance} />
      <main className="h-[calc(100vh_-180.24px)]">
        <div className="container-sp h-full" >
          <Hero scrollInstance={scrollInstance} />
        </div>
      </main>
      <section className="pt-48 md:pt-64 pb-32 overflow-hidden">
        <div id="content" className="w-full px-4 md:pr-0 lg:pl-[120px] xl:pl-[17%]">
          <Slider />
        </div>
      </section>
      <section className="py-20 xl:max-w-[91%] blusih-radial relative md:mt-24 mb-32">
        <LazyLoadVideo src="/video/dust.mp4">
          <video preload="none" muted playsInline autoPlay loop className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.23]" >
            Your browser does not support the video tag.
          </video>
        </LazyLoadVideo>
        <div className="container-sp xl:!max-w-[82.5%]">
          <div className="flex gap-14 md:gap-20 relative z-10">
            <h3 className="font-tanPearl flex flex-col gap-2 font-normal  text-5xl text-white">
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px #5b7386 " }}>L</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px #5b7386" }}>Ø</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px #5b7386" }}>S</span>
              </Animate>
              <Animate
                containerStyle={{ overflowY: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px rgb(91 115 134 / 86%)" }}>N</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px rgb(91 115 134 / 69%)" }}>I</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px rgb(91 115 134 / 45%)" }}>N</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px rgb(91 115 134 / 30%)" }}>G</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px rgb(91 115 134 / 20%)" }}>E</span>
              </Animate>
              <Animate
                containerStyle={{ overflow: "visible" }}
                duration={0.6}
                initStyle={{ opacity: 0, y: "300%", }}
                animateStyle={{ opacity: 1, y: "0%", }}
              >
                <span style={{ textShadow: "42px 1px 0px rgb(91 115 134 / 10%)" }}>R</span>
              </Animate>
            </h3>
            <div className="flex gap-6 md:gap-12">
              <span role="line" className="w-[1.5px] h-full block opacity-40 bg-gradient-to-t from-gray-9999 from-0% to-white to-300%"></span>
              <div className="mt-1 space-y-12">
                <Animate
                  duration={0.6}
                  initStyle={{ opacity: 0, y: "300%", }}
                  animateStyle={{ opacity: 1, y: "0%", }}
                >
                  <ul className="font-suisse font-semibold text-[15.4px] text-gray-ee space-y-2.5 tracking-wide">
                    <li className="[background-image:conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,_rgba(191,241,255,0.8)_234deg,#FFFFFF_360deg)] bg-clip-text text-transparent hover:[text-shadow:0px_2px_2px_#FFFFFF26] hover:[background-image:conic-gradient(from_90deg_at_50%_50%,#BFF1FF_0deg,#FFFFFF_360deg)]">WEB OG APP</li>
                    <li className="[background-image:conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,_rgba(191,241,255,0.8)_234deg,#FFFFFF_360deg)] bg-clip-text text-transparent hover:[text-shadow:0px_2px_2px_#FFFFFF26] hover:[background-image:conic-gradient(from_90deg_at_50%_50%,#BFF1FF_0deg,#FFFFFF_360deg)]">3D OG ANIMATION</li>
                    <li className="[background-image:conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,_rgba(191,241,255,0.8)_234deg,#FFFFFF_360deg)] bg-clip-text text-transparent hover:[text-shadow:0px_2px_2px_#FFFFFF26] hover:[background-image:conic-gradient(from_90deg_at_50%_50%,#BFF1FF_0deg,#FFFFFF_360deg)]">MOTION DESIGN</li>
                    <li className="[background-image:conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,_rgba(191,241,255,0.8)_234deg,#FFFFFF_360deg)] bg-clip-text text-transparent hover:[text-shadow:0px_2px_2px_#FFFFFF26] hover:[background-image:conic-gradient(from_90deg_at_50%_50%,#BFF1FF_0deg,#FFFFFF_360deg)]">INTERAKTIVT DESIGN</li>
                    <li className="[background-image:conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,_rgba(191,241,255,0.8)_234deg,#FFFFFF_360deg)] bg-clip-text text-transparent hover:[text-shadow:0px_2px_2px_#FFFFFF26] hover:[background-image:conic-gradient(from_90deg_at_50%_50%,#BFF1FF_0deg,#FFFFFF_360deg)]">GRAFISK DESIGN</li>
                    <li className="[background-image:conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0deg,_rgba(191,241,255,0.8)_234deg,#FFFFFF_360deg)] bg-clip-text text-transparent hover:[text-shadow:0px_2px_2px_#FFFFFF26] hover:[background-image:conic-gradient(from_90deg_at_50%_50%,#BFF1FF_0deg,#FFFFFF_360deg)]">LYD & VIDEO</li>
                  </ul>
                </Animate>
                <Animate
                  duration={0.6}
                  initStyle={{ opacity: 0, y: "300%", scale: 0.9 }}
                  animateStyle={{ opacity: 1, y: "0%", scale: 1 }}
                >
                  <Image
                    src={zine}
                    alt="zine"
                    className="w-[525px] h-[223px] object-cover relative z-10 rounded-tr-2xl"
                  />
                  <p className="font-suisseWorks font-normal text-[11px] tracking-widest text-white mt-1.5">Grafisk Illustration</p>
                </Animate>
              </div>
            </div>
          </div>
          <Image
            src={smoke}
            width={256}
            height={256}
            alt="smoke"
            className="opacity-[0.32] mix-blend-color-burn object-cover absolute top-0 left-1/2 -translate-x-[85%]"
          />
        </div>
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
          <Image
            src={smoke}
            width={800}
            height={684}
            alt="smoke"
            className="opacity-[0.39] mix-blend-color-burn object-cover absolute rotate-90 top-0 sm:-top-[48%] left-0 sm:-left-[10%]"
          />
        </div>
        <div className="mt-10 sm:mt-0 px-4 sm:px-0 rounded-tl-2xl relative sm:absolute right-0 xl:-right-[10%] sm:top-20 sm:w-[45%] xl:w-[57%] h-[270px] xl:h-[374px]">
          <Animate
            containerStyle={{ overflow: "hidden", height: "100%" }}
            duration={0.6}
            initStyle={{ height: "100%", opacity: 0, y: "300%", scale: 0.9 }}
            animateStyle={{ height: "100%", opacity: 1, y: "0%", scale: 1 }}
          >
            <p className="font-suisseWorks font-normal text-[11px] tracking-widest text-white mb-1.5">Fotografering</p>
            <Image
              src={girls}
              alt="girls coffe"
              className="object-cover w-full h-full rounded-tl-2xl"
            />
          </Animate>
        </div>
        <div className="w-[calc(100%-120px)] sm:w-[250px] h-[250px] absolute left-1/2 z-10 -translate-x-1/2 sm:translate-x-[10%] -bottom-28 sm:-bottom-20">
          <Animate
            duration={0.6}
            initStyle={{ opacity: 0, y: "300%", scale: 0.9 }}
            animateStyle={{ opacity: 1, y: "0%", scale: 1 }}
          >
            <Image
              src={scaled}
              className="object-cover h-full w-full shadow-custom"
              alt="scaled"
            />
            <p className="font-suisseWorks font-medium text-[11px] tracking-wider text-black mt-1.5">Grafisk Manipulation</p>
          </Animate>
        </div>
      </section >
      <section className="pt-32">
        <div className="container-sp">
          <VideoReel />
        </div>
      </section>
      <section className="relative mt-32 py-20 md:py-36 blusih-radial">
        <Image
          src={bgSec3}
          className="h-full w-full absolute top-0 left-0 object-cover opacity-[2.4%] mix-blend-luminosity"
          alt="background img"
        />
        <LazyLoadVideo src="/video/partikler.mp4">
          <video preload="none" muted playsInline autoPlay loop className="absolute z-10 top-0 left-0 w-full h-full object-cover opacity-[2.4%] mix-blend-screen will-change-auto" >
            Your browser does not support the video tag.
          </video>
        </LazyLoadVideo>
        <LazyLoadVideo src="/video/sparks.mp4">
          <video preload="none" muted playsInline autoPlay loop className="absolute z-20 top-0 left-0 w-full h-full object-cover opacity-[15.6%] will-change-auto" >
            Your browser does not support the video tag.
          </video>
        </LazyLoadVideo>
        <div className="container-sp relative z-10">
          <div className="xl:max-w-[80%] mx-auto space-y-8 md:space-y-0">
            <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
              <Image
                src={partner1}
                alt="partenr logo"
                width={164}
                height={89}
              />
              <Image
                src={partner2}
                alt="partenr logo"
                width={166}
                height={123}
              />
              <Image
                src={partner3}
                alt="partenr logo"
                width={166}
                height={124}
              />
              <Image
                src={partner4}
                alt="partenr logo"
                width={165}
                height={123}
              />
            </div>
            <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
              <Image
                src={partner5}
                alt="partenr logo"
                width={139}
                height={32}
              />
              <Image
                src={partner6}
                alt="partenr logo"
                width={133}
                height={32}
              />
              <Image
                src={partner7}
                alt="partenr logo"
                width={167}
                height={124}
              />
              <Image
                src={partner8}
                alt="partenr logo"
                width={166}
                height={123}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="relative py-28 md:py-48 mt-32 border-t-[0.5px] border-black/30">
        <LazyLoadVideo src="/video/vid.mp4">
          <video preload="none" muted playsInline autoPlay loop className="absolute h-full w-full top-0 object-cover opacity-25" >
            Your browser does not support the video tag.
          </video>
        </LazyLoadVideo>
        <div className="container-sp">
          <div className="xl:max-w-[80%] mx-auto">
            <div className="flex flex-wrap justify-between gap-12">
              <Animate
                duration={0.6}
                initStyle={{ opacity: 0, y: 100, }}
                animateStyle={{ opacity: 1, y: 0, }}
              >
                <div className="space-y-6">
                  <h4 className="font-suisse font-semibold text-lg text-black-0a14">Adely Media</h4>
                  <ul className="font-inter font-normal text-sm text-black-0a14 space-y-3">
                    <li className="opacity-75 hover:underline"><a href="#">En vej på gaden</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Noget tekst</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">En lang storm</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Grimt vejr i dag</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Lad os gøre det</a></li>
                  </ul>
                </div>
              </Animate>
              <Animate
                duration={0.6}
                initStyle={{ opacity: 0, y: 100, }}
                animateStyle={{ opacity: 1, y: 0, }}
              >
                <div className="space-y-6">
                  <h4 className="font-suisse font-semibold text-lg text-black-0a14">Product</h4>
                  <ul className="font-inter font-normal text-sm text-black-0a14 space-y-3">
                    <li className="opacity-75 hover:underline"><a href="#">Virksomhed</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Designer</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Class</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Newcomers</a></li>
                  </ul>
                </div>
              </Animate>
              <Animate
                duration={0.6}
                initStyle={{ opacity: 0, y: 100, }}
                animateStyle={{ opacity: 1, y: 0, }}
              >
                <div className="space-y-6">
                  <h4 className="font-suisse font-semibold text-lg text-black-0a14">Learning</h4>
                  <ul className="font-inter font-normal text-sm text-black-0a14 space-y-3">
                    <li className="opacity-75 hover:underline"><a href="#">Tidsfordriv</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Larm på gade</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Tutorials</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Nyheder</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Artikler</a></li>
                  </ul>
                </div>
              </Animate>
              <Animate
                duration={0.6}
                initStyle={{ opacity: 0, y: 100, }}
                animateStyle={{ opacity: 1, y: 0, }}
              >
                <div className="space-y-6">
                  <h4 className="font-suisse font-semibold text-lg text-black-0a14">Resources</h4>
                  <ul className="font-inter font-normal text-sm text-black-0a14 space-y-3">
                    <li className="opacity-75 hover:underline"><a href="#">Tutorials</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Editorials</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Produkter</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Facebook</a></li>
                    <li className="opacity-75 hover:underline"><a href="#">Sidst falske</a></li>
                  </ul>
                </div>
              </Animate>
            </div>
            <Animate
              duration={0.6}
              initStyle={{ opacity: 0, y: 100, }}
              animateStyle={{ opacity: 1, y: 0, }}
            >
              <Link href="/" className="mt-16 block relative z-10">
                <Image
                  src={logo2}
                  alt="logo"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </Link>
            </Animate>
          </div>
        </div>
      </footer>
    </>
  );
}
