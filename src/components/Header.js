import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
