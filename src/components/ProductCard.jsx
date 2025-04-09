import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
        toast.success('Added to cart!');
    };

    return (
        <Link to={`/product/${product.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={product.image} alt={product.title} />
                <button 
                    className={styles.quickAdd}
                    onClick={handleAddToCart}
                >
                    Quick Add
                </button>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.price}>${product.price}</p>
            </div>
        </Link>
    );
}
