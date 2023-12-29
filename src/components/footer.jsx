import styles from "./css/Footer.module.css"

export default function Page() {
    let UltimoCopyright = [2024,10, 8]
    let year = new Date(UltimoCopyright).getFullYear()

    return <footer>
        <div className={styles.footer}>
            <div className={styles.logo}>
                <div>
                    <img src='applicco-logo.png' alt='Ícone da Agenda Patrus' />
                    <h1>Applicco</h1>
                </div>
                <p>Suas tarefas, sua organização.</p>
            </div>

            <div className={styles.contact_dev}>
                <h2>Contato do<br />desenvolvedor</h2>
                <div className={styles.barraDivisoriaHorizontal} />
                <div className={styles.list}>
                    <ul className={styles.key}>
                        <li>Email:</li>
                        <li>Instagram:</li>
                        <li>Turma:</li>
                    </ul>

                    <ul className={styles.value}>
                        <a href='mailto:joasmcarmo@gmail.com?subject=Agenda Patrus&body=' target='_blank'>joasmcarmo@gmail.com</a>
                        <a href='https://www.instagram.com/joas_mc_/' target='_blank'>@joas_mc_</a>
                        <a>2MB</a>
                    </ul>
                </div>
            </div>

            <div className={styles.contact_school}>
                <h2>Contato<br />da escola</h2>
                <div className={styles.barraDivisoriaHorizontal} />
                <div className={styles.list}>
                    <ul className={styles.key}>
                        <li>Email:</li>
                        <li>Instagram:</li>
                        <li>Endereço:</li>
                    </ul>

                    <ul className={styles.value}>
                        <a href='mailto:secretaria.patrus@gmail.com?subject=&body=' target='_blank'>secretaria.patrus@gmail.com</a>
                        <a href='https://www.instagram.com/patrusdesousa/' target='_blank'>@patrusdesousa</a>
                        <a href='https://www.google.com/maps/dir/-21.6954784,-43.329796/e.+e.+sebastiao+patrus+de+souza/@-21.7167481,-43.3660129,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x989d80dfb541c3:0x71cc1dd30d350e4!2m2!1d-43.361005!2d-21.7425862?entry=ttu' target='_blank'>Abrir em Google Maps</a>
                    </ul>
                </div>
            </div>

            <div className={styles.creditos}>
                <p className={styles.dev}>Desenvolvido por <span>Joás M. C.</span> da turma <span>2MB</span>.</p>
                <p className={styles.love}>Feito com ❤️ para a <span>SPS</span>!</p>
            </div>
        </div>

        <div className={styles.footer_copyright}>
            © {year} todos os direitos reservados
        </div>
    </footer>
}