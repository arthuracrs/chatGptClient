import React from 'react';

import styles from './styles.module.css'
import ModelsList from './ModelsList/modelsList';

export default function SideBar2() {

  return (
    <div className={styles.container}>
      <h1>SideBar2</h1>
      <ModelsList />
    </div>
  )
}
