'user client'
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Oferta = (props: any) => {
  return (
    <section className={props.ofertaCor}>
      <div className={`${styles.ofertaContent} ${props.ofertaContentCor} `}>
        <div className={props.textDiv}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>

        <Link href={'/precos'} className={styles.linkBotao}>
          <button className={props.botaoOferta}>
            <Image
              src='/icone-foguete.png'
              width='50'
              height='50'
              alt='imagem de foguete'
              className={styles.foguete}
            />
          <span>Tabela de preços</span>
        </button>
        </Link>
      </div>
    </section>
  )
}

export default Oferta
