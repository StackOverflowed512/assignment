import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleCheckout = () => {
        clearCart();
        setOrderPlaced(true);
        setTimeout(() => setOrderPlaced(false), 4000);
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {orderPlaced && (
                <div className="order-success">
                    <p>Order placed successfully!</p>
                </div>
            )}
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total: ${cartTotal.toFixed(2)}</h3>
                        <button
                            onClick={handleCheckout}
                            className="checkout-btn"
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
