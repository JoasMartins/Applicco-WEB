'use client'
import React from "react";
import "../../css/Contratar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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

    function handleCTTemail() {
        window.open("mailto:applicco.equipe@gmail.com?subject=CONTRATO AGENDA APRENDIZE")
    }

    function handleCTTwhatsapp() {
        window.open("https://api.whatsapp.com/send?phone=5516988318960&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20contratar%20o%20Agenda%20Aprendize.")
    }

    function handleCTTinstagram() {
        window.open("https://ig.me/m/appliccoapps")
    }

    return (
        <main className="ContratarPage">


            <div className="main">
                <div className="titles">
                    <h1>CONTRATAR APLICATIVO PARA A SUA ESCOLA</h1>
                    <h2>Nesta página, apresentaremos como o aplicativo funciona o processo para solicitar o projeto e tornar customizado para a sua rede escolar.</h2>
                </div>

                <div className="texts">
                    <div>
                        <h3>Oque é contratar o Agenda Aprendize?</h3>
                        <p>Sua escola terá acesso ao aplicativo e ele será totalmente personalizado para o seu colégio. Cada escola que contrata o nosso projeto, terá um aplicativo exclusivo com a sua identidade visual e com os recursos padrão que o aplicativo oferece.</p>
                    </div>
                    <div>
                        <Image src="/phone.svg" width={180} height={180} />
                    </div>
                </div>

                <div className="contratar">
                    <h3>Iniciar Contrato</h3>
                    <p className="valor">O valor é conversado e definido ao entrar em contato conosco.<br />Para contratar nos mande um email, mensagem no whatsapp ou no instagram.</p>
                </div>

                <div className="contact">
                    <h3>Meios de Contato:</h3>

                    <div className="actions">

                        <div className="buttonArea">
                            <button onClick={handleCTTemail}>
                                <Image />
                                <div className="divisoria" />
                                <p>Via Email</p>
                            </button>
                            <div>
                                <p>contato@applicco.com.br</p>
                            </div>
                        </div>

                        <div className="buttonArea">
                            <button onClick={handleCTTwhatsapp}>
                                <Image />
                                <div className="divisoria" />
                                <p>Via WhatsApp</p>
                            </button>
                            <div>
                                <p>+55 (16) 98831-8960</p>
                                <p>(Número pessoal)</p>
                            </div>
                        </div>

                        <div className="buttonArea">
                            <button onClick={handleCTTinstagram}>
                                <Image />
                                <div className="divisoria" />
                                <p>Via Instagram</p>
                            </button>
                            <div>
                                <p>@appliccoapps</p>
                            </div>
                        </div>
                    </div>

                </div>

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
                        <p>A Applicco é gerenciada por <a href="https://www.instagram.com/joas_mc_" target="__blank">Joás Martins</a>,</p>
                        <p>aluno do 3º ano em <a>Juiz de Fora</a>.</p>
                    </div>
                </div>
            </div>


        </main>
    )
}