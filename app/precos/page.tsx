import Header from '@/components/Header'
import styles from '../page.module.css'
import Tabela2 from '@/components/Tabela2'

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
      <Tabela2 />
    </div>
  )
}

export default Page