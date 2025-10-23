import "./index.css";
import localFont from "next/font/local";
import { Inter } from 'next/font/google'

export const metadata = {
  title: "Adely Media",
  description: "Gssasad",
};

const tanPearl = localFont({
  src: "../fonts/tan-pearl/tan-pearl.otf",
  weight: "400",
  style: "normal",
  variable: "--font-tan-pearl",
})

const suisse = localFont({
  src: [
    {
      path: "../fonts/suisse/Suisse_Intl_Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/suisse/Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/suisse/SuisseIntl-SemiBold.ttf",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-suisse",
})

const suisseWorks = localFont({
  src: [
    {
      path: "../fonts/sussie-works/SuisseWorks-Regular-WebS.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/sussie-works/SuisseWorks-Medium-WebS.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/sussie-works/SuisseWorks-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-sussieWorks",
})

const mabryPro = localFont({
  src: [
    {
      path: "../fonts/mabry-pro/MabryPro-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-mabry-pro",
})

const inter = Inter({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-inter",
})

export default function RootLayout({ children }) {

  return (
    <html style={{ scrollbarWidth: "thin" }} lang="en" >
      <body className={`overflow-x-hidden ${tanPearl.variable} ${mabryPro.variable} ${suisse.variable} ${suisseWorks.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
