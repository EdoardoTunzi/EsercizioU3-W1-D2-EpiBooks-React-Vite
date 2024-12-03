import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  /*   state = {
    searchQuery: "",
    selectedBookAsin: ""
  }; */
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookSelection = (book) => {
    setSelectedBookAsin(book.asin);
  };

  /* const { books } = this.props;
    const { searchQuery, selectedBookAsin } = this.state; */
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col xs={6}>
          <Form.Control type="search" placeholder="Search books by title..." className="mb-4" value={searchQuery} onChange={handleSearch} />
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <Row xs={1} sm={2} md={3} lg={5} className="justify-content-center gap-2">
            {filteredBooks.map((book) => (
              <Col key={book.asin}>
                <SingleBook book={book} onBookSelect={handleBookSelection} selectedBookAsin={selectedBookAsin} />
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={3}>{selectedBookAsin ? <CommentArea bookID={selectedBookAsin} /> : <div>Select a book to read reviews</div>}</Col>
      </Row>
    </Container>
  );
};
export default BookList;
