import styles from "./Portfolio.module.css"

import DevelopmentScreen from "@/components/development"

export const metadata = {
    title: "Portfólio de Joás Martins"
}

export default function Page() {
    return (<main>


        <DevelopmentScreen text={1}/>
    </main>)
}