

import React from 'react';
//import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import appData from "../../appData.json"
import "../css/Agendaaprendize.css"
import Image from 'next/image';
import Head from 'next/head';
import SessionHome from "../../components/SessionHome";
import Link from 'next/link';
import ButtonDownload from './ButtonDownload';

export const metadata = {
    title: "Projeto: Agenda Aprendize",
    description: "Aplicativo de gerenciamento de atividades escolares.",
    images: 'https://imgur.com/ESY1Jk1.png',
    
}

function Index() {

    

    const handleDownload = () => {
        const apkFileName = appData.apkname;
        const apkFilePath = process.env.PUBLIC_URL + '/' + apkFileName;

        const downloadLink = document.createElement('a');
        downloadLink.href = apkFilePath;
        downloadLink.download = apkFileName;
        downloadLink.click();
    };

    const handleHire = () => {
        //window.location.href = "/agendaaprendize/contratar"
    }

    return (
        <div className="App">


            <main>
                <div className='main'>
                    <div className='main_areaTitle'>
                        <h1 className='main_titleText'>Seja bem-vindo(a) ao<br />Agenda Aprendize!</h1>
                        <h2 className='main_subtitleText'>O aplicativo para organizar seus estudos.</h2>
                    </div>

                    <div className='areaActions'>
                        <div className='Hire'>
                            <div className='texts'>
                                <h3>Contratar o aplicativo para a sua escola:</h3>
                                <p>Ao contratar o Agenda Aprendize para a sua escola, o nome do app será mudado para o do seu colégio, assim como sua foto, suas cores e tudo oque está associado a identidade visual, fazendo com que o seu app seja 100% desvínculado a E. E. Sebastião Patrus de Souza.</p>
                                <p>Aperte o botão ao lado para contratar o aplicativo.</p>
                            </div>
                            <Link href={"/agendaaprendize/contratar"} style={{textDecoration: "none"}}>
                            <button className='areaActionButton'>
                                <FontAwesomeIcon icon={faHandshake} className='iconButton' />
                                <div className='barraDivisoria' />
                                <p>Contratar</p>
                            </button>
                            </Link>
                        </div>

                        <div className='Download'>
                            <div className='texts'>
                                <h2>Aplicativo: Agenda Patrus</h2>
                                <h3>Esse é o aplicativo do projeto <span>Agenda Aprendize</span> exclusivo e reservado para os alunos da escola <span>E. E. Sebastião Patrus de Souza</span>. Clique no botão ao lado para iniciar o download do App.</h3>
                                <p>Certifique-se de que nas configurações do seu dispositivo a opção esteja ativada. Não sabe como ativar? <a href='https://www.showmetech.com.br/instalando-aplicativos-android-de-fontes-desconhecidas/' target="_blank" rel="noopener noreferrer">Clique aqui</a>.</p>
                            </div>
                            <div className="alert">
                                <ButtonDownload/>
                                <p className='text1'>Download indisponível!</p>
                                <p className='text2'>Aplicativo ainda não foi lançado.</p>
                            </div>
                        </div>
                    </div>

                    <p className='main_text'>Um aplicativo móvel de uso simples com um propósito único: ajudar na organização dos estudos e realização de tarefas da escola. Feito com as funções necessárias para que um aluno possa planejar suas atividades e matérias com antecedência.</p>
                </div>

                <SessionHome
                    title="APROVADO POR DIRETORES E SECRETÁRIOS"
                    text="Esse projeto foi aplicado na rede escolar E. E. Sebastião Patrus de Souza e obteve a aprovação e elogios da equipe administrativa, secretários e diretores, sem contar com a excelente avaliação de professores e alunos."
                    image="/agendaaprendize/approved.svg"
                    color="#5e86ff"
                />

                <SessionHome
                    title="O QUE É O PROJETO?"
                    text="O Agenda Aprendize é um aplicativo móvel projetado para integrar diversas funcionalidades, visando simplificar a gestão escolar e potencializar a experiência de estudos. Com diversos recursos, o aplicativo oferece soluções tanto para alunos, quanto para professores e direção, promovendo eficiência e organização na rotina escolar."
                    image="/agendaaprendize/project.svg"
                    color="#292929"
                    direction="right"
                />

                <SessionHome
                    title="ÁREA DO PROFESSOR"
                    text=""
                    image="/agendaaprendize/owl-teacher.svg"
                    color="#5e86ff"
                    custom={4}
                />

                <SessionHome
                    title="NOTIFICAÇÕES"
                    text=''
                    image="/agendaaprendize/phone.svg"
                    color="#0c1127"
                    direction="right"
                    custom={3}
                />

                <SessionHome
                    title="EXIBIÇÃO POR DIAS"
                    text=''
                    image="/agendaaprendize/calendar.svg"
                    color="#292929"
                    custom={1}
                />

                <SessionHome
                    title="JORNAL DA ESCOLA"
                    text=""
                    image="/agendaaprendize/news.svg"
                    color="#5e86ff"
                    custom={5}
                    textBadge={"Em Breve"}
                />

                <SessionHome
                    title="PROPRIEDADES DAS TAREFAS"
                    text=''
                    image="/agendaaprendize/list.svg"
                    color="#292929"
                    direction="right"
                    custom={2}
                />

                <SessionHome
                    title="ESTATISTICAS"
                    text="Acesso as informações que ficam armazenadas no app, como: a quantidade de tarefas atribuídas a cada aluno ou turma; as que foram feitas ou não por cada aluno; os estudantes que mais fizeram atividades; as turmas que mais realizam suas tarefas; turmas com mais tarefas atribuidas, entre outros dados."
                    image="/agendaaprendize/statistics.svg"
                    color="#5e86ff"
                    textBadge={"Em Breve"}
                />

                <SessionHome
                    title="MARCAR COMO FEITO"
                    text="Cada aluno terá controle sobre suas tarefas, marcando quais já foram feitas ou não. Essas marcações são contabilizadas para estátistica sobre o aluno e separar oque já foi feito ou oque está pendente."
                    image="/agendaaprendize/stamp.svg"
                    color="#292929"
                    direction="right"
                />

                <SessionHome
                    title="SEPARAÇÃO POR TURMAS"
                    text='Cada turma terá suas tarefas separadas das demais, projetado para exibir aos alunos de cada turma apenas as atividades que foram lançadas para a sua turma, ou seja, alunos de outras turmas terão em seus menus outras tarefas, aquelas que foram lançadas para sua turma.'
                    image="/agendaaprendize/student.svg"
                    color="#5e86ff"
                />

                <SessionHome
                    title="USAR EM OUTRAS ESCOLAS"
                    text=""
                    image="/agendaaprendize/contract.svg"
                    color="#292929"
                    direction="right"
                    custom={6}
                />

                <SessionHome
                    title="DESENVOLVIMENTO DO APLICATIVO"
                    text="Projeto começou a ser desenvolvido em Maio de 2023, por um aluno do segundo ano do ensino médio (na época) da rede escolar pública Estadual Sebatião Patrus de Souza. Esse mesmo desenvolvedor é fundador da Equipe Applicco, de criação de aplicativos, sites e softwares. Enfrentando problemas em seu cronograma de tarefas, iniciu o projeto que a príncipio serviria apenas para uso particular do mesmo, mas que foi decidido aumentar o alcance para beneficiar mais estudantes tanto de sua escola quanto de outras."
                    image="/agendaaprendize/development.svg"
                    color="#5e86ff"
                />

                <div className='main_areaInfoDiv'>
                    <div className='main_areaInfo'>
                        <div>
                            <Image src={"/info.svg"} width={30} height={30} alt="ícone de Informação" />
                            <p>Aviso!</p>
                        </div>
                        <p className='destaque'>Este aplicativo não foi criado nem solicitado pela equipe da secretaria ou direção da escola!</p>
                        <p className='nao_destaque'>Portanto, quaisquer erros, falhas ou problemas no aplicativo não devem ser reportados a eles, mas sim ao desenvolvedor do aplicativo.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Index;