import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.bookID
    };
    console.log(newComment);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUwODhhZDEyOTAwMTU4NzZiYzgiLCJpYXQiOjE3MzI4MDQyMjEsImV4cCI6MTczNDAxMzgyMX0.Dynzjmy-aOlSfwjx4u_MrJMrOu7Trzazo4MYMcwCMrk"
        }
      });
      if (response.ok) {
        this.setState({ comment: "", rate: 1 });
      }
    } catch (error) {
      console.log("Error posting comment:", error);
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-1" controlId="review-text">
          <Form.Control
            type="textarea"
            placeholder="Write your comment"
            value={this.state.comment}
            onChange={(e) => this.setState({ ...this.state, comment: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="review-rating">
          <Form.Select value={this.state.rate} onChange={(e) => this.setState({ ...this.state, rate: e.target.value })} required>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="warning" className="mb-3" type="submit">
            Add comment
          </Button>
        </div>
      </Form>
    );
  }
}
export default AddComment;
