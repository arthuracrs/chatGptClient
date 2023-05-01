import React from 'react';

import styles from './styles.module.css'
import ChatHistory from './ChatHistory/chatHistory';
import NewChat from './NewChat/newChat';

export default function SideBar1() {

  return (
    <div className={styles.container}>
      <NewChat/>
      <h1>SideBar1</h1>
      <ChatHistory />
    </div>
  )
}
