'use client'

import styles from "./css/Header.module.css"
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DropdownItemText } from "react-bootstrap";
import DropdownItem from 'react-bootstrap/DropdownItem'
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    function handleAgendaAprendize() {
        router.push("/agendaaprendize")
    }

    function handleRequestService() {
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço")
    }

    return (<header className={styles.style}>
        <Link href={"/"} style={{textDecoration: "none"}}>
            <div className={styles.logo}>
                <h1>App<span>licco</span></h1>
            </div>
        </Link>

        <nav className={styles.nav}>
            <DropdownButton id="dropdown-projects" title="Projetos">
                <DropdownItemText>Públicos</DropdownItemText>
                <DropdownItem onClick={handleAgendaAprendize}>Agenda Aprendize</DropdownItem>
                <DropdownItemText>Estudos e Treinamentos</DropdownItemText>
            </DropdownButton>

            <Link href="/portfolio" style={{textDecoration: "none"}}>
                <button>Porfólio</button>
            </Link>

            <button className={styles.requestService} onClick={handleRequestService}>Solicitar serviço</button>


        </nav>
    </header>)
}