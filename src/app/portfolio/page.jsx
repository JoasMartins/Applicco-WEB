import styles from "./Portfolio.module.css"

import DevelopmentScreen from "@/components/development"

export const metadata = {
    title: "Portfólio de Joás Martins",
    images: [
        {
          url: 'https://imgur.com/7DQOLBg.png',
          width: 50,
          height: 50,
          alt: "Logo Applicco",
        },
      ],
}

export default function Page() {
    return (<main>


        <DevelopmentScreen text={1}/>
    </main>)
}