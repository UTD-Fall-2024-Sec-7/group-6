import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import styles from "../styles/book.module.css";
import { useState } from "react";

const BookPage = () => {
  const { id } = useParams();
  const [bookType, setBookType] = useState("HardCover");
  const book = {
    id: 1001,
    title: "To Kill a Mockingbird",
    author: "Spongebob Squarepants",
    desc: "A novel by Harper Lee exploring themes of racial injustice and moral growth in the American South.",
    img: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg", // Cover image for To Kill a Mockingbird
    rating: 4.5,
    numReview: 325,
    price: 19.71,
  };

  return (
    <div className={styles.main}>
      <h1>Book Details</h1>
      <hr />
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <img
            alt="book-img"
            src="https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg"
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <div className={styles.rating}>
            <StarRatings
              rating={book.rating}
              starRatedColor="#CBD9F2"
              starDimension="30px"
              numberOfStars={5}
              name="rating"
            />
            {book.rating} ({book.numReview})<a href="#">Write a Review</a>
          </div>

          <DropdownButton
            as={ButtonGroup}
            id={`dropdown-variants-${"Primary"}`}
            variant={"primary"}
            title={bookType}
            style={{ width: "2rem" }}
          >
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                setBookType("Online");
              }}
            >
              Online
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                setBookType("Hardcover");
              }}
            >
              Hardcover
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                setBookType("Softcover");
              }}
            >
              Softcover
            </Dropdown.Item>
          </DropdownButton>
          <h3>${book.price}</h3>
          <div className={styles.checkoutContainer}>
            <div className={styles.buttonContainer}>
              <h4 className={styles.textContainer}>SHIP THIS ITEM</h4>
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#CBD9F2", border: "none" }}
              >
                Add to Cart
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <h4 className={styles.textContainer}>PICK UP IN STORE</h4>
              <Button variant="primary" size="lg">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
