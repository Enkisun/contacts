import React, { useState } from 'react'
import cn from 'classnames'
import styles from './contact.module.css'

const Contact = ({ photo, name }) => {

  const [isActiveUndang, setActiveUndang] = useState(false);

  const sendRequest = () => {
    setActiveUndang(!isActiveUndang);
  }

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img src={photo} alt='userPhoto' className={styles.photo} />

        <div className={styles.contactInfo}>
          <h4 className={styles.name}>{name}</h4>
          <h5 className={styles.phone}>0451 887 969</h5>
        </div>
      </div>

      <button className={cn(styles.undangButton, {[styles.activeUndangButton]: isActiveUndang})} onClick={sendRequest}>
        { isActiveUndang ? 'Terkirim' : 'Undang' }
      </button>
    </div>
  )
}

export default Contact;