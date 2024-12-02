import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, onBookSelect, selectedBookAsin } = this.props;

    return (
      <Card className={`h-100 ${selectedBookAsin === book.asin ? "border-danger" : ""}`} onClick={() => onBookSelect(book)}>
        {/* qui chiamo al funzione di booklist che prende l'asin del selez. e lo passa allo stato di booklist */}
        <Card.Img variant="top" src={book.img} alt={book.title} className="img-fluid object-fit-cover" style={{ height: "20rem" }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6">{book.title}</Card.Title>

          <div className="mt-auto d-flex gap-2 justify-content-center align-items-center">
            <Button variant="primary">Select</Button>
            <Card.Text className="fw-bold fs-5 ">{book.price} €</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
