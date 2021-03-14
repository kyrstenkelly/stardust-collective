import { FC, useRef } from 'react'
import useCustomer from '@framework/customer/use-customer'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import s from './Avatar.module.css'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { userAvatar } = useUserAvatar()
  const { data: customer } = useCustomer()
  const firstInitial = customer?.firstName.charAt(0) || ''
  const lastInitial = customer?.lastName.charAt(0) || ''
  const initials = `${firstInitial}${lastInitial}`.toLowerCase()

  return (
    <div ref={ref} style={{ background: userAvatar }} className={s.root}>
      <div>{initials}</div>
    </div>
  )
}

export default Avatar
