import Link from "next/link";
import styles from "./LanguageSelect.module.css";

export const LanguageSelect = () => {
  return (
    <ul className={styles.languageList}>
      <li className={styles.languageItem}>
        <Link href="?country=US&locale=de_DE" className={styles.languageLink}>
          <span className={styles.languageText}>Deutsch</span>
        </Link>
      </li>
      <li className={styles.languageItem}>
        <Link href="?country=US&locale=en_US" className={styles.languageLink}>
          <span className={styles.languageText}>English</span>
        </Link>
      </li>
    </ul>
  );
};
