import { FC } from 'react'
import Link from 'next/link'
import { Logo, Container, Sidebar } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { useUI } from '@components/ui/context'
import NavbarRoot from './NavbarRoot'
import NavbarSidebar from './NavbarSidebar'
import s from './Navbar.module.css'

const LINKS = [
  { url: '/shop', label: 'Shop' },
  { url: '/commissions', label: 'Commissions' },
  { url: '/contact', label: 'Contact' },
]

const Navbar: FC = () => {
  const { displayNavSidebar, toggleNavSidebar, closeNavSidebar } = useUI()

  return (
    <NavbarRoot>
      <Container>
        <div className="relative flex flex-row justify-between py-2 align-center md:py-3">
          <div className="flex items-center flex-1">
            {/* Mobile Logo - Menu */}
            <div className="visible lg:hidden">
              <div onClick={toggleNavSidebar}>
                <Logo />
              </div>
            </div>

            <Sidebar
              open={displayNavSidebar}
              onClose={closeNavSidebar}
              side="left"
            >
              <NavbarSidebar links={LINKS} />
            </Sidebar>

            {/* Desktop Logo - Home */}
            <div className="hidden lg:block">
              <Link href="/">
                <a className={s.logo} aria-label="Logo">
                  <Logo />
                </a>
              </Link>
            </div>
            <nav className="hidden ml-6 space-x-4 lg:block">
              {LINKS.map((link) => (
                <Link href={link.url} key={link.url}>
                  <a className={s.link}>{link.label}</a>
                </Link>
              ))}
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
}

export default Navbar
