

import { Rubik } from 'next/font/google'
import './globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const font = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import Header from "../components/header"
import Footer from "../components/footer"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
