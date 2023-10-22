import styles from 'app/page.module.css'
import Image from 'next/image'

const Cards = (props: any) => {
  return (
    <div className={styles.card}>
      <Image src={props.image} height={70} width={70} alt='imagem' className={styles.image}/>
      <h3>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default Cards