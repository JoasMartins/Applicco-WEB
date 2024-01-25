'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandshake, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

function ButtonsHome({ name }) {

    function handleModalRequestService() {
        //  Abrir um modal onde terá os passos para solicitar um serviço
        window.open("mailto:contato@applicco.com.br?subject=Solicitação de Serviço")
      }

    if (name == "ModalRequestService") {
        return (
            <button onClick={handleModalRequestService}>Solicitar serviço</button>
        )
    }
}

export default ButtonsHome