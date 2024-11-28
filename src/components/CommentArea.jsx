import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    error: null
  };
  //carica al montaggio componente la fetch
  componentDidMount() {
    this.handleCommentsFetch();
  }

  //funzione per fare la fetch
  handleCommentsFetch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookID}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUwODhhZDEyOTAwMTU4NzZiYzgiLCJpYXQiOjE3MzI4MDQyMjEsImV4cCI6MTczNDAxMzgyMX0.Dynzjmy-aOlSfwjx4u_MrJMrOu7Trzazo4MYMcwCMrk"
        }
      });
      if (response.ok) {
        const comment = await response.json();
        console.log(comment);

        this.setState({ comments: comment });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <CommentsList comments={this.state.comments} />
        <AddComment bookID={this.props.bookID} />
      </>
    );
  }
}
export default CommentArea;
