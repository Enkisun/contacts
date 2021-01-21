import React from 'react'
import styles from './form.module.css'

const Form = () => {
  return (
    <form className={styles.container}>
      <label className={styles.label} htmlFor='form'>Nama, Telepon, atau Email</label>
      <input id='form' className={styles.input} placeholder='Kepada' />
    </form>
  )
}

export default Form;