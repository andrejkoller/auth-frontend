"use client";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";

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
                    sx={textFieldSx}
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
                    sx={textFieldSx}
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
                  sx={textFieldSx}
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
                  sx={textFieldSx}
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
                  sx={textFieldSx}
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
              <AnimatedButton
                type={"submit"}
                className={styles.signupButton}
                hoverType={"background"}
              >
                Create Account
              </AnimatedButton>
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
