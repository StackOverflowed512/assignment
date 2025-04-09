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
                            <h3>Summer Collection 2023</h3>
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
