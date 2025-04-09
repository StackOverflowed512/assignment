import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                let url = "https://fakestoreapi.com/products";
                if (selectedCategory) {
                    url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
                }
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (err) {
                setError("Failed to fetch products");
                console.error("Error fetching products:", err);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products/categories"
                );
                setCategories(response.data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchProducts();
        fetchCategories();
    }, [selectedCategory]);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.homePage}>
            <div className={styles.filters}>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {isLoading ? (
                <div className={styles.loading}>Loading products...</div>
            ) : error ? (
                <div className={styles.error}>{error}</div>
            ) : (
                <div className={styles.productsGrid}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
