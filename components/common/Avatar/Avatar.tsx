import { FC, useRef } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import s from './Avatar.module.css'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <div ref={ref} style={{ background: userAvatar }} className={s.root}></div>
  )
}

export default Avatar
