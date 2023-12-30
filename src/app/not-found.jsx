import styles from "./Not-Found.module.css"

export default function Page() {
    return (<main className={styles.main}>
        <div className={styles.box}>
            <img src="/404.svg" />
            <div>
                <h1>Erro 404</h1>
                <p>Ops... Parece que essa página não existe.</p>
            </div>
        </div>
    </main>)
}