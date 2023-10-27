import Header from '@/components/Header'
import styles from '../page.module.css'

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
      />
    </div>
  )
}

export default Page