import React from "react";
import styles from "../styles/bookitemcard.module.css";

function BookItemCard({ book }) {
  return (
    <div className={styles.itemCard}>
      <img src={book.img} className={styles.img} />
      <div className={styles.itemContent}>
        <div className={styles.cardTitle}>
          <h2>{book.title}</h2>
          <h2>${book.price}</h2>
        </div>

        <h3>By {book.author}</h3>
        <p>
          <strong>{book.type}</strong>
        </p>
        <p>In Stock</p>
        <p>Free Delivery | Pick Up In Store</p>
        <p>- 1 + | Delete | Save for Later | Share</p>
      </div>
    </div>
  );
}

export default BookItemCard;
