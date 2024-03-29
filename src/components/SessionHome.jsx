'use client'
import React from "react";
import style from "./css/SessionHome.module.css"
import Image from "next/image";
import Badge from "./badge";

export default function SessionHome({ title, text, image, color, direction, custom, textBadge }) {
    let directImage = "left"

    if (direction == "right") {
        directImage = "row-reverse"
    } else {
        directImage = "row"
    }

    let largura = "35%"
    if(text) {
        text = <p>{text}</p>
    }

    if (!text) {
        if (custom == 1) {
            largura = "50%"
            text = (<div className={style.custom1}>
                <p>As tarefas são exibidas em três sessões e divididas com o tempo restante até o prazo final de cada atividade, esses campos são:</p>
                <ul style={{marginLeft:"20px" }}>
                    <li><span style={{ fontWeight: "bold" }}>&ldquo;Hoje&ldquo;</span> para tarefas do dia atual;</li>
                    <li><span style={{ fontWeight: "bold" }}>&ldquo;Uma semana&ldquo;</span> para tarefas nos próximos 7 dias;</li>
                    <li><span style={{ fontWeight: "bold" }}>&ldquo;Próximos&ldquo;</span> para todas as demais tarefas para depois dos próximos 7 dias.</li>
                </ul>
            </div>)
        }

        
        if (custom == 2) {
            text = (<div>
                <p>As tarefas são lançadas para as turmas de forma separada, uma turma não tem acesso as atividades de outras, e os alunos podem acessar a qualquer tarefa de sua turma agendada oua té mesmo já passada para ver suas informações.</p>
                <br/>
                <p className="custom2">As tarefas contém um <span style={{ fontWeight: "bold" }}>título</span>, sua <span style={{ fontWeight: "bold" }}>descrição</span>, um <span style={{ fontWeight: "bold" }}>tipo</span> da tarefa (se é <i>atividade comum</i>, <i>trabalho</i>, <i>prova</i> ou <i>outro</i>), a <span style={{ fontWeight: "bold" }}>data</span> para prazo final e a <span style={{ fontWeight: "bold" }}>turma</span> para qual essa tarefa será destinada.</p>
            </div>)
        }

        if (custom == 3) {
            largura = "58%"
            text = (<div className={style.custom3}>
                <p>Sistema de Notificações elaborado para lembrar constantemente cada aluno das tarefas atribuídas a ele que estão se aproximando. Oferecemos 10 tipos de notificações, e cada aluno tem a opção de habilitar ou desabilitar de acordo com suas preferências. As notificações incluem:</p>
                <ul style={{marginLeft:"20px" }}>
                    <li>Aviso quando uma tarefa é criada;</li>
                    <li>Diariamente, às 04h, são listadas as tarefas para o dia;</li>
                    <li>Tarefas que estão restando 1 dia para o prazo final;</li>
                    <li>Tarefas que estão restando 2 dias para o prazo final;</li>
                    <li>Tarefas que estão restando 3 dias para o prazo final;</li>
                    <li>Tarefas que estão restando 4 dias para o prazo final;</li>
                    <li>Tarefas que estão restando 5 dias para o prazo final;</li>
                    <li>Tarefas que estão restando 6 dias para o prazo final;</li>
                    <li>Tarefas que estão restando 7 dias para o prazo final;</li>
                    <li>Tarefas que estão restando 10 dias para o prazo final.</li>
                </ul>
            </div>)
        }

        if (custom == 4) {
            largura = "50%"
            text = (<div>
                <p>Com um sistema seguro para registro dos professores, eles terão acesso a Área do Professor que lhes será exibido as tarefas na mesma organização que para os alunos, com tarefas marcadas para o dia, tarefas em 7 dias e nos dias a seguir. Isso facilita para que os professores saibam quais atividades tem para o dia de hoje e para qual turma foi agendada, acabando com a confusão de inúmeras tarefas diferentes em várias turmas.</p>
                <div style={{ display: "flex", alignItems: "center", backgroundColor: "#4071ff", padding: 0, borderRadius: 10, border: "1px solid #9fb7ff", marginTop: 10 }}>
                    <Image src={"/info.svg"} width={40} height={40} style={{ margin: "10px" }} alt="ícone de Informação" />
                    <div>
                        <h4 style={{textAlign: "start"}}>EM BREVE:</h4>
                        <p style={{ fontSize: 12, textAlign: "start" }}>Os professores terão um menu com <span>apenas</span> as tarefas que eles lançaram, e organizadas para auxiliar cada professor no lançamento de suas matérias.</p>
                    </div>
                </div>
            </div>)
        }

        if (custom == 5) {
            text = (<p>Uma sessão que será porta-voz da diretoria da escola, servindo para os professores, diretores, secretários criarem <strong>postagens</strong>, <strong>noticias</strong>, <strong>recados</strong> e todos os alunos receberam notificação da mensagem postada.</p>)
        }

        if (custom == 6) {
            text = (<div>
                <p>O projeto Agenda Aprendize é um aplicativo com várias funções escolares e está preparado para se adaptar as escolas que contratarem ele. Quando uma escola solicita o aplicativo para ser usar em suas turmas, nós criaremos um aplicativo novo com as funções já existentes no projeto e com a identidade visual do colégio solicitado, como sua logo, imagens, paleta de cores, nome, cadastro de seus professores, suas turmas e seus alunos, como também novas funções solicitadas para soluções específicas de sua escola. Esse novo app será criado para se utilizar <strong>exclusivamente</strong> em sua escola, desta maneira também aumentando o <strong>valor</strong> de seu colégio.</p>
                <br/>
                <p>Clique no botão a baixo para entrar em contato com o desenvolvedor do projeto e criar já o aplicativo para a sua escola!</p>
                <br/>
                <button id="button" onMouseOver={() => {
                    let button = document.getElementById("button")
                    button.style.backgroundColor = "transparent"
                    button.style.color = "#fff"
                }}
                onMouseOut={() => {
                    let button = document.getElementById("button")
                    button.style.backgroundColor = "#4071ff"
                    button.style.color = "#000"
                }}
                style={{
                    border: "2px solid #4071ff",
                    backgroundColor: "#4071ff",
                    width: "100%",
                    borderRadius: 5,
                    padding: 10,
                    color: "#000",
                    fontSize: 18,
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => {
                    window.location.href = "/agendaaprendize/contratar"
                }}
                >Contratar Projeto</button>
            </div>)
        }
    
    }

    return (
        <section className={style.SessionHome} style={{
            backgroundColor: color || "#fff",
            flexDirection: directImage
        }}>
            <Image alt="Icone sobre o tópico" src={image} width={220} height={220} className={style.image} />
            <div style={{ width: largura }} className={style.texts}>
                <div className={style.title}>
                    <h3>{title || "UNDEFINED"}</h3>
                    {textBadge ? <Badge text={textBadge} /> : <></>}
                </div>
                {text}
            </div>
        </section>
    )
}