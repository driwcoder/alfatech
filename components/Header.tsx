import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from 'app/page.module.css'

const Header = (props: any) => {
  return (
    <header className={props.header}>
      <div className={props.headerContent}>
        <div className={props.logo}>
          <Image src={props.imagemLogo} width='70' height='70' alt='logo' />
          <div className={props.logoText}>
            <h1>AlfaTech</h1>
            <span>Soluções em hospedagem</span>
          </div>
        </div>
        <nav className={props.navigationBar}>
          <Link href='#Informacoes' className={props.navLinks}>
            Informações
          </Link>
          <Link href='#Planos' className={props.navLinks}>
            Planos
          </Link>
          <Link href='/precos' className={props.navLinks}>
            Preços
          </Link>
          <Link href='#Contato' className={props.navLinks}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
