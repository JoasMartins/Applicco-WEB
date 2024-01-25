import styles from "./css/Not-Found.module.css"
import Image from "next/image"

export const metadata = {
    title: "404 - Página não encontrada",
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
    return (<main className={styles.main}>


        <div className={styles.box}>
            <Image src="/404.svg" alt="Erro 404" height={300} width={300} />
            <div>
                <h1>Erro 404</h1>
                <p>Ops... Parece que essa página não existe.</p>
            </div>
        </div>
    </main>)
}