import Link from "next/link";
import styles from "./Language.module.css";

export const Language = () => {
  return (
    <ul className={styles.languageList}>
      <li className={styles.languageItem}>
        <Link href="/local/de_DE" className={styles.languageLink}>
          <span className={styles.languageText}>Deutsch</span>
        </Link>
      </li>
      <li className={styles.languageItem}>
        <Link href="/local/en_US" className={styles.languageLink}>
          <span className={styles.languageText}>English</span>
        </Link>
      </li>
    </ul>
  );
};
