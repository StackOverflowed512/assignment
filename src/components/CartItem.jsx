import { useCart } from '../context/CartContext';
import styles from '../styles/CartItem.module.css';

export default function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.price}>${item.price}</p>
                <div className={styles.actions}>
                    <div className={styles.quantity}>
                        <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className={styles.quantityBtn}
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className={styles.quantityBtn}
                        >
                            +
                        </button>
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className={styles.removeBtn}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
