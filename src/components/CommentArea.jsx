import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ bookID }) => {
  /* state = {
    comments: []
  }; */
  const [comments, setComments] = useState([]);

  /*   //carica al montaggio componente la fetch
  componentDidMount() {
    if (this.props.bookID) {
      this.handleCommentsFetch();
    }
  }
  //aggiorna i commenti al cambiamento del bookID
  componentDidUpdate(prevProps) {
    if (prevProps.bookID !== this.props.bookID) {
      this.handleCommentsFetch();
    }
  }
 */
  useEffect(() => {
    if (bookID) {
      handleCommentsFetch();
    }
  }, [bookID]);

  //funzione per fare la fetch
  const handleCommentsFetch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookID}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGUwODhhZDEyOTAwMTU4NzZiYzgiLCJpYXQiOjE3MzI4MDQyMjEsImV4cCI6MTczNDAxMzgyMX0.Dynzjmy-aOlSfwjx4u_MrJMrOu7Trzazo4MYMcwCMrk"
        }
      });
      if (response.ok) {
        const reviews = await response.json();
        console.log("Fetched comments", reviews);

        setComments(reviews);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CommentsList comments={comments} />
      <AddComment bookID={bookID} onCommentAdded={handleCommentsFetch} />
    </>
  );
};

export default CommentArea;
