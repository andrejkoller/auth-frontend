"use client";
import { CircularProgress, TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { useRouter } from "next/navigation";
import { textFieldSx } from "@/utils/textFieldSx";
import { useState } from "react";
import { login } from "@/services/authService";
import { setAuthToken } from "@/services/tokenService";
import { LanguageSelect } from "@/components/LanguageSelect/LanguageSelect";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = await login(formData);
      setAuthToken(user.token);
      router.push("/account");
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.signinSection}>
      <div className={styles.signinContainer}>
        <div className={styles.signinContent}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <form className={styles.signinForm} onSubmit={handleLogin}>
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                      required
                    />
                  </div>
                </div>
                <div className={styles.signinOptions}>
                  <Link
                    href={"/forgot-password"}
                    className={styles.forgotPassword}
                  >
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
              <LanguageSelect />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
