import * as React from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'

interface Props {}

const raids: NavDropdownItem[] = [
  { title: 'Last Wish', link: '/raids/lastwish' },
  { title: 'Garden of Salvation', link: '/raids/gardenofsalvation' },
  { title: 'Deep Stone Crypt', link: '/raids/deepstonecrypt' },
  { title: 'Vault of Glass', link: '/raids/vaultofglass' },
  { title: 'Vow of the Disciple', link: '/raids/vowofthedisciple' },
  { title: "King's Fall", link: '/raids/kingsfall' },
  { title: 'Root of Nightmares', link: '/raids/rootofnightmares' },
]

export const NavBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <NavItem title={'Raids'} link={'/raids'} dropdownItems={raids} />
      <NavItem title={'Dungeons'} link={'/dungeons'} />
      <NavItem title={'New Light Guide'} link={'/newlight'} />
    </div>
  )
}

interface NavItemProps {
  title: string
  link: string
  dropdownItems?: NavDropdownItem[]
}

interface NavDropdownItem {
  title: string
  link: string
}

const NavItem = (props: NavItemProps) => {
  console.log(props.dropdownItems)

  // TODO menu link styling
  return (
    <div className={styles.navItem}>
      <Link href={props.link}>
        <div>{props.title}</div>
      </Link>
      <div className={styles.dropdownContent}>
        {props.dropdownItems?.map(i => (
          <div className={styles.item} key={i.title}>
            {i.title}
          </div>
        ))}
      </div>
    </div>
  )
}
