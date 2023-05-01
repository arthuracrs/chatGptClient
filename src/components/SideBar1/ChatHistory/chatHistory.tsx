import useSWR from 'swr'
import React, { useState } from 'react';

import styles from './style.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ChatHistory() {
  const [selected, setSelected] = useState(0)
  const { data, error } = useSWR("api/chat/history", fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      {data.map((chat: any) => (
        <p key={chat.id} className={`${selected === chat.id ? styles.selected : styles.chat}`} onClick={() => setSelected(chat.id)}>{chat.titulo}</p>
      ))}
    </div>
  )
}