import styles from '../styles/Scripts.module.css';
import Link from 'next/link';

export default function CallScriptHeader() {
  return (
      <div className={styles.csnavbar}>
        <div className={styles.dropdown}>
          <div className={styles.dropbtn}>
            <Link  href="#OPEN">MENU</Link>
          </div>
            <div className={styles.dropdown_content}>
              <Link href="/">Home Page</Link>
              <Link href="/products">Products</Link>
              <Link href="/checklist">Check-List</Link>
              <Link href="/knowyourstory">Know Your Story</Link>
            </div>
        </div>
          <div className={styles.dropdown}>
            <div className={styles.dropbtn}>
              <Link  href="#OPEN">SCRIPTS</Link>
            </div>
            <div className={styles.dropdown_content}>
              <Link href="/#">SALES OutBound</Link>
              <Link href="/#">SALES InBound</Link>
            </div>
          </div>
        <Link href="#OPEN">INTRO</Link>
        <Link href="#APPSTART">START</Link>
        <Link href="#APPOUTCOME">OUTCOME</Link>
        <Link href="#CLOSEOUT">CLOSE-OUT</Link>
        <div className={styles.csnav_img} >LOGO HERE</div>
      </div>
  )
}
