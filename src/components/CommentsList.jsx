import { ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h6>Reviews:</h6>
      <ListGroup className="mb-4">
        {comments.map((comment) => (
          <ListGroup.Item key={comment._id} className="list-group-item-info mb-1 rounded-3">
            {comment.comment} - {comment.rate} {comment.rate > 1 ? "Stars" : "Star"}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default CommentsList;
