"use client";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { useRouter } from "next/navigation";
import { textFieldSx } from "@/utils/textFieldSx";

export default function Page() {
  const router = useRouter();

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
                  sx={textFieldSx}
                  label="Email"
                  variant="outlined"
                  placeholder="name@domain.com"
                  fullWidth
                  margin="normal"
                  required
                  autoFocus
                />
              </div>
              <div className={styles.signinField}>
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
            <AnimatedButton
              type={"button"}
              className={styles.signupButton}
              hoverType={"background"}
              onClick={() => router.push("/signup")}
            >
              <span>Sign Up</span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
