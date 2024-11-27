import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: ""
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  render() {
    const { books } = this.props;
    const { searchQuery } = this.state;
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
        <Form>
          <Form.Control type="search" placeholder="Search books by title..." className="mb-4" value={searchQuery} onChange={this.handleSearch} />
        </Form>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="justify-content-center gap-2 mb-4">
          {filteredBooks.map((book) => (
            <Col key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
