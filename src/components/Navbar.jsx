import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* BRAND */}
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: 0,
          fontSize: "18px",
        }}
      >
        🛡️ SafeVerify
      </h2>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link>
        <Link to="/add-service" style={{ color: "white", textDecoration: "none" }}>Add Service</Link>
      </div>
    </nav>
  );
}

export default Navbar;