import React, { useState } from "react";
import { app } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function CreatePage() {
  const [formData, setFormData] = useState({
    title: "Pride and Prejudice",
    author: "Jane Austen",
    desc: "A romantic novel that critiques the British landed gentry of the early 19th century, centering on Elizabeth Bennet and her evolving relationship with Mr. Darcy.",
    img: "https://m.media-amazon.com/images/I/51bsVdt2XcL._AC_UF1000,1000_QL80_.jpg", // Replace with an actual URL for the book's cover
    rating: "4.9",
    numReview: "200000",
    price: "8.99",
    isbn: "9780141439518",
    publicationDate: "1813-01-28", // YYYY-MM-DD format
    availabilityStatus: "Available",
    genre: "Classic Literature",
    specialTags: "Romance, Social Critique, Regency Era",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore(app);
      const booksCollection = collection(db, "books");
      await addDoc(booksCollection, formData);
      alert("Book added successfully!");

      // Reset form
      setFormData({
        title: "",
        author: "",
        desc: "",
        img: "",
        rating: "",
        numReview: "",
        price: "",
        isbn: "",
        publicationDate: "",
        availabilityStatus: "",
        genre: "",
        specialTags: "",
      });
    } catch (error) {
      console.error("Error adding book: ", error);
      alert("Failed to add the book.");
    }
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
          />
        </div>
        <div>
          <label>Number of Reviews</label>
          <input
            type="number"
            name="numReview"
            value={formData.numReview}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
          />
        </div>
        <div>
          <label>ISBN Number</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Publication Date</label>
          <input
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Availability Status</label>
          <select
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Special Tags</label>
          <input
            type="text"
            name="specialTags"
            value={formData.specialTags}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default CreatePage;
