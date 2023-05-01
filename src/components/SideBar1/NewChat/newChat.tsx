import useSWR from 'swr'
import React, { useState } from 'react';

import styles from './style.module.css'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function NewChat() {
  // const { data, error } = useSWR("api/chat/history", fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => { alert('new chat') }}>New Chat</button>
    </div>
  )
}
