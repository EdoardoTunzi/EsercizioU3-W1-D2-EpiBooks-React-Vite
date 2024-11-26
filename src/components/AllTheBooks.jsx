import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
//import history from "../data/history.json";
//import horror from "../data/horror.json";
//import romance from "../data/romance.json";
//import scifi from "../data/scifi.json";

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
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="justify-content-center gap-2 mb-4">
        {fantasy.map((book) => (
          <Col key={book.asin}>
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
