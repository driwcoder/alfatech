import styles from 'app/page.module.css'
import Cards from '@/components/Cards'

const Servicos = () => {
  return (
    <section id='Informacoes'>
      <div className={styles.servicosContent}>
        <h2>Existem diversos serviços de hospedagem de sites. Porque você deve nos escolher?</h2>
        <div className={styles.cards}>
          <Cards 
            image='/icone-engrenagens.png'
            title='Fácil de configurar'
            text='Facilmente configurável em plataformas CMS populares - Wordpress, Joomia ...'
          />
          <Cards 
            image='/cloud-icone.png'
            title='Servidores 100% Online'
            text='Serviços que operam 100% do tempo para manter o seu site online...'
          />
          <Cards 
            image='/icone-suporte.png'
            title='Suporte 24/7'
            text='Suporte altamente treinado e especializado em soluções de Cloud...'
          />
          
        </div>
      </div>
    </section>
  )
}

export default Servicos