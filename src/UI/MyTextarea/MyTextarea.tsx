import React from 'react'
import styles from './MyTextarea.module.scss'
const MyTextarea = (props: any) => {
  return <textarea cols='30' rows='5' {...props} className={styles.textarea} />
}

export default MyTextarea
