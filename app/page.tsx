import Header from '@/components/Header'
import styles from './page.module.css'
import Banner1 from '@/components/Banner1'
import Oferta from '@/components/Oferta'
import Servicos from '@/components/Servicos'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner1 />
      <Oferta
        title='Hospede o seu site por apenas R$29 por mês'
        text='Também temos planos gratuitos. Adquira já o seu.'
        cor={styles.oferta}
        ofertaContentEscuro={`${styles.ofertaContentEscuro}`}
        botaoOferta={styles.botaoEscuro}
        ofertaEscuro={styles.ofertaEscuro}
      />
      <Servicos />
    </main>
  )
}
