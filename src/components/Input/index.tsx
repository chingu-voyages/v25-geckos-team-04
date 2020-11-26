import React, { ChangeEvent, FC } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import styles from './Input.module.css'

interface IInput {
  isSearchInput?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value: string
}

export const Input: FC<IInput> = ({
  isSearchInput,
  onChange,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <div className={styles.container}>
      {isSearchInput ? (
        <span className={styles.icon}>
          <SearchIcon fontSize="inherit" />
        </span>
      ) : null}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
