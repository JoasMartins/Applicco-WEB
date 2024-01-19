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
<<<<<<< HEAD
        window.open("mailto:contato@applicco.com.br")
    }

    function handleMoreServiceAPC() {
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço&body=Olá, eu gostaria de saber mais sobre os serviços em que a Applicco desenvolve e desejo solicitar um deles.")
    }

    function handleCTTemail() {
        window.open("mailto:contato@applicco.com.br?subject=CONTRATAR AGENDA APRENDIZE")
    }

    function handleCTTwhatsapp() {
        window.open("https://api.whatsapp.com/send?phone=5516988318960&text=Ol%C3%A1%2C%20eu%20me%20interessei%20pelo%20projeto%20Agenda%20Aprendize%20e%20gostaria%20de%20contrata-lo%20para%20ser%20usado%20em%20minha%20escola.")
=======
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
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
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

<<<<<<< HEAD
                <div className="textsInfo">
=======
                <div className="texts">
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
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
<<<<<<< HEAD
                    <h4>Para contratar, <span>nos mande uma mensagem</span> através de um dos nossos meios de contato abaixo.</h4>
                </div>

                <div className="contact">

=======
                </div>

                <div className="contact">
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
                    <h3>Meios de Contato:</h3>

                    <div className="actions">

                        <div className="buttonArea">
                            <button onClick={handleCTTemail}>
<<<<<<< HEAD
                                <Image src={"/email-icon.png"} width={20} height={20} className="icon" id="email" />
=======
                                <Image />
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
                                <div className="divisoria" />
                                <p>Via Email</p>
                            </button>
                            <div>
                                <p>contato@applicco.com.br</p>
                            </div>
                        </div>

                        <div className="buttonArea">
                            <button onClick={handleCTTwhatsapp}>
<<<<<<< HEAD
                                <Image src={"/whatsapp-logo.png"} width={20} height={20} className="icon" />
=======
                                <Image />
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
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
<<<<<<< HEAD
                                <Image src={"/instagram-logo.png"} width={20} height={20} className="icon" />
=======
                                <Image />
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
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
<<<<<<< HEAD
                            <img src="/instagram-logo.png" />
                            <p>Instagram</p>
                        </button>
                        
                        {/*
=======
                            <img src="/instagramLogo.png" />
                            <p>Instagram</p>
                        </button>
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
                        <button onClick={handleContactAPC}>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <p>Entrar em contato</p>
                        </button>
<<<<<<< HEAD
                        */}
=======
>>>>>>> 2a0f35c0c13316d4fba5bff9885465c3d5b6fb1e
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