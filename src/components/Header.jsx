import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "../styles/Header.module.css";

export default function Header({ setIsAuthenticated }) {
    const { cartCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles["nav-list"]}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart ({cartCount})</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
