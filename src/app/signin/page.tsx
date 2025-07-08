"use client";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <section className={styles.signinSection}>
      <div className={styles.signinContainer}>
        <div className={styles.signinContent}>
          <form className={styles.signinForm}>
            <div className={styles.signinHeader}>
              <h1>Log In</h1>
            </div>
            <div className={styles.signinFields}>
              <div className={styles.signinField}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--border)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--border)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "var(--border)",
                      },
                      "& .MuiInputBase-input": {
                        color: "var(--text-default)",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "var(--text-muted)",
                        opacity: 1,
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "var(--text-default)",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "var(--text-default)",
                    },
                  }}
                  label="Email"
                  variant="outlined"
                  placeholder="name@domain.com"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
              <div className={styles.signinField}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--border)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--border)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "var(--border)",
                      },
                      "& .MuiInputBase-input": {
                        color: "var(--text-default)",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "var(--text-muted)",
                        opacity: 1,
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "var(--text-default)",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "var(--text-default)",
                    },
                  }}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
            </div>
            <div className={styles.signinOptions}>
              <Link href={"/forgot-password"} className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>
            <div className={styles.signinActions}>
              <button type="submit" className={styles.signinButton}>
                Log In
              </button>
            </div>
          </form>
          <div className={styles.divider}>
            <span className={styles.dividerText}>or</span>
          </div>
          <div className={styles.signupActions}>
            <Link href={"/signup"} className={styles.signupButton}>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
