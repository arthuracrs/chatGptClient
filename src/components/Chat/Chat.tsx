import useSWR from 'swr'

import ChatInput from './ChatInput/ChatInput'

import styles from "./styles.module.css"

export default function Chat() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error } = useSWR(`/api/chat`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <ChatInput/>
    </div>
  )
}