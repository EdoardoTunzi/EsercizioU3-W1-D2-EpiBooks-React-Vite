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
        <Form.Group className="mb-1" controlId="formText">
          <Form.Control
            type="textarea"
            placeholder="Write your comment"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSelect">
          <Form.Select value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </Form.Select>
        </Form.Group>
        <Button variant="warning" className="mb-3" type="submit">
          Add comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
