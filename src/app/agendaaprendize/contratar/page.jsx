'use client'
import React from "react";
import "../../css/Contratar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";

import SessionHome from "../../../components/SessionHome";

export default function PageContratar() {

    function handleInstagramAPC() {
        window.open("https://www.instagram.com/appliccoapps")
    }

    function handleContactAPC() {
        window.open("mailto:applicco.equipe@gmail.com")
    }

    function handleMoreServiceAPC() {
        window.open("mailto:applicco.equipe@gmail.com?subject=Solicitação de Serviço&body=Olá, eu gostaria de saber mais sobre os serviços em que a Applicco desenvolve e desejo solicitar um deles.")
    }

    return (
        <main className="ContratarPage">


            <div className="main">
                <h1>CONTRATAR APLICATIVO PARA A SUA ESCOLA</h1>
                <h2>Nesta página, apresentaremos como o aplicativo funciona e explicaremos o processo para solicitar o projeto e tornar customizado para a sua rede escolar.</h2>

                <div className="dev">
                    <p className="title">Esse é um projeto desenvolvido por:</p>
                    <img src="/appliccoBanner.png" className="appliccoLogo" />
                    <div className="buttons">
                        <button onClick={handleInstagramAPC}>
                            <img src="/instagramLogo.png" />
                            <p>Instagram</p>
                        </button>
                        <button onClick={handleContactAPC}>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <p>Entrar em contato</p>
                        </button>
                        <button onClick={handleMoreServiceAPC}>
                            <FontAwesomeIcon icon={faPlus} className="icon" />
                            <p>Solicitar outro serviço</p>
                        </button>
                    </div>
                    <div className="texts">
                        <p>A Applicco é gerenciada por <a href="https://www.instagram.com/joas_mc_" target="__blank">Joás M. C.</a>,</p>
                        <p>aluno do 3º ano em <a>Juiz de Fora</a>.</p>
                    </div>
                </div>
            </div>

            <SessionHome
                title="APROVADO POR DIRETORES E SECRETÁRIOS"
                text="Esse projeto foi aplicado na rede escolar E. E. Sebastião Patrus de Souza e obteve a aprovação e elogios da equipe administrativa, secretários e diretores, sem contar com a excelente avaliação de professores e alunos."
                image="/aprovado.png"
                color="#5e86ff"
            />

    

            <SessionHome
                title="O QUE É O PROJETO?"
                text="O projeto Agenda Patrus é um aplicativo para celulares criado para reunir várias funções que agregam nos estudos e na gestão da escola."
                image="/logo192.png"
                color="#292929"
                direction="right"
            />

            <SessionHome
                title="SOBRE O APLICATIVO"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim error, aliquid quaerat quis alias amet dignissimos ad expedita optio iste. Eligendi dolore totam blanditiis sapiente saepe eum consequatur recusandae ab."
                image="/logo192.png"
                color="#5e86ff"
            />

            <SessionHome
                title="TITULO TITULO"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim error, aliquid quaerat quis alias amet dignissimos ad expedita optio iste. Eligendi dolore totam blanditiis sapiente saepe eum consequatur recusandae ab."
                image="/logo192.png"
                color="#292929"
                direction="right"
            />



        </main>
    )
}