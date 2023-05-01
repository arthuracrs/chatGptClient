import useSWR from 'swr'
import React, { useState } from 'react';

import styles from './modelsList.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ModelsList() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const { data, error } = useSWR("api/chat/models", fetcher)

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <select className={styles.select} value={selectedOption} onChange={handleChange}>
        {data.map((model: any) => (
          <option key={model.id} value={model.root}>{model.root}</option>

        ))}
      </select>
    </div>
  )
}
