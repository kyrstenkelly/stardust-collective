import { FC } from 'react'
import Link from 'next/link'
import { Cross } from '@components/icons'
import { Logo } from '@components/ui'
import { useUI } from '@components/ui/context'
import s from './Navbar.module.css'

interface Props {
  links: {
    url: string
    label: string
  }[]
}

const NavbarSidebar: FC<Props> = ({ links }) => {
  const { closeNavSidebar } = useUI()
  const handleClose = () => closeNavSidebar()

  return (
    <div className="flex flex-col">
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex justify-between items-center space-x-3">
          <div className="mr-16">
            <Link href="/">
              <a className={s.logo} aria-label="Logo" onClick={handleClose}>
                <Logo />
              </a>
            </Link>
          </div>

          <div className="h-7 flex items-center">
            <button
              onClick={handleClose}
              aria-label="Close menu"
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <nav className="m-8 flex flex-col text-primary">
        {links.map((link) => (
          <div className="pb-4" key={link.url}>
            <Link href={link.url}>
              <a className={s.link} onClick={handleClose}>
                {link.label}
              </a>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default NavbarSidebar
