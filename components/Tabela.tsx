'use client'
import styles from 'app/page.module.css'
import Image from 'next/image'

const Tabela = () => {
  return (
    <section className={styles.tabela} id='Planos'>
      <div className={styles.tabelaContent}>
        <h2>
          Pague <span>somente</span> pelo que for usar. Sem cobranças adicionais!
        </h2>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <td>
              <th>PESSOAL</th>
              <tr>
                <Image
                  src={'/pessoal-icone.png'}
                  width={120}
                  height={120}
                  alt='imagem de pessoal'
                />{' '}
              </tr>
              <tr className={styles.linhaWrap}>Indicado para uso pessoal</tr>
            </td>
            <td>
              <th>PROFISSIONAL</th>
              <tr>
                <Image
                  src={'/equipe-icone.png'}
                  width={120}
                  height={120}
                  alt='imagem de pessoal'
                />
              </tr>
              <tr className={styles.linhaWrap}>Indicado para profissionais de T.I</tr>
            </td>
            <td>
              <th>EMPRESARIAL</th>
              <tr>
                <Image
                  src={'/big-tech.png'}
                  width={120}
                  height={120}
                  alt='imagem de pessoal'
                />
              </tr>
              <tr className={styles.linhaWrap}>Indicado para empresas</tr>
            </td>
            <td>
              <th>BIG TECHS</th>
              <tr>
                <Image
                  src={'/empresa-icone.png'}
                  width={120}
                  height={120}
                  alt='imagem de pessoal'
                />
              </tr>
              <tr className={styles.linhaWrap}>Indicado para grandes empresas</tr>
            </td>
          </thead>
          <tbody className={styles.tableBody}>
            <td>
              <tr>1 usuário</tr>
              <tr>10 usuários</tr>
              <tr>25 usuários</tr>
              <tr>50 usuários</tr>
            </td>
            <td>
              <tr>1 domínio grátis</tr>
              <tr>2 domínios grátis</tr>
              <tr>2 domínios grátis</tr>
              <tr>3 domínios grátis</tr>
            </td>
            <td>
              <tr>200GB SSD espaço</tr>
              <tr>500GB SSD espaço</tr>
              <tr>1TB SSD espaço</tr>
              <tr>2TB SSD espaço</tr>
            </td>
            <td>
              <tr>Ofertas especiais</tr>
              <tr>Ofertas especiais</tr>
              <tr>Ofertas especiais</tr>
              <tr>Ofertas especiais</tr>
            </td>
            <td>
              <tr>Suporte limitado</tr>
              <tr>Suporte limitado</tr>
              <tr>Suporte limitado</tr>
              <tr>Suporte limitado</tr>
            </td>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Tabela
