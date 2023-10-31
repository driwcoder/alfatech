import Header from '@/components/Header'
import styles from '../page.module.css'
import Tabela2 from '@/components/Tabela2'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div>
      <Header
        header={`${styles.headerEscuro}`}
        headerContent={`${styles.headerContent}`}
        logo={`${styles.logo}`}
        logoText={`${styles.logoTextEscuro}`}
        navigationBar={`${styles.navigationBar}`}
        navLinks={`${styles.navLinksEscuro}`}
        imagemLogo='/logo-icone-escuro.png'

        logoTextSpan={`${styles.logoTextSpanEscuro}`}

        linkInformacoes='/#Informacoes'
        linkPlanos='/#Planos'
        linkPrecos='/precos'
        linkContato='/#Contato'
      />
      <Tabela2 />
      <Contato
        imagemLogo='/logo-icone-escuro.png'
        contatos={`${styles.contatosEscuro}`}
        logoTextSpan={`${styles.logoTextSpanEscuro}`}
      />
      <Footer />
    </div>
  )
}

export default Page
