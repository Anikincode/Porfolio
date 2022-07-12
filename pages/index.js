import Head from 'next/head'
import Image from 'next/image'
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
=======
import styles from '../styles/Home.module.scss'
>>>>>>> a03c040cc042cb3e0cc3c397013f8f41d36900e0
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AnikinCode Showcase</title>
        <meta name="description" content="AnikinCode Porfolio of web development" />
       
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AnikinCode Portfolio by <a href="https://www.linkedin.com/in/kirill-anikin-449026154/">Kirill Anikin</a>
        </h1>

        <p className={styles.description}>
        
          
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
       
      </footer>
    </div>
  )
}
