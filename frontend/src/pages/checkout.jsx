import React from "react";
import styles from "../styles/checkout.module.css";
import BookItemCard from "../component/BookItemCard";
import Button from "react-bootstrap/Button";
import ReccomendationCard from "../component/ReccomendationCard";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameOnCard: "",
    expirationDate: "",
    securityCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form processing logic here
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
          Payment Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CheckoutPage() {
  const cart = [
    {
      id: 1001,
      title: "To Kill a Mockingbird",
      author: "Spongebob Squarepants",
      desc: "A novel by Harper Lee exploring themes of racial injustice and moral growth in the American South.",
      img: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg", // Cover image for To Kill a Mockingbird
      rating: 4.5,
      numReview: 325,
      price: 19.71,
      type: "Hardcover",
    },
    {
      id: 1002,
      title: "1984",
      author: "George Orwell",
      desc: "A novel by Harper Lee exploring themes of racial injustice and moral growth in the American South.",
      img: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg", // Cover image for To Kill a Mockingbird
      rating: 4.5,
      numReview: 325,
      price: 19.71,
      type: "Hardcover",
    },
  ];

  const wishlist = [
    {
      id: 1002,
      title: "1984",
      author: "George Orwell",
      desc: "A novel by Harper Lee exploring themes of racial injustice and moral growth in the American South.",
      img: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg", // Cover image for To Kill a Mockingbird
      rating: 4.5,
      numReview: 325,
      price: 19.71,
      type: "Hardcover",
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <h1>Checkout</h1>
        <hr />
        <div className={styles.body}>
          <div className={styles.mainBody}>
            <div className={styles.itemWrapper}>
              {cart.map((book) => {
                return <BookItemCard book={book} />;
              })}
            </div>
            <div className={styles.wishListWrapper}>
              {wishlist.map((book) => {
                return <BookItemCard book={book} />;
              })}
            </div>
          </div>
          <div className={styles.subBody}>
            <div className={styles.checkout}>
              <h3>Order Summary</h3>
              <p className={styles.checkoutHeading}>2x The Nightingale</p>
              <p className={styles.checkoutHeading}>2x The Nightingale</p>
              <p className={styles.checkoutHeading}>2x The Nightingale</p>
              <p className={styles.checkoutPrice}>Subtotal (2 items): $49.50</p>
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
