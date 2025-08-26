"use client";

import { CircularProgress, TextField } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton/AnimatedButton";
import { textFieldSx } from "@/utils/textFieldSx";
import { useState } from "react";
import { register } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      await register(formData);
      router.push("/signin");
    } catch (error) {
      setErrorMessage("Error registering user.");
      console.error("Error registering user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.signupSection}>
      <div className={styles.signupContainer}>
        <div className={styles.signupContent}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <form className={styles.signupForm} onSubmit={handleRegister}>
                <div className={styles.signupHeader}>
                  <h1>Sign Up</h1>
                </div>
                {errorMessage && (
                  <div
                    className={styles.errorMessage}
                    style={{ color: "red", marginBottom: "1rem" }}
                  >
                    {errorMessage}
                  </div>
                )}
                <div className={styles.signupFields}>
                  <div className={styles.signupFieldGroup}>
                    <div className={styles.signupField}>
                      <TextField
                        sx={textFieldSx}
                        label="First Name"
                        variant="outlined"
                        placeholder="Andrej"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
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
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
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
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
