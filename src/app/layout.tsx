import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import type { Viewport } from 'next'
import { Providers } from '../../public/providers'
import SideNav from './components/sideNav'
import MarginWidthWrapper from './components/margin-width-wrapper'
import Header from './components/header'
import PageWrapper from './components/page-wrapper'
import HeaderMobile from './components/header-mobile'
import ScrollProgress from './components/ProgressScroll'
import FooterComponents from './components/footer/footer'



export const viewport: Viewport = {
  themeColor: 'black',
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fadel Portolio",
  description: "PWA Fadel Portofolio with Next 14",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  authors: [
    { name: "Mohamad Fadel" },
    {
      name: "Mohamad Fadel",
      url: "https://www.linkedin.com/in/mohamad-fadel-12a251194/",
    },
  ],
  icons: {
    icon: '/redux.png',
  },
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: never;


}) {


  return (
    <html suppressHydrationWarning>
      <body>
        <SpeedInsights />
        <Analytics />
        <Providers>
        <SideNav />
          <main
            className="w-screen-[99vw] h-screen mx-auto  bg-white  dark:bg-gray-950">
            <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <ScrollProgress />
            <PageWrapper>
              {children}
            </PageWrapper>
            <FooterComponents/>
            </MarginWidthWrapper>
          </main>
        </Providers>
      </body>
    </html>
  )
}
