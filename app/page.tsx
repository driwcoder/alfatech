import Header from '@/components/Header'
import styles from './page.module.css'
import Banner1 from '@/components/Banner1'
import Oferta from '@/components/Oferta'
import Servicos from '@/components/Servicos'
import Tabela from '@/components/Tabela'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header
        header={`${styles.header}`}
        headerContent={`${styles.headerContent}`}
        logo={`${styles.logo}`}
        logoText={`${styles.logoText}`}
        
        
        navigationBar={`${styles.navigationBar}`}
        navLinks={`${styles.navLinks}`}
        imagemLogo='/logo-icone.png'
        logoTextSpan={`${styles.logoTextSpanClaro}`}

        linkInformacoes='/#Informacoes'
        linkPlanos='/#Planos'
        linkPrecos='/precos'
        linkContato='/#Contato'
      />
      <Banner1 />
      <Oferta
        title='Hospede o seu site por apenas R$29 por mês'
        text='Também temos planos gratuitos. Adquira já o seu.'
        ofertaCor={`${styles.ofertaEscuro}`}
        ofertaContentCor={`${styles.ofertaContentEscuro}`}
        botaoOferta={styles.botaoEscuro}
      />
      <Servicos />
      <Tabela />
      <Oferta
        title='Mais de 20.000 pessoas confiam na Spark! Seja um deles você também!'
        ofertaCor={`${styles.ofertaClaro}`}
        ofertaContentCor={`${styles.ofertaContentClaro}`}
        botaoOferta={styles.botaoClaro}
      />
      <Contato
      imagemLogo='/logo-icone.png'
      contatos={`${styles.contatos}`}
      logoTextSpan={`${styles.logoTextSpanClaro}`}
      />
      <Footer />
    </main>
  )
}
