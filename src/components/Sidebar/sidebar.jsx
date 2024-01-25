import React from 'react'
import styles from "./sidebar.module.css"
import Link from 'next/link'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar({ opened, func }) {
    function handleRequestService() {
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço")
    }

    function handleClosed() {
        func(false)
    }

    return (
        <div style={{ display: opened ? "block" : "none" }} className={styles.main}>
            <div className={styles.header}>
                <h1>Menu</h1>
                <FontAwesomeIcon icon={faX} className={styles.icon} onClick={handleClosed} />
            </div>

            <div className={styles.line}>
                <hr />
            </div>

            <div className={styles.nav}>
                <Link href="/agendaaprendize" style={{ textDecoration: "none" }}>
                    <div>
                        <p>Projeto:</p>
                        <h4>Agenda Aprendize</h4>
                    </div>
                </Link>

                <Link href="/portfolio" style={{ textDecoration: "none" }}>
                    <div>
                        <h4>Portfólio</h4>
                    </div>
                </Link>

                <button className={styles.requestService} onClick={handleRequestService}><p>Solicitar serviço</p></button>
            </div>
        </div>
    )
}

export default Sidebar