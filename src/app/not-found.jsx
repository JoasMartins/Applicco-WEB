import styles from "./css/Not-Found.module.css"
import Image from "next/image"

export default function Page() {
    return (<main className={styles.main}>
        <div className={styles.box}>
            <Image src="/404.svg" alt="Erro 404" />
            <div>
                <h1>Erro 404</h1>
                <p>Ops... Parece que essa página não existe.</p>
            </div>
        </div>
    </main>)
}