import Card from "react-bootstrap/Card";

function Bcard({ title, description, src, price, brand }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <blockquote className="blockquote mb-0">
          <p></p>
          <footer className="blockquote-footer">{brand}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Bcard;
