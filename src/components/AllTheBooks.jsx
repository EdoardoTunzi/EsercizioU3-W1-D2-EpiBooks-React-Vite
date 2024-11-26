import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container fluid className="mt-5">
      <div className="d-flex justify-content-center gap-2 mb-5 fs-3">
        <button className="btn btn-warning fs-5">Fantasy</button>
        <button className="btn btn-warning fs-5">History</button>
        <button className="btn btn-warning fs-5">Horror</button>
        <button className="btn btn-warning fs-5">Romance</button>
        <button className="btn btn-warning fs-5">Sci-fi</button>
      </div>
      <Row className="justify-content-center gap-2 mb-4">
        {fantasyBooks.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3} xxl={2}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} fluid className="object-fit-cover" style={{ height: "20rem" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>

                <div className="mt-auto d-flex gap-2">
                  <Button variant="primary">Buy Now</Button>
                  <Card.Text className="fw-bold fs-5 ">{book.price} €</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
