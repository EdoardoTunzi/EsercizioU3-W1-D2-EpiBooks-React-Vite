import { ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <ListGroup className="mb-4">
      {comments.map((comment) => (
        <ListGroup.Item key={comment._id}>
          {comment.comment} - {comment.rate} {comment.rate > 1 ? "Stars" : "Star"}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CommentsList;
