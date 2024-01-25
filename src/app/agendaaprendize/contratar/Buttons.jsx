'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandshake, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

function Buttons({ name }) {

    function handleInstagramAPC() {
        window.open("https://www.instagram.com/appliccoapps")
    }

    function handleContactAPC() {
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
    }

    function handleCTTinstagram() {
        window.open("https://ig.me/m/appliccoapps")
    }

    if (name == "InstagramAPC") {
        return (
            <button onClick={handleInstagramAPC}>
                <Image src="/instagram-logo.png" alt="ícone do Instagram" height={30} width={40} />
                <p>Instagram</p>
            </button>
        )
    }

    if (name == "MoreService") {
        return (
            <button onClick={handleMoreServiceAPC}>
                <FontAwesomeIcon icon={faPlus} className="icon" />
                <p>Solicitar outro serviço</p>
            </button>
        )
    }

    if (name == "CTTemail") {
        return (
            <button onClick={handleCTTemail}>
                <Image src={"/email-icon.png"} alt="ícone de Email" width={20} height={20} className="icon" id="email" />
                <div className="divisoria" />
                <p>Via Email</p>
            </button>
        )
    }

    if (name == "CTTwhatsapp") {
        return (
            <button onClick={handleCTTwhatsapp}>
                <Image src={"/whatsapp-logo.png"} alt="ícone do WhatsApp" width={20} height={20} className="icon" />
                <div className="divisoria" />
                <p>Via WhatsApp</p>
            </button>
        )
    }

    if (name == "CTTinstagram") {
        return (
            <button onClick={handleCTTinstagram}>
                <Image src={"/instagram-logo.png"} alt="ícone do Instagram" width={20} height={20} className="icon" />
                <div className="divisoria" />
                <p>Via Instagram</p>
            </button>
        )
    }

}

export default Buttons