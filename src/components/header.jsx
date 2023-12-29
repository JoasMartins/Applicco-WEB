'use client'

import styles from "./css/Header.module.css"
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem'
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    function handleAgendaAprendize() {
        router.push("/agendaaprendize")
    }

    return (<header className={styles.style}>
        <Link href={"/"} style={{textDecoration: "none"}}>
            <div className={styles.logo}>
                <h1>App<span>licco</span></h1>
            </div>
        </Link>

        <nav className={styles.nav}>
            <DropdownButton id="dropdown-projects" title="Projetos">
                <DropdownItem onClick={handleAgendaAprendize}>Agenda Aprendize</DropdownItem>
            </DropdownButton>

            <Link href="/portfolio" style={{textDecoration: "none"}}>
                <button>Porfólio</button>
            </Link>

            <Link href="/" style={{textDecoration: "none"}}>
                <button>Solicitar serviço</button>
            </Link>


        </nav>
    </header>)
}