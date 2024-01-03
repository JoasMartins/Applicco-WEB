'use client'
 
import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import appData from "../../appData.json"
import "../css/Agendaaprendize.css"

function Index() {

    const router = useRouter()

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
        router.push("/agendaaprendize/contratar")
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
                                <p>Ao contratar o Agenda Patrus para a sua escola, o nome do app será mudado para o do seu colégio, assim como sua foto, suas cores e tudo oque está associado a identidade visual, fazendo com que o seu app seja 100% desvínculado a E. E. Sebastião Patrus de Souza.</p>
                                <p>Aperte o botão ao lado para contratar o aplicativo.</p>
                            </div>
                            <button onClick={handleHire} className='areaActionButton'>
                                <FontAwesomeIcon icon={faHandshake} className='iconButton' />
                                <div className='barraDivisoria' />
                                <p>Contratar</p>
                            </button>
                        </div>

                        <div className='Download'>
                            <div className='texts'>
                                <h2>Aplicativo: Agenda Patrus</h2>
                                <h3>Esse é o aplicativo do projeto <span>Agenda Aprendize</span> exclusivo e reservado para os alunos da escola <span>E. E. Sebastião Patrus de Souza</span>. Clique no botão ao lado para iniciar o download do App.</h3>
                                <p>Certifique-se de que nas configurações do seu dispositivo a opção esteja ativada. Não sabe como ativar? <a href='https://www.showmetech.com.br/instalando-aplicativos-android-de-fontes-desconhecidas/' target="_blank" rel="noopener noreferrer">Clique aqui</a>.</p>
                            </div>
                            <div className="alert">
                                <button onClick={handleDownload} disabled={true} className='areaActionButton'>
                                    <FontAwesomeIcon icon={faDownload} className='iconButton' />
                                    <div className='barraDivisoria' />
                                    <p>Baixar</p>
                                </button>
                                <p className='text1'>Download indisponível!</p>
                                <p className='text2'>Aplicativo ainda não foi lançado.</p>
                            </div>
                        </div>
                    </div>

                    <p className='main_text'>Um aplicativo móvel de uso simples com um propósito único: ajudar na organização dos estudos e realização de tarefas da escola. Feito com as funções necessárias para que um aluno possa planejar suas atividades e matérias com antecedência.</p>
                </div>

                <div className='main_areaNotify'>
                    <h3 className='main_titleNotify'>Sistema de Notificações</h3>
                    <p className='main_textNotify'>Apelidado carinhosamente de MaiconNotify System, é o sistema de notificações da Agenda Patrus, criado para sempre avisar com antecedência sobre as tarefas programadas, para que você possa se preparar e não se esquecer delas. Confira abaixo como esse sistema funciona no aplicativo.</p>
                    <p className='main_textNotify'>Sempre que o dia de uma tarefa estiver se aproximando, o sistema irá te avisar quantos dias restam para a data marcada. Por exemplo: Se a tarefa chamada &quot;Trabalho de Matemática&quot; estiver agendada para um determinado dia, quando faltar 3 dias para essa tarefa, e se a opção de avisar com 3 dias de antecedência estiver ativada em sua conta, o sistema irá te notificar sobre essa tarefa e outras que estejam próximas.</p>
                    <p className='main_textNotify'>Vale ressaltar que o usuário terá a liberdade de escolher quantos dias antes deseja ser notificado, e essas configurações podem ser ajustadas conforme sua preferência.</p>
                    <p className='main_'>Confira as opções:</p>
                    <ul>
                        <li>Quando uma tarefa for criada;</li>
                        <li>Todos os dias as 04h listar as tarefas do dia;</li>
                        <li>Tarefas que estão restando 1 dia;</li>
                        <li>Tarefas que estão restando 2 dias;</li>
                        <li>Tarefas que estão restando 3 dias;</li>
                        <li>Tarefas que estão restando 4 dias;</li>
                        <li>Tarefas que estão restando 5 dias;</li>
                        <li>Tarefas que estão restando 6 dias;</li>
                        <li>Tarefas que estão restando 7 dias;</li>
                        <li>Tarefas que estão restando 10 dias.</li>
                    </ul>
                </div>

                <div className='main_areaInfo'>
                    <div>
                        <a>!</a>
                        <h3>Aviso</h3>
                    </div>
                    <p className='destaque'>Este aplicativo não foi criado nem solicitado pela equipe da secretaria ou direção da escola!</p>
                    <p className='nao_destaque'>Portanto, quaisquer erros, falhas ou problemas no aplicativo não devem ser reportados a eles, mas sim ao desenvolvedor do aplicativo.</p>
                </div>
            </main>
        </div>
    );
}

export default Index;