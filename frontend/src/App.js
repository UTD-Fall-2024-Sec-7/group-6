import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import LoginPage from "./pages/login";
import Secret from "./pages/secret";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./component/ProtectedRoute";

import "./App.css";
import BookPage from "./pages/book";
import CheckoutPage from "./pages/checkout";
import CreateProfile from "./pages/createprofile"; // Import CreateProfile page

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createprofile" element={<CreateProfile />} /> {/* New Route */}
        <Route path="/book/:id" element={<BookPage />} />

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
  );
}

export default App;
