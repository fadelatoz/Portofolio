import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import type { Viewport } from 'next'
import HomePage from './homePage/page'
import PageExperience from './experience/page'
import PageSkills from './my-skills/page'
import PageResume from './resume/page'
import PageProjects from './my-projects/page'


export const viewport: Viewport = {
  themeColor: 'black',
}
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "PWA Mohamad Fadel",
  description: "PWA Portofolio with Next 14",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Mohamad Fadel" },
    {
      name: "Mohamad Fadel",
      url: "https://www.linkedin.com/in/mohamad-fadel-12a251194/",
    },
  ],
  // viewport:
  //   "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  // icons: [
  //   { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
  //   { rel: "icon", url: "icons/icon-128x128.png" },
  // ],
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: never;

}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen relative`} >
        <SpeedInsights/>
        <Analytics/>
        <Navbar />
        {session}
        {children}
        </body>
    </html>
  )
}
