import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Ensure this is correctly set up
import StarRatings from "react-star-ratings";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import styles from "../styles/book.module.css";
import { useCart } from "../CartContext";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import CartSideBar from "../component/CartSideBar";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null); // State to store the book data
  const [bookType, setBookType] = useState("HardCover");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Get the addToCart function from the context

  // Fetch book details by ID
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookRef = doc(db, "books", id); // Replace "books" with your collection name
        const bookSnap = await getDoc(bookRef);

        if (bookSnap.exists()) {
          setBook(bookSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  // Function to handle adding the book to the cart
  const handleAddToCart = () => {
    addToCart({
      id: id, // Ensure this is unique for the book
      title: book.title,
      author: book.author,
      price: book.price,
      img: book.img,
      type: bookType, // Add the selected book type
    });

    // Show success toast notification
    toast.success(`${book.title} has been added to your cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={styles.main}>
      <ToastContainer /> {/* Toast container for notifications */}
      <h1>Book Details</h1>
      <hr />
      <div className={styles.body}>
        <div className={styles.mainContainer}>
          <div className={styles.imgContainer}>
            <img alt="book-img" src={book.img} className={styles.img} />
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
              {book.rating} ({book.numReview}) <a href="#">Write a Review</a>
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
            <p>{book.desc}</p>
            <div className={styles.checkoutContainer}>
              <div className={styles.buttonContainer}>
                <h4 className={styles.textContainer}>SHIP THIS ITEM</h4>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ backgroundColor: "#CBD9F2", border: "none" }}
                  onClick={handleAddToCart} // Add book to cart
                >
                  Add to Cart
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <h4 className={styles.textContainer}>PICK UP IN STORE</h4>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart} // Add book to cart
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CartSideBar />
      </div>
    </div>
  );
};

export default BookPage;
