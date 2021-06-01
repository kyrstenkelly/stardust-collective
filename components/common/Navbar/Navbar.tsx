import { FC } from 'react'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import s from './Navbar.module.css'

const Navbar: FC = () => (
  <NavbarRoot>
    <Container>
      <div className="relative flex flex-row justify-between py-2 align-center md:py-3">
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className="hidden ml-6 space-x-4 lg:block">
            <Link href="/shop">
              <a className={s.link}>Shop</a>
            </Link>
            <Link href="/commissions">
              <a className={s.link}>Commissions</a>
            </Link>
            <Link href="/contact">
              <a className={s.link}>Contact</a>
            </Link>
          </nav>
        </div>

        <div className="flex justify-end items-center flex-1 space-x-8">
          <div className="hidden lg:flex">
            <Searchbar />
          </div>
          <UserNav />
        </div>
      </div>

      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
