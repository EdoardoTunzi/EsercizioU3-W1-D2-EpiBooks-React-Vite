import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="textarea" placeholder="Write your comment" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Select value={this.state.rate} onChange={(e) => this.setState({ comment: e.target.value })}>
            <option value="1">⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          Add comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
