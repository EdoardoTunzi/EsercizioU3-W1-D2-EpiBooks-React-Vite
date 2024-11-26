import { Button, Card, Col, Container, Row } from "react-bootstrap";
import books from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center gap-3 mb-4">
        {books.map((book) => (
          <Col key={book.asin} sm={2}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} fluid className="object-fit-cover" style={{ height: "30rem" }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="fw-bold">{book.price} €</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
