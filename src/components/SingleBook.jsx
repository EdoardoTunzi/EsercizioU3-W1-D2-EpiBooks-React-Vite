import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };

  //funzione toggleSelected
  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;
    return (
      <Card className={`h-100 ${selected ? "border-danger" : ""}`} onClick={this.toggleSelected}>
        <Card.Img variant="top" src={book.img} alt={book.title} className="img-fluid object-fit-cover" style={{ height: "20rem" }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>

          <div className="mt-auto d-flex gap-2 justify-content-center align-items-center">
            <Button variant="primary">Buy Now</Button>
            <Card.Text className="fw-bold fs-5 ">{book.price} €</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
