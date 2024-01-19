'use client'

import Link from "next/link"
import styles from "./css/Footer.module.css"

export default function Page() {
    let year = new Date().getFullYear()

    function handleRequestService() {
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço")
    }

    return <footer>
        <div className={styles.footer}>
            <div className={styles.services}>
                <div className={styles.logo}>
                    <div>
                        <img src='applicco-logo.svg' alt='Ícone da Applicco' />
                        <h1>Applicco</h1>
                    </div>
                    <p>Aplicativos e Softwares</p>
                </div>

                <div className={styles.actions}>
                    <div>
                        <p>Solicitar<br />um serviço</p>
                        <button onClick={handleRequestService}>Clique Aqui</button>
                    </div>
                    <div className={styles.barraDivisoriaVertical} />
                    <div>
                        <p>Contratar<br />Agenda Aprendize</p>
                        <Link href={"/agendaaprendize/contratar/form"} style={{ textDecoration: "none" }}><button>Clique Aqui</button></Link>
                    </div>
                </div>
            </div>

            <div className={styles.contact_dev}>
                <h2>Contato do<br />desenvolvedor</h2>
                <div className={styles.barraDivisoriaHorizontal} />
                <div className={styles.list}>
                    <ul className={styles.key}>
                        <li>Email:</li>
                        <li>Instagram:</li>
                        <li>Portfólio:</li>
                    </ul>


                    <ul className={styles.value}>
                        <a href='mailto:joasmcarmo@gmail.com' target='_blank'>joasmcarmo@gmail.com</a>
                        <a href='https://www.instagram.com/joas_mc_/' target='_blank'>@joas_mc_</a>
                        <Link href={"/portfolio"}><p>Clique para acessar</p></Link>
                    </ul>
                </div>
            </div>


            <div className={styles.contact_school}>
                <h2>Sobre<br />Applicco</h2>
                <div className={styles.barraDivisoriaHorizontal} />
                <p className={styles.text}>Equipe de desenvolvimento de aplicativos mobile, websites, softwares, APIs e Banco de Dados.</p>
                <div className={styles.list}>
                    <ul className={styles.key}>
                        <li>Email:</li>
                        <li>Instagram:</li>
                    </ul>

                    <ul className={styles.value}>
                        <a href='mailto:contato@applicco.com.br?subject=&body=' target='_blank'>contato@applicco.com.br</a>
                        <a href='https://www.instagram.com/appliccoapps/' target='_blank'>@appliccoapps</a>
                    </ul>
                </div>
            </div>

            <div  className={styles.creditos}>
                <div className={styles.box}>
                    <p className={styles.dev}>Gerenciado por <span>Joás Martins</span> e <span>Ricardo Oliveira</span>.</p>
                    <p className={styles.love}>Feito com ❤️ para um <span>futuro</span>!</p>
                </div>
            </div>
        </div>

        <div className={styles.footer_copyright}>
            © {year} todos os direitos reservados
        </div>
    </footer>
}