import { FC } from 'react'
import { Email, Facebook, Instagram } from '@components/icons'

interface Props {
  showLabels?: boolean
  variant?: 'inline' | 'stacked'
}

const CONTACT_METHODS = [
  {
    link: 'mailto:kyrsten@stardust-collective.com',
    Icon: Email,
    label: 'kyrsten@stardust-collective.com',
  },
  {
    link: 'https://instagram.com/_stardust_collective_',
    Icon: Instagram,
    label: '@_stardust_collective_',
  },
  {
    link: 'https://www.facebook.com/Stardust-Collective-103220911841298',
    Icon: Facebook,
    label: 'Stardust Collective',
  },
]

const SocialNav: FC<Props> = ({ showLabels = false, variant = 'stacked' }) => {
  const inline = variant === 'inline'

  return (
    <ul className={`${inline ? 'flex' : ''}`}>
      {CONTACT_METHODS.map(({ Icon, link, label }) => (
        <li className={`${inline ? 'inline' : 'm-4'}`}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`${inline ? '' : 'flex'} items-center`}
          >
            <Icon className="inline mr-2" />
            {showLabels ? <span className="underline">{label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialNav
