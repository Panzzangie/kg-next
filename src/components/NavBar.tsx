'use client'

import * as React from 'react'
import styles from './NavBar.module.css'
import { useState } from 'react'
import Popover from '@mui/material/Popover'

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
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  // const [isHovered, setIsHovered] = useState<boolean>(false)
  const shouldHaveDropdown =
    props.dropdownItems && props.dropdownItems.length > 0

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(null)
  }
  // TODO menu link styling
  return (
    <div className={styles.navItem}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a style={{ all: 'unset' }} href={props.link}>
          <div>{props.title}</div>
        </a>
      </div>
      {shouldHaveDropdown ? (
        <div>
          <Popover
            id='mouse-over-popover'
            sx={{
              pointerEvents: 'none',
            }}
            open={!!anchorEl}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handleMouseLeave}
            disableRestoreFocus
          >
            <div>
              {props.dropdownItems?.map(i => (
                <div key={i.title}>{i.title}</div>
              ))}
            </div>
          </Popover>
        </div>
      ) : null}
    </div>
  )
}
