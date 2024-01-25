import { Analytics } from '@vercel/analytics/react';
import { Rubik } from 'next/font/google'
import Head from 'next/head';
import './globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//

const font = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Applicco',
    default: 'Applicco - Criadora de Aplicativos e Softwares',
  },
  description: "Desenvolvedora de aplicativos, websites, softwares e outros produtos digitais.",
  images: [
    {
      url: 'https://imgur.com/7DQOLBg.png',
      width: 50,
      height: 50,
      alt: "Logo Applicco",
    },
  ],
}

import Header from "../components/header"
import Footer from "../components/footer"
import Sidebar from '@/components/Sidebar/sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className={font.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
