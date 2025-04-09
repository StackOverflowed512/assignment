import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
    const { removeFromCart, updateQuantity } = useCart();

    return (
        <div className="cart-item">
            <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
            />
            <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="quantity-controls">
                    <button
                        onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                        }
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                        }
                    >
                        +
                    </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
}
