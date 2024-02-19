import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <div>
        <h1>Hello Hamza</h1>
      </div>

      <Link to="/">
        <div
          style={{
            background: "#eee",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <h1>Go To Home Page</h1>
        </div>
      </Link>
    </>
  );
}
