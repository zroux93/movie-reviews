import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from "./page.module.css";
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Zachary&apos;s Website</h2>

      <p>
        This is a test website I&apos;ve created to explore the capabilities of
        NextJs and other Javascript frameworks.
      </p>

      <Link
        href="/reviews"
        className={styles.card}
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Zachary&apos;s Movie Reviews <span>-&gt;</span>
        </h2>
        <p className={inter.className}>See my movie reviews!</p>
      </Link>

      <Link
        href="/about/me"
        className={styles.card}
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          About Me <span>-&gt;</span>
        </h2>
        <p className={inter.className}>Get to know me!</p>
      </Link>
      {/* </div> */}
    </main>
  );
}
