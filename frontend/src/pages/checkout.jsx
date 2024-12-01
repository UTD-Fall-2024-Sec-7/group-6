// CheckoutPage.js
import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import styles from "../styles/checkout.module.css";
import BookItemCard from "../component/BookItemCard";
import Button from "react-bootstrap/Button";
import ReccomendationCard from "../component/ReccomendationCard";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { app } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function MyVerticallyCenteredModal(props) {
  const { cart, clearCart } = useCart();
  const db = getFirestore(app);
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    securityCode: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    const price = cart
      .reduce((total, book) => total + book.price * book.quantity, 0)
      .toFixed(2);
    const order = {
      books: cart, // Replace with dynamic book array
      totalPrice: price, // Calculate total dynamically
      user: "userId123", // Replace with dynamic user ID
      purchaseDate: new Date(),
    };

    // Perform validation if needed
    if (
      formData.cardNumber &&
      formData.nameOnCard &&
      formData.expirationDate &&
      formData.securityCode
    ) {
      try {
        // Save order to Firestore
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Order saved with ID: ", docRef.id);
        setIsSubmitted(true);
        clearCart();
        localStorage.removeItem("cart");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {isSubmitted ? "Thank You!" : "Payment Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isSubmitted ? (
          <div>
            <h4>Thank you for your purchase!</h4>
            <p>Your order has been submitted successfully.</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nameOnCard">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                name="nameOnCard"
                placeholder="John Doe"
                value={formData.nameOnCard}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="expirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="month"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="securityCode">
              <Form.Label>Security Code</Form.Label>
              <Form.Control
                type="password"
                name="securityCode"
                placeholder="123"
                value={formData.securityCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Order
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          {isSubmitted ? "Close" : "Cancel"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function CheckoutPage() {
  const { cart } = useCart(); // Use the cart context here
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log("Cart in CheckoutPage:", cart);
  }, [cart]); // Log cart whenever it updates

  return (
    <>
      <div className={styles.main}>
        <h1>Checkout</h1>
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
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#CBD9F2", border: "none" }}
                onClick={() => setModalShow(true)}
              >
                Checkout
              </Button>
            </div>
            <div className={styles.reccomendation}>
              <h4>Customers Also Bought:</h4>
              <div className={styles.checkoutWrapper}>
                <ReccomendationCard />
                <ReccomendationCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CheckoutPage;
