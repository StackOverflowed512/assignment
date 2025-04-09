import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}
