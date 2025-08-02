"use client";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { Language } from "@/components/Language/Language";

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
              <div className={styles.signupField}>
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
              <div className={styles.signupField}>
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
        <div className={styles.signupUtils}>
          <div className={styles.signupLanguageSelector}>
            <Language />
          </div>
        </div>
      </div>
    </section>
  );
}
