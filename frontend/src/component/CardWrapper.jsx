import React, { useEffect, useRef } from "react";
import CustomCard from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function CardWrapper({ books, heading }) {
  const scrollRef = useRef(null);
  const booksLength = books.length;

  // Function to handle the scroll reset for infinite scrolling
  const handleScroll = () => {
    const container = scrollRef.current;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      // If at the end of the list, reset scroll position smoothly to the beginning
      container.scrollLeft = 0;
    }

    if (container.scrollLeft === 0) {
      // If at the beginning of the list, append the books to create an illusion of endless scroll
      setTimeout(() => {
        container.scrollLeft += 1; // Smooth scrolling effect to prevent jarring reset
      }, 100);
    }
  };

  useEffect(() => {
    // Duplicate books to simulate the infinite scroll
    const interval = setInterval(() => {
      handleScroll();
    }, 100); // Adjust the frequency of scroll checks for smoothness

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-center mb-4">{heading}</h1>
      <div
        className="d-flex overflow-auto gap-3 p-3"
        style={{
          whiteSpace: "nowrap",
          minWidth: "100vw",
          overflowX: "scroll",
          scrollBehavior: "smooth", // Optional: For smooth scroll
        }}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {/* Render the books twice for the infinite effect */}
        {[...books, ...books].map((book, index) => (
          <div key={index} style={{ flex: "0 0 auto" }}>
            <CustomCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardWrapper;
