"use client";
import { useEffect, useState } from "react";
import Animate from "./Animate";
import Image from "next/image";
import logo2 from "../svg/logo-scroll.svg";
import menuBg from "../imgs/menu-bg.png";
import Link from "next/link";
import { HiOutlineMinusSmall } from "react-icons/hi2";

export default function Header({ scrollInstance }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  useEffect(() => {
    if (!scrollInstance) return;
    const onScroll = ({ actualScroll }) => {
      if (actualScroll > 60) {
        setIsScrolled(true);
      }
    };
    scrollInstance.on('scroll', onScroll);
    return () => scrollInstance.off('scroll', onScroll);
  }, [scrollInstance]);


  return <>
    <header
      onClick={() => setMenuShow(false)}
      className={`group transition-all duration-300 sticky top-0 ${isScrolled ? "header-animatation" : ""} z-[62]`}
    >
      <div className="container-sp">
        <div className="flex items-center justify-between py-6">
          <Animate
            duration={0.8}
            initStyle={{ opacity: 0, y: "100%", }}
            animateStyle={{ opacity: 1, y: "0%", }}
          >
            <Link href="/">
              <Image
                src={logo2}
                alt="logo"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </Link>
          </Animate>
          <Animate
            duration={0.8}
            initStyle={{ opacity: 0, y: "100%", }}
            animateStyle={{ opacity: 1, y: "0%", }}
          >
            <button onClick={(e) => {
              e.stopPropagation();
              setMenuShow((prev) => !prev)
            }} className="relative z-[62] transition-transform hover:scale-110 active:scale-90">
              <Image
                src={menuBg}
                alt="menu background"
                width={48}
                height={48}
                className={`transition-opacity ease-linear duration-500 ${menuShow ? "opacity-0" : "opacity-100"}`}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-f1f1">
                <HiOutlineMinusSmall className={`transition-all ease-linear duration-500 absolute ${menuShow ? "size-[40px] top-[0px] rotate-45" : "size-[35px] -top-[4px]"} -translate-x-1/2 -translate-y-1/2`} />
                <HiOutlineMinusSmall className={`transition-all ease-linear duration-500 absolute ${menuShow ? "size-[40px] top-[0px] -rotate-45" : "size-[35px] top-[5px]"} -translate-x-1/2 -translate-y-1/2`} />
              </div>
            </button>
          </Animate>
        </div>
      </div>
    </header>
    <div onClick={() => setMenuShow(false)} role="overlay" className={`h-screen w-full fixed top-0 right-0 bg-gradient-to-r from-transparent to-black transition duration-500 ${menuShow ? "opacity-100 z-[60]" : "opacity-0 -z-[60]"}`}></div>
    <div role="menu" className={`bg-black-0a1 h-screen w-full fixed top-0 right-0 z-[61] max-w-[300px] md:max-w-[600px] shadow-lg pl-6 md:px-16 pt-28 md:pt-36 transition-transform duration-500 ease-out [&_*]:transition [&_*]:duration-1000  ${menuShow ? "transform-none [&_*]:opacity-100 [&_*]:transform-none" : "delay-500 translate-x-full [&_*]:opacity-0 [&_*]:translate-y-8"}`}>
      <div className="font-mabryPro font-bold space-y-14 pl-5 md:pl-4">
        <h4 className="text-white text-[18px] tracking-wider">NAVIGATION</h4>
        <ul className="space-y-6 text-[13.8px] text-gray-ded pl-2 tracking-wider">
          {["FORSIDE", "LØSNINGER", "PROFIL", "VISION", "KONTAKT"].map(text => (
            <li key={text}>
              <a
                href="#"
                className="relative inline-block before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0 before:bg-gray-ded before:transition-all before:duration-300 hover:before:w-full"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-8 pt-4 pl-2">
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.00325 2.77924e-06C6.41874 -0.001316 4.86944 0.466724 3.55132 1.34497C2.2332 2.22322 1.20553 3.47223 0.598245 4.93392C-0.00903745 6.39561 -0.16865 8.00436 0.139664 9.55664C0.447978 11.1089 1.21036 12.535 2.33031 13.6545C3.45026 14.7739 4.87749 15.5366 6.43146 15.8458C7.98544 16.155 9.59635 15.997 11.0604 15.3917C12.5244 14.7864 13.7757 13.761 14.6562 12.4452C15.5366 11.1295 16.0066 9.58254 16.0066 8C16.007 6.94987 15.8004 5.90991 15.3984 4.93954C14.9964 3.96917 14.4071 3.08744 13.6639 2.34457C12.9207 1.6017 12.0383 1.0123 11.0671 0.610029C10.0958 0.207754 9.0547 0.000440428 8.00325 2.77924e-06ZM10.0058 5.33334H9.10465C8.7442 5.33334 8.67075 5.48002 8.67075 5.85336V6.66667H10.0058L9.86561 8H8.67075V12.6667H6.66825V8H5.33325V6.66667H6.66825V5.12663C6.66825 3.94663 7.28905 3.33334 8.6908 3.33334H10.0058V5.33334Z" fill="white" />
            </svg>
          </a>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 1.44002C10.1333 1.44002 10.3866 1.44665 11.2266 1.48665C13.3933 1.58665 14.4066 2.61335 14.4999 4.76668C14.5399 5.61335 14.5466 5.86667 14.5466 8C14.5466 10.1333 14.5399 10.3933 14.4999 11.2333C14.4066 13.3867 13.3933 14.4133 11.2266 14.5133C10.3866 14.5533 10.1333 14.56 7.99992 14.56C5.86658 14.56 5.6066 14.5533 4.7666 14.5133C2.59327 14.4133 1.59333 13.38 1.49333 11.2333C1.45333 10.3867 1.44661 10.14 1.44661 8C1.44661 5.86 1.45333 5.61335 1.49333 4.76668C1.59333 2.61335 2.59993 1.58665 4.7666 1.48665C5.61327 1.44665 5.85992 1.44002 7.99992 1.44002ZM7.99992 0C5.82658 0 5.55328 0.00663086 4.69995 0.0466309C1.79995 0.179964 0.186637 1.79337 0.053304 4.70003C0.013304 5.55337 0.0065918 5.82667 0.0065918 8C0.0065918 10.1733 0.013304 10.4466 0.053304 11.3C0.186637 14.2066 1.79328 15.82 4.69995 15.9534C5.55328 15.9934 5.82658 16 7.99992 16C10.1733 16 10.44 15.9934 11.2933 15.9534C14.1933 15.82 15.8066 14.2066 15.9399 11.3C15.9799 10.4466 15.9867 10.1733 15.9867 8C15.9867 5.82667 15.9799 5.55337 15.9399 4.70003C15.8133 1.80003 14.2 0.179964 11.2933 0.0466309C10.44 0.00663086 10.1666 0 7.99992 0ZM7.99992 3.89331C7.18741 3.89199 6.39285 4.13175 5.71663 4.58219C5.04042 5.03264 4.51302 5.67355 4.20117 6.42383C3.88933 7.17411 3.80698 7.99998 3.96468 8.79704C4.12238 9.59409 4.51302 10.3265 5.08708 10.9014C5.66114 11.4764 6.3929 11.8683 7.1897 12.0273C7.98649 12.1863 8.81253 12.1053 9.56331 11.7947C10.3141 11.4841 10.9558 10.9577 11.4074 10.2822C11.8589 9.60675 12.0999 8.81251 12.0999 8C12.0994 6.91216 11.6675 5.86896 10.8989 5.09912C10.1303 4.32928 9.08776 3.89561 7.99992 3.89331ZM7.99992 10.6667C7.47222 10.668 6.95601 10.5127 6.5166 10.2205C6.07719 9.92825 5.73435 9.5123 5.53149 9.02515C5.32864 8.53799 5.27489 8.00161 5.37703 7.48389C5.47917 6.96617 5.73263 6.49039 6.10531 6.11678C6.47798 5.74317 6.95316 5.48853 7.47062 5.38509C7.98809 5.28166 8.52455 5.33409 9.01221 5.53573C9.49986 5.73736 9.91673 6.07915 10.21 6.51782C10.5034 6.9565 10.66 7.4723 10.66 8C10.66 8.70609 10.3799 9.3834 9.88127 9.8833C9.38261 10.3832 8.70601 10.6649 7.99992 10.6667ZM12.2666 2.77336C12.0762 2.77204 11.8897 2.8274 11.7308 2.93237C11.5719 3.03735 11.4478 3.18719 11.3743 3.36287C11.3009 3.53856 11.2813 3.7321 11.3181 3.91895C11.3549 4.10579 11.4465 4.27745 11.5811 4.41211C11.7158 4.54677 11.8875 4.63838 12.0743 4.67521C12.2611 4.71204 12.4548 4.69246 12.6305 4.61898C12.8061 4.54549 12.956 4.42142 13.061 4.26253C13.1659 4.10364 13.2213 3.91708 13.22 3.72664C13.2196 3.47391 13.1191 3.23169 12.9403 3.05298C12.7616 2.87427 12.5193 2.77371 12.2666 2.77336Z" fill="white" />
            </svg>
          </a>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.6626 0H3.32423C2.44023 0.0017658 1.59305 0.353748 0.968586 0.978678C0.344125 1.60361 -0.00659356 2.45043 -0.0065918 3.33333V12.6667C-0.00659356 13.5496 0.344125 14.3964 0.968586 15.0213C1.59305 15.6463 2.44023 15.9982 3.32423 16H12.6626C13.5478 16 14.3967 15.6488 15.0226 15.0237C15.6485 14.3986 16.0002 13.5507 16.0002 12.6667V3.33333C16.0002 2.44928 15.6485 1.60144 15.0226 0.976318C14.3967 0.351197 13.5478 0 12.6626 0ZM5.32674 12.6667H3.32423V5.33333H5.32674V12.6667ZM4.32548 4.48665C4.09191 4.48864 3.86305 4.42128 3.66792 4.29305C3.47279 4.16482 3.32024 3.98154 3.22963 3.76652C3.13902 3.5515 3.11448 3.31437 3.15907 3.08537C3.20366 2.85637 3.31541 2.64582 3.48011 2.48039C3.6448 2.31496 3.85494 2.20217 4.08397 2.15633C4.313 2.11049 4.5505 2.13363 4.7663 2.2229C4.9821 2.31217 5.16652 2.46356 5.29602 2.65771C5.42552 2.85187 5.49426 3.08003 5.49361 3.31331C5.49431 3.46703 5.46463 3.6194 5.40626 3.76164C5.34789 3.90387 5.26203 4.03316 5.1535 4.14217C5.04498 4.25118 4.91596 4.33778 4.77388 4.39689C4.6318 4.456 4.4794 4.48648 4.32548 4.48665ZM13.3301 12.6667H11.3276V8.93335C11.3276 6.68668 8.66424 6.85335 8.66424 8.93335V12.6667H6.66174V5.33333H8.66424V6.50667C9.59207 4.78667 13.3301 4.65999 13.3301 8.15999V12.6667Z" fill="white" />
            </svg>

          </a>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.2572 6.53287C13.6335 10.5367 9.69596 15.9923 7.21116 15.9923C4.75923 15.9923 4.40422 9.97892 3.06979 5.9751C2.41244 4.01139 1.98522 4.46216 0.749393 5.45548L0 4.33994C1.80115 2.51377 3.60224 0.404936 4.7066 0.282682C5.95557 0.145146 6.7181 1.1308 7.00734 3.2244C7.3886 5.98276 7.91451 10.2616 8.84138 10.2616C9.56447 10.2616 11.3394 6.86905 11.4314 5.65415C11.5892 3.87382 10.2941 3.8204 9.16348 4.37818C10.9515 -2.33815 18.3665 -1.10801 15.2572 6.53287Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </>
}