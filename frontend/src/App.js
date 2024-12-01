import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import LoginPage from "./pages/login";
import Secret from "./pages/secret";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./component/ProtectedRoute";

import "./App.css";
import BookPage from "./pages/book";
import CheckoutPage from "./pages/checkout";
import CreatePage from "./pages/create";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/write" element={<CreatePage />} />

          {/* Protected Routes */}
          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <Secret />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
