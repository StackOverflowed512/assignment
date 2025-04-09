import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import styles from "../styles/ProductDetailPage.module.css";

export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                setProduct(response.data);
            } catch (err) {
                setError("Failed to fetch product details");
                console.error("Error fetching product:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) return <div className={styles.loading}>Loading product details...</div>;
    if (error) return <div className={styles.error}>{error}</div>;
    if (!product) return <div className={styles.error}>Product not found</div>;

    return (
        <div className={styles.productDetail}>
            <div className={styles.productImages}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.productInfo}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.description}>{product.description}</p>
                <button
                    onClick={() => addToCart(product)}
                    className={styles.addToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
