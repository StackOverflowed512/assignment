import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/LoginPage.module.css";

export default function LoginPage({ setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "https://fakestoreapi.com/auth/login",
                {
                    username: "mor_2314",
                    password: "83r5^_",
                }
            );

            localStorage.setItem("token", response.data.token);
            setIsAuthenticated(true);
            navigate("/");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
            console.error("Login error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.brandSection}>
                    <div className={styles.logo}>LUXE</div>
                    <h1 className={styles.welcomeText}>Welcome Back</h1>
                    <p className={styles.subText}>
                        Sign in to access your personalized shopping experience
                    </p>

                    <div className={styles.socialLogin}>
                        <button className={styles.socialButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Continue with GitHub
                        </button>
                        <button className={styles.socialButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                            Continue with Facebook
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span>OR</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    {error && (
                        <div className={styles.error}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="#dc2626"
                                style={{ marginRight: "8px" }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {error}
                        </div>
                    )}

                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder=" "
                            required
                            className={styles.inputField}
                        />
                        <label htmlFor="username" className={styles.inputLabel}>
                            Username
                        </label>
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" "
                            required
                            className={styles.inputField}
                        />
                        <label htmlFor="password" className={styles.inputLabel}>
                            Password
                        </label>
                    </div>

                    <div className={styles.rememberForgot}>
                        <label className={styles.rememberMe}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className={styles.forgotPassword}>
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={styles.submitButton}
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className={styles.spinner}
                                    viewBox="0 0 50 50"
                                >
                                    <circle
                                        className={styles.path}
                                        cx="25"
                                        cy="25"
                                        r="20"
                                        fill="none"
                                        strokeWidth="5"
                                    ></circle>
                                </svg>
                                Signing in...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>

                    <p className={styles.signupLink}>
                        New to LUXE? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>

            <div className={styles.imageSection}>
                <div className={styles.carousel}>
                    <div className={styles.carouselItem}>
                        <div className={styles.overlay}></div>
                        <div className={styles.carouselContent}>
                            <h3>Summer Collection</h3>
                            <p>
                                Discover our new arrivals with exclusive member
                                benefits
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
