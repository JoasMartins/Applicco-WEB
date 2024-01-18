import styles from "./css/Development.module.css"

export default function DevelopmentScreen({ text }) {

    return (<main className={styles.main}>
        <div>
            <h1>Em desenvolvimento...</h1>
            {
                text == 1 ?
                (<p>Aqui estará todo o portfólio pessoal de <span>Joás Martins</span>, fundador da equipe <span>Applicco</span>.</p>)
                :
                (<></>)
            }
            {
                text == 2 ?
                (<p>Aqui estará o curriculo profissional de <span>Joás Martins</span>, fundador da equipe <span>Applicco</span>.</p>)
                :
                (<></>)
            }
        </div>
    </main>)
}