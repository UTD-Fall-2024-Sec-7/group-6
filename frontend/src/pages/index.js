import Button from "react-bootstrap/Button";
import CustomCarousel from "../component/Carousel";
import CustomCard from "../component/Card";
import CardWrapper from "../component/CardWrapper";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  const books = [
    {
      id: 1001,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "9780061120084",
      availabilityStatus: "Available",
      publicationDate: "1960-07-11",
      desc: "A novel by Harper Lee exploring themes of racial injustice and moral growth in the American South.",
      img: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg", // Cover image for To Kill a Mockingbird
    },
    {
      id: 1002,
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      availabilityStatus: "Out of Stock",
      publicationDate: "1949-06-08",
      desc: "George Orwell's dystopian novel depicting a totalitarian regime, surveillance, and mind control.",
      img: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg", // Cover image for 1984
    },
    {
      id: 1003,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "9781503290563",
      availabilityStatus: "Available",
      publicationDate: "1813-01-28",
      desc: "A classic romance novel by Jane Austen that explores themes of love, class, and social expectations.",
      img: "https://m.media-amazon.com/images/I/51bsVdt2XcL._AC_UF1000,1000_QL80_.jpg", // Cover image for Pride and Prejudice
    },
    {
      id: 1004,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      availabilityStatus: "Available",
      publicationDate: "1925-04-10",
      desc: "F. Scott Fitzgerald's story of ambition, wealth, and tragic love in the Jazz Age.",
      img: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg", // Cover image for The Great Gatsby
    },
    {
      id: 1005,
      title: "Moby-Dick",
      author: "Herman Melville",
      isbn: "9781503280786",
      availabilityStatus: "Out of Stock",
      publicationDate: "1851-10-18",
      desc: "Herman Melville's epic tale of obsession and revenge between Captain Ahab and the white whale.",
      img: "https://m.media-amazon.com/images/I/61PBBKyZ1rL._AC_UF1000,1000_QL80_.jpg", // Cover image for Moby-Dick
    },
    {
      id: 1006,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isbn: "9780316769488",
      availabilityStatus: "Available",
      publicationDate: "1951-07-16",
      desc: "J.D. Salinger's coming-of-age novel about teenage alienation and rebellion.",
      img: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg", // Cover image for The Catcher in the Rye
    },
    {
      id: 1007,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      isbn: "9780618640157",
      availabilityStatus: "Available",
      publicationDate: "1954-07-29",
      desc: "J.R.R. Tolkien's fantasy epic about the journey to destroy the One Ring and save Middle-earth.",
      img: "https://m.media-amazon.com/images/I/7125+5E40JL._AC_UF1000,1000_QL80_.jpg", // Cover image for The Lord of the Rings
    },
  ];  

  const [activeItem, setActiveItem] = useState("Book Title");
  const handleSelect = (eventKey, event) => {
    console.log(eventKey);
    setActiveItem(eventKey); // Set the selected item's text as active
  };

  return (
    <div>
      <CustomCarousel />
      <div style={styles.main}>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title={activeItem}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item
              eventKey="1"
              active={activeItem === "Book Title"}
              onClick={() => handleSelect("Book Title")}
            >
              Book Title
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              active={activeItem === "Author Name"}
              onClick={() => handleSelect("Author Name")}
            >
              Author Name
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              active={activeItem === "ISBN Number"}
              onClick={() => handleSelect("ISBN Number")}
            >
              ISBN Number
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => handleSelect("Availability Status")}
              active={activeItem === "Availability Status"}
            >
              Availability Status
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => handleSelect("Publication Date")}
              active={activeItem === "Publication Date"}
            >
              Publication Date
            </Dropdown.Item>
          </DropdownButton>
          <Form.Control
            aria-label="Text input with dropdown button"
            placeholder="Insert text here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>

        {!search ? (
          <>
            <CardWrapper books={books} heading="Our best sellers" />
            <CardWrapper books={books} heading="Winter favorites" />
            <CardWrapper books={books} heading="For children" />
          </>
        ) : (
          <div style={styles.searchCardWrapper}>
            {books
  .filter((book) => {
    if (search.toLowerCase() === "") return true;

    // Perform search based on the selected filter criterion
    switch (activeItem) {
      case "Book Title":
        return book.title.toLowerCase().includes(search.toLowerCase());
      case "Author Name":
        return book.author.toLowerCase().includes(search.toLowerCase());
      case "ISBN Number":
        return book.isbn.toLowerCase().includes(search.toLowerCase());
      case "Availability Status":
        return book.availabilityStatus.toLowerCase().includes(search.toLowerCase());
      case "Publication Date":
        return book.publicationDate.toLowerCase().includes(search.toLowerCase());
      default:
        return false;
    }
  })
  .map((book) => {
    return <CustomCard key={book.id} book={book} />;
  })}

          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  searchCardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
  },
  main: {
    padding: "2rem",
  },
};

export default HomePage;
