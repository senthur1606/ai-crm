import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>AI CRM</h2>

      <hr />

      <p>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>
      </p>

      <p>
        <Link to="/log" style={{ color: "white", textDecoration: "none" }}>
          Log Interaction
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;