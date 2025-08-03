import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLinkItem}>
              <Link href={"/contact"} className={styles.footerLink}>
                Contact
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link href={"/privacy-policy"} className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link
                href={"/terms-and-conditions"}
                className={styles.footerLink}
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
