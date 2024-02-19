import { useParams } from "react-router-dom";


export default function PostDetails() {
	const {postId} = useParams()
	console.log(postId);
  return (
    <>
      <h1>This is Posts Details</h1>
      {/* <h1>{title}</h1>
      <h3>{body}</h3> */}
    </>
  );
}
