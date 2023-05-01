// import useSWR from 'swr'
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

import styles from "./styles.module.css"
// const { data, error } = useSWR(`/api/chat`, fetcher)

export default function ChatInput() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend(text);
    setText('');
  };

  const textAreaAdjust = (e) => {
    const element = e.target
    element.parentNode.style.height = "1px";
    element.parentNode.style.height = element.scrollHeight + "px";
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <textarea onInput={textAreaAdjust} className={styles.inputText} value={text} onChange={handleTextChange} />
        <button className={styles.buttonSubmit} type="submit">S</button>
      </div>
    </div>
  );
}
