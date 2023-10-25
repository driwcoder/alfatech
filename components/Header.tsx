import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from 'app/page.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Image src='/logo-icone.png' width='70' height='70' alt='logo' />
          <div className={styles.logoText}>
            <h1>AlfaTech</h1>
            <span>Soluções em hospedagem</span>
          </div>
        </div>
        <nav className={styles.navigationBar}>
          <Link href='#Informacoes' className={styles.navLinks}>
            Informações
          </Link>
          <Link href='#Planos' className={styles.navLinks}>
            Planos
          </Link>
          <Link href='/precos' className={styles.navLinks}>
            Preços
          </Link>
          <Link href='#Contato' className={styles.navLinks}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
