import s from './Sidebar.module.css'
import Portal from '@reach/portal'
import { FC, useEffect, useRef } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

interface Props {
  children: any
  open: boolean
  side?: 'right' | 'left'
  onClose: () => void
}

const Sidebar: FC<Props> = ({
  children,
  open = false,
  onClose,
  side = 'right',
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [open])

  const sidebarClasses =
    side === 'right' ? 'right-0 pl-10 sm:pl-16' : 'left-0 pr-10 sm:pr-16'

  return (
    <Portal>
      {open ? (
        <div className={s.root} ref={ref}>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={onClose}
            />
            <section
              className={`absolute inset-y-0 max-w-full flex outline-none ${sidebarClasses}`}
            >
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </Portal>
  )
}

export default Sidebar
