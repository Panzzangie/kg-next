import * as React from 'react'
import styles from './Header.module.css'
import kgLogo from '../img/KG_Outlined.png'
import discordLogo from '../img/discordLogo.svg'
import { NavBar } from './NavBar'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

export const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.logoContainer}>
          <Image
            src={kgLogo}
            alt='Kinderguardians logo'
            height={140}
            width={140}
          />
        </div>
        hello this is panda
        <div>
          <Link
            href='https://discord.gg/kinderguardians'
            target='_blank'
            rel='noreferrer'
          >
            <Image src={discordLogo} height={40} alt='Discord Link' />
          </Link>
        </div>
      </div>
      <NavBar />
    </div>
  )
}
