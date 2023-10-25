import styles from 'app/page.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3>Desenvolvido por 
          <Link href={'https://github.com/driwcoder'} target='_blank' className={styles.link}>
          <span>@DriwCoder</span>
        </Link> 
        </h3>
      </div>
    </footer>
  )
}

export default Footer