'use client'

//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./css/Header.module.css"
import Link from "next/link"
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import { DropdownItemText } from "react-bootstrap";
//import DropdownItem from 'react-bootstrap/DropdownItem'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter()

    function handleAgendaAprendize() {
        router.push("/agendaaprendize")
    }

    function handleRequestService() {
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço")
    }

    return (<header className={styles.style}>
        <Link href={"/"} style={{ textDecoration: "none" }}>
            <div className={styles.logo}>
                <h1>App<span>licco</span></h1>
            </div>
        </Link>

        <nav className={styles.nav}>
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
                <div style={{marginBottom: 10}}>
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
    </header>)
}