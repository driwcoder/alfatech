import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = (props: any) => {
  return (
    <header className={props.header}>
      <div className={props.headerContent}>
        <div className={props.logo}>
          <Image src={props.imagemLogo} width='70' height='70' alt='logo' />
          <div className={props.logoText}>
            <h1>AlfaTech</h1>
            <span className={props.logoTextSpan}>Soluções em hospedagem</span>
          </div>
        </div>
        <nav className={props.navigationBar}>
          <Link href={`${props.linkInformacoes}`} className={props.navLinks}>
            Informações
          </Link>
          <Link href={`${props.linkPlanos}`} className={props.navLinks}>
            Planos
          </Link>
          <Link href={`${props.linkPrecos}`} className={props.navLinks}>
            Preços
          </Link>
          <Link href={`${props.linkContato}`} className={props.navLinks}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
