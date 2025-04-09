import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem("token")
    );

    return (
        <CartProvider>
            <BrowserRouter>
                {isAuthenticated && (
                    <Header setIsAuthenticated={setIsAuthenticated} />
                )}
                <Routes>
                    <Route
                        path="/login"
                        element={
                            isAuthenticated ? (
                                <Navigate to="/" />
                            ) : (
                                <LoginPage
                                    setIsAuthenticated={setIsAuthenticated}
                                />
                            )
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated} />
                        }
                    >
                        <Route index element={<HomePage />} />
                        <Route
                            path="product/:id"
                            element={<ProductDetailPage />}
                        />
                        <Route path="cart" element={<CartPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
