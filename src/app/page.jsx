import Link from "next/link"
import styles from "./css/Home.module.css"
import Image from "next/image"
import Head from "next/head"
import ButtonsHome from "@/components/ButtonsHome"

export const metadata = {
  description: "Equipe especializada em criação de aplicativos, websites, softwares entre outros produtos digitais.",
}

export default function Page() {
  return (
    <main className={styles.main}>
      <Head>
        <meta name="keywords" content="applicco, aplico, applico, aplicco, app, licco, app licco, aplicativo, software, site, website, agenda aprendize, agenda patrus"></meta>
        <meta property="og:title" content="Applicco - Aplicativos e Softwares"></meta>
        <meta property="og:description" content="Equipe especializada em criação de aplicativos, websites, softwares entre outros produtos digitais."></meta>
        <meta property="og:url" content="https://applicco.com.br"></meta>
        <meta property="og:image" content="https://imgur.com/7DQOLBg.png"></meta>
      </Head>
      <div className={styles.header}>
        <div>
          <h1>Sua inovação se aplica aqui!</h1>
          <h2>Construindo o Futuro Empresarial: Inove seu Negócio com Tecnologia e Leve-o para Outro Nível!</h2>
          <p>Somos uma equipe de criação de <span>Websites</span>, <span>Aplicativos Mobile</span>, <span>Chatbots</span> e aquilo que você precisa para revoluncionar o seu negócio.</p>
        </div>
        <div align="center">
          <div align="center"><Image src="/dev-ia.svg" alt="Humano interagindo com bot num celular" height={440} width={440} className="Image" /></div>
          <div align="center"><ButtonsHome name={"ModalRequestService"} /></div>
        </div>
      </div>

      <div className={styles.projectAA}>
        <div>
          <h2>Projeto: Agenda Aprendize</h2>
          <p>Esse é um dos nossos projetos principais e que tem foco auxiliar a gestão das tarefas estudantis de redes escolares. Clique no botão ao lado para saber mais sobre o projeto.</p>
        </div>
        <div className={styles.buttonArea}>
          <Link href={"/agendaaprendize"} style={{ textDecoration: "none" }}><button>Saber mais</button></Link>
        </div>
      </div>

      <div className={styles.about}>
        <h2>Sobre o Applicco</h2>
        <p>Está é uma equipe de desenvolvimento de produtos digitais tanto para empresas, pequenos negócios, projetos pessoais e até serviços públicos. Criamos todo o tipo de produto digital como Websites, Aplicativos Mobile, Softwares, entre tantos outros, tudo exclusivo e da forma que você deseja para o seu projeto ou sua ideia.</p>
      </div>

      {
        /*
        
        //  LIBERAR ESSA PARTE
 
      <div>
        <h2>Projetos Desenvolvidos:</h2>
        <div>
          <div>
            <h3>Públicos e Oficial</h3>
          </div>
          <div>
            <h3>Estudos e Treinamentos</h3>
          </div>
        </div>
      </div>
 
      <div>
        <div>
          <h2>Produtos Que Desenvolvemos</h2>
          <p>Aqui estão os serviços que realizamos, todos os tipos de projetos que criamos:</p>
 
          <div>
            <h3>Utilidades</h3>
            <ItemList name="Website" icon="" color="" />
            <ItemList name="Aplicativos Mobile" icon="" color="" />
            <ItemList name="Aplicativos Desktop" icon="" color="" />
          </div>
 
          <div>
            <h3>Sistemas</h3>
            <ItemList name="Softwares" icon="" color="" />
            <ItemList name="APIs" icon="" color="" />
            <ItemList name="Banco de Dados" icon="" color="" />
          </div>
 
          <div>
            <h3>Bots & Chatbots</h3>
            <ItemList name="Para WhatsApp" icon="" color="" />
            <ItemList name="Para Discord" icon="" color="" />
            <ItemList name="Para Telegram" icon="" color="" />
          </div>
        </div>
 
        <div>
          <h2>Outros serviços</h2>
          <p>Você tem alguma ideia ou projeto em mente mas não sabe como ele pode sair do papel e ser criado? Entre em contato conosco e nos explique sua ideia que te apresentaremo como podemos faze-la.</p>
        </div>
        <button>Solicitar um serviço</button>
      </div>
 
      <div>
        <h2>Linguagens de programação, Frameworks e tecnologias que utilizamos:</h2>
        <ItemBlock name="JavaScript" icon="" color="" />
        <ItemBlock name="HTML" icon="" color="" />
        <ItemBlock name="CSS" icon="" color="" />
        <ItemBlock name="React JS" icon="" color="" />
        <ItemBlock name="React Native" icon="" color="" />
        <ItemBlock name="NextJS" icon="" color="" />
        <ItemBlock name="NodeJS" icon="" color="" />
        <ItemBlock name="MongoDB" icon="" color="" />
      </div>
 
              */
      }


    </main>
  )
}