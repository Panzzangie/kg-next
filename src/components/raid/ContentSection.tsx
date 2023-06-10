import * as React from 'react'
import styles from './ContentSection.module.css'

interface Props {
  title: string
  summary: string
  imgSource?: string
}

export const ContentSection = (props: Props) => {
  const { title, summary } = props
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  )
}
