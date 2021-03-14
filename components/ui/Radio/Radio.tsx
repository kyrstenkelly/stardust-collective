import cn from 'classnames'
import s from './Input.module.css'
import React, { InputHTMLAttributes } from 'react'

export interface RadioOption {
  value: string
  label: string
  name?: string
}

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
  options: RadioOption[]
}

const Radio: React.FC<Props> = ({ className, onChange, options, ...rest }) => {
  const rootClassName = cn(s.root, {}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <div className={rootClassName}>
      {options.map((o, i) => (
        <>
          <input
            id={`option-${i}-${o.value}`}
            type="radio"
            name={o.name}
            value={o.value}
          />
          <label htmlFor={`option-${i}-${o.value}`}>{o.label}</label>
        </>
      ))}
    </div>
  )
}

export default Radio
