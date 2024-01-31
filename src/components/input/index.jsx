import React from 'react'
import style from './index.module.css'

export default function Input({name,a}) {
  return(
      <div className={style.form}>
      <label className={style.fromLabel} htmlFor="input">{name}<span>*</span></label>
      <input id='input' className={style.formInput} type="text" placeholder={a} />
      </div>
  )
}
