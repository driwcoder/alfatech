import styles from 'app/page.module.css'
import Image from 'next/image'

const Contato = (props: any) => {
  return (
    <section className={props.contatos} id='Contato'>
      <div className={styles.contatosContent}>
        <div className={styles.logo}>
          <Image src={props.imagemLogo} width={70} height={70} alt='logotipo alfatech' />
          <div className={styles.logoText}>
            <h1>AlfaTech</h1>
            <span className={props.logoTextSpan}>Soluções em hospedagem</span>
          </div>
        </div>
        <p>Telefone & Whatsapp: (21) 99999-5555</p>
        <p>E-mail: suporte@alfatech.com</p>
        <p>Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro</p>
        <p>© AlfaTech - Soluções em hospedagem - Todos os direitos reservados</p>
      </div>
    </section>
  )
}

export default Contato