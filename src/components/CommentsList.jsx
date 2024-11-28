import { ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CommentsList;
