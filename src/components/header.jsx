'use client'

//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./css/Header.module.css"
import Link from "next/link"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import { DropdownItemText } from "react-bootstrap";
//import DropdownItem from 'react-bootstrap/DropdownItem'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar/sidebar";

export default function Page() {
    const [openedSidebar, setOpenedSidebar] = useState(true)

    const router = useRouter()

    function handleAgendaAprendize() {
        router.push("/agendaaprendize")
    }

    function handleRequestService() {
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço")
    }

    function handleSidebar() {
        setOpenedSidebar(!openedSidebar)
    }

    return (<header className={styles.style}>
        <Link href={"/"} style={{ textDecoration: "none" }}>
            <div className={styles.logo}>
                <h1>App<span>licco</span></h1>
            </div>
        </Link>

        <nav className={styles.nav} id="show">
            {
                /**
                 <DropdownButton id="dropdown-projects" title="Projetos">
                <DropdownItemText>Públicos</DropdownItemText>
                <DropdownItem onClick={handleAgendaAprendize}>Agenda Aprendize</DropdownItem>
                <DropdownItemText>Estudos e Treinamentos</DropdownItemText>
            </DropdownButton>
                 */
            }

            <Link href="/agendaaprendize" style={{ textDecoration: "none" }}>
                <div style={{ marginBottom: 10 }}>
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


        </nav>

        <nav className={styles.navHidden} id="hidden" onClick={handleSidebar}>
            <FontAwesomeIcon icon={faBars} color="#fff" className={styles.iconSidebar} />
        </nav>

        <Sidebar opened={openedSidebar} func={setOpenedSidebar} />
    </header>)
}