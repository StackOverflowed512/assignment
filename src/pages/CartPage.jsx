import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import styles from "../styles/CartPage.module.css";
import { toast } from 'react-toastify';

export default function CartPage() {
    const { cart, cartTotal, clearCart } = useCart();

    const handleCheckout = () => {
        clearCart();
        toast.success('Order placed successfully! 🎉', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
    };

    return (
        <div className={styles.cartPage}>
            <h1 className={styles.title}>Your Cart</h1>
            {cart.length === 0 ? (
                <p className={styles.emptyCart}>Your cart is empty</p>
            ) : (
                <>
                    <div className={styles.cartItems}>
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className={styles.cartSummary}>
                        <h3 className={styles.total}>Total: ${cartTotal.toFixed(2)}</h3>
                        <button
                            onClick={handleCheckout}
                            className={styles.checkoutButton}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
