"use client";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <section className={styles.signupSection}>
      <div className={styles.signupContainer}>
        <div className={styles.signupContent}>
          <form className={styles.signupForm}>
            <div className={styles.signupHeader}>
              <h1>Sign Up</h1>
            </div>
            <div className={styles.signupFields}>
              <div className={styles.signupFieldGroup}>
                <div className={styles.signupField}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    placeholder="Andrej"
                    fullWidth
                    margin="normal"
                    required
                    autoFocus
                  />
                </div>
                <div className={styles.signupField}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    placeholder="Koller"
                    fullWidth
                    margin="normal"
                    required
                  />
                </div>
              </div>
              <div className={styles.signupField}>
                <TextField
                  label="Email"
                  variant="outlined"
                  placeholder="name@domain.com"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
              <div className={styles.signupField}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
              <div className={styles.signupField}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
            </div>
            <div className={styles.signupActions}>
              <button type="submit" className={styles.signupButton}>
                Create Account
              </button>
            </div>
          </form>
          <div className={styles.divider}>
            <span className={styles.dividerText}>or</span>
          </div>
          <div className={styles.signinActions}>
            <Link href={"/signin"} className={styles.signinButton}>
              <span>Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
