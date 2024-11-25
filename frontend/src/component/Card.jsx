import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ book }) {
  return (
    <a href={`/book/${book.id}`} style={{ textDecoration: "none" }}>
      <Card style={{ width: "12rem", height: "20rem" }}>
        <Card.Img variant="top" src={book.img} style={{ height: "70%" }} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text className="text-truncate" style={{ maxWidth: "100%" }}>
            {book.desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default CustomCard;
