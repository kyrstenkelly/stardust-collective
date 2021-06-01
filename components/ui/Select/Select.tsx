import { FC } from 'react'
import ReactSelect, { ActionMeta } from 'react-select'
import s from './Select.module.css'

export interface Option {
  label: string
  value: string
}

interface Props {
  defaultOption?: Option
  label: string
  options: Option[]
  onChange(value: Option | null, action: ActionMeta<Option>): void
}

const Select: FC<Props> = ({ defaultOption, label, onChange, options }) => {
  return (
    <div className={s.root}>
      <ReactSelect
        aria-label={label}
        className="sc-select"
        classNamePrefix="sc-select"
        defaultValue={defaultOption || options[0]}
        isClearable
        name={label}
        onChange={onChange}
        options={options}
      />
    </div>
  )
}

export default Select
