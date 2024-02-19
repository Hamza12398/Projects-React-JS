import { Link } from "react-router-dom";

let posts = [
  {
    id: 1,
    title: "First Post",
    body: "This is Body For Each Title",
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is Body For Each Title",
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is Body For Each Title",
  },
];

export default function PostList() {
  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to="/PostDetails">
        <div
          style={{ background: "orange", marginTop: "10px", padding: "10px" }}
        >
          <h2>{post.title}</h2>
        </div>
      </Link>
    );
  });
  return <>{postList}</>;
}
