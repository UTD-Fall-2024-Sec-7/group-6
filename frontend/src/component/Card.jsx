import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ book }) {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img
        variant="top"
        src="https://m.media-amazon.com/images/I/813RId-1qiL.jpg"
      />
      <Card.Body>
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text className="text-truncate" style={{ maxWidth: "100%" }}>
          {book.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
