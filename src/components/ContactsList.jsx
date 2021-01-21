import React from 'react'
import Contact from './Contact';
import styles from './contactsList.module.css'
import photo from '../assets/himan.jpg'

const ContactsList = () => {
  return (
    <>
      <h5 className={styles.title}>Kontak</h5>

      <div className={styles.container}>
        <Contact photo={photo} name='Addison Larson' />
        <Contact photo={photo} name='Agatha Connolly' />
        <Contact photo={photo} name='Andy Peyton' />
        <Contact photo={photo} name='Alessia Accardi' />
      </div>
    </>
  )
}

export default ContactsList;