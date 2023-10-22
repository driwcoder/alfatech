import styles from 'app/page.module.css'
import Image from 'next/image'

const Banner1 = () => {
  return (
    <div className={styles.banner1}>
      <div className={styles.banner1Content}>
        <div className={styles.textos}>
          <span>Simples - Fácil de usar - 10x mais rápido!</span>
          <h2>O melhor serviço de hospedagem na web para o seu site.</h2>
          <p>Obtenha a melhor velocidade para o seu site. Não perca mais clientes por causa de lentidão na sua hospedagem.</p>
        </div>
        <Image src='/imagem-banner.png' width='400' height='350' alt='Foto de servidor' className={styles.foto}/>
      </div>
    </div>
  )
}

export default Banner1