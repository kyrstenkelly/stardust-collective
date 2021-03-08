import { FC } from 'react'

interface LogoProps {
  className?: string
  size?: 'small' | 'large'
}

const Logo: FC<LogoProps> = ({ className = '', size = 'small' }) => (
  <img
    src={`/logo${size === 'small' ? '-small' : ''}.png`}
    className={className}
    height={size === 'small' ? 65 : 700}
    width={size === 'small' ? 96 : 1000}
  />
)

export default Logo
