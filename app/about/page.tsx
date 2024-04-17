import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function About() {
    return (
        <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Belgacem Khadher's first react node js project
        </p>
        <h1>Page about</h1>
        <div>
        <Link href="/">Go to home</Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
    </main>
        
       
    );
}
  export default About;
  