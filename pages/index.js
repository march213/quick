import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>super fast</section>
    </div>
  )
}
