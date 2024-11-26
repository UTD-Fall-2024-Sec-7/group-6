import React from "react";
import styles from "../styles/reccomendationcard.module.css";

function ReccomendationCard() {
  return (
    <div className={styles.itemCard}>
      <img
        src="https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg"
        className={styles.img}
      />
      <div className={styles.itemContent}>
        <p>Harry Potter</p>
        <p>$19.71</p>
        <p>By Spongebob Squarepants</p>
      </div>
    </div>
  );
}

export default ReccomendationCard;
