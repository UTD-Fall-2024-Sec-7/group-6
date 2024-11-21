import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import CustomCarousel from "./component/Carousel";
import CustomCard from "./component/Card";
import CardWrapper from "./component/CardWrapper";

function App() {
  const books = [
    {
      title: "To Kill a Mockingbird",
      desc: "A novel by Harper Lee exploring themes of racial injustice and moral growth in the American South.",
    },
    {
      title: "1984",
      desc: "George Orwell's dystopian novel depicting a totalitarian regime, surveillance, and mind control.",
    },
    {
      title: "Pride and Prejudice",
      desc: "A classic romance novel by Jane Austen that explores themes of love, class, and social expectations.",
    },
    {
      title: "The Great Gatsby",
      desc: "F. Scott Fitzgerald's story of ambition, wealth, and tragic love in the Jazz Age.",
    },
    {
      title: "Moby-Dick",
      desc: "Herman Melville's epic tale of obsession and revenge between Captain Ahab and the white whale.",
    },
    {
      title: "The Catcher in the Rye",
      desc: "J.D. Salinger's coming-of-age novel about teenage alienation and rebellion.",
    },
    {
      title: "The Lord of the Rings",
      desc: "J.R.R. Tolkien's fantasy epic about the journey to destroy the One Ring and save Middle-earth.",
    },
  ];

  return (
    <div>
      <CustomCarousel />
      <CardWrapper books={books} heading="Our best sellers" />
      <CardWrapper books={books} heading="Winter favorites" />
      <CardWrapper books={books} heading="For children" />
    </div>
  );
}

export default App;
