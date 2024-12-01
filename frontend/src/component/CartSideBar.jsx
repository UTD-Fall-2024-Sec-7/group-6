// CheckoutPage.js
import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import styles from "../styles/checkoutsidebar.module.css";
import BookItemCard from "../component/BookItemCard";
import Button from "react-bootstrap/Button";

function CartSideBar() {
  const { cart } = useCart(); // Use the cart context here
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log("Cart in CheckoutPage:", cart);
  }, [cart]); // Log cart whenever it updates

  return (
    <>
      <div className={styles.main}>
        <h1>Cart</h1>
        <hr />
        <div className={styles.body}>
          <div className={styles.mainBody}>
            <div className={styles.itemWrapper}>
              {cart.map((book) => {
                return <BookItemCard key={book.id} book={book} />;
              })}
            </div>
          </div>
          <div className={styles.subBody}>
            <div className={styles.checkout}>
              <h3>Order Summary</h3>
              {cart.map((book) => (
                <p key={book.id} className={styles.checkoutHeading}>
                  {book.title} x{book.quantity}
                </p>
              ))}
              <p className={styles.checkoutPrice}>
                Subtotal: $
                {cart
                  .reduce(
                    (total, book) => total + book.price * book.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <a href="/checkout">
                <Button
                  variant="primary"
                  size="lg"
                  style={{ backgroundColor: "#CBD9F2", border: "none" }}
                  onClick={() => setModalShow(true)}
                >
                  Checkout
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSideBar;
