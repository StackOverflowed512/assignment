import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
            const response = await axios.post("https://fakestoreapi.com/auth/login", {
                username: "mor_2314",
                password: "83r5^_"
            });
            localStorage.setItem("token", response.data.token);
            setIsAuthenticated(true);
            navigate("/");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.brandSection}>
                    <h1 className={styles.logo}>ShopStyle</h1>
                    <h2 className={styles.welcomeText}>Welcome Back</h2>
                    <p className={styles.subText}>Sign in to continue shopping</p>
                </div>

                {error && (
                    <div className={styles.error}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{marginRight: '8px'}}>
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            id="username"
                            className={styles.inputField}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="username" className={styles.inputLabel}>Username</label>
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="password"
                            id="password"
                            className={styles.inputField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" "
                            required
                        />
                        <label htmlFor="password" className={styles.inputLabel}>Password</label>
                    </div>

                    <div className={styles.rememberForgot}>
                        <label className={styles.rememberMe}>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <svg className={styles.spinner} viewBox="0 0 50 50">
                                    <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                </svg>
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    <p className={styles.signupLink}>
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </form>
            </div>

            <div className={styles.imageSection}>
                <div className={styles.carousel}>
                    <div className={styles.carouselItem}>
                        <div className={styles.overlay}></div>
                        <div className={styles.carouselContent}>
                            <h3>Discover the Latest Trends</h3>
                            <p>Shop the most exclusive collection of fashion and lifestyle products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
