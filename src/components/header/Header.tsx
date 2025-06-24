"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["header-logo-container"]}>
            <Link href={"/"} className={styles["header-logo"]}>
              <span className={styles["header-logo-text"]}>
                Church Management System
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
