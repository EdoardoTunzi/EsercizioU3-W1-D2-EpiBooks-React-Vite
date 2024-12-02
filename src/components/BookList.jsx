import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: null
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleBookSelection = (book) => {
    this.setState({ selectedBookAsin: book.asin });
  };
  render() {
    const { books } = this.props;
    const { searchQuery, selectedBookAsin } = this.state;
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <Container fluid className="mt-5">
        {/* <div className="d-flex justify-content-center gap-2 mb-5 fs-3">
            <button className="btn btn-warning fs-5">Fantasy</button>
            <button className="btn btn-warning fs-5">History</button>
            <button className="btn btn-warning fs-5">Horror</button>
            <button className="btn btn-warning fs-5">Romance</button>
            <button className="btn btn-warning fs-5">Sci-fi</button>
          </div>*/}
        <Row className="justify-content-center">
          <Col xs={6}>
            <Form.Control type="search" placeholder="Search books by title..." className="mb-4" value={searchQuery} onChange={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center gap-2">
              {filteredBooks.map((book) => (
                <Col key={book.asin}>
                  <SingleBook book={book} onBookSelect={this.handleBookSelection} selectedBookAsin={selectedBookAsin} />
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={3}>{selectedBookAsin ? <CommentArea bookID={selectedBookAsin} /> : <div>Select a book to read reviews</div>}</Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
