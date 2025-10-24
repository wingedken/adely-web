import "./index.css";
import { Inter } from 'next/font/google'

export const metadata = {
  title: "Adely Media",
  description: "Gssasad",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export default function RootLayout({ children }) {
  return (
    <html style={{ scrollbarWidth: "thin" }} lang="en" >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-tan-pearl: var(--font-inter);
            --font-mabry-pro: var(--font-inter);
            --font-suisse: var(--font-inter);
            --font-sussieWorks: var(--font-inter);
          }
          .font-tanPearl { font-family: var(--font-inter) !important; letter-spacing: 0.02em; }
          .font-mabryPro { font-family: var(--font-inter) !important; font-weight: 700; }
          .font-suisse { font-family: var(--font-inter) !important; }
          .font-suisseWorks { font-family: var(--font-inter) !important; font-size: 0.9em; letter-spacing: 0.05em; }
        ` }} />
      </head>
      <body className={`overflow-x-hidden ${inter.variable}`} style={{
        fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
      }}>
        {children}
      </body>
    </html>
  );
}
