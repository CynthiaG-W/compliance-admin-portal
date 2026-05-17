import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <div className="section" style={{ textAlign: "center" }}>
        <h1>🛡️ SafeVerify</h1>

        <p style={{ color: "#475569", fontSize: "16px" }}>
          Worldclass compliance platform for AML, KYC, KYB, and risk verification.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/services">
            <button>Explore Services</button>
          </Link>

          <Link to="/add-service">
            <button style={{ marginLeft: "10px" }}>
              Add New Service
            </button>
          </Link>
        </div>
      </div>

      {/* Feature cards*/}
      <div className="grid">

        <div className="card">
          <h3>🔐 Identity Verification</h3>
          <p>Secure user onboarding checks</p>
        </div>

        <div className="card">
          <h3>⚖️ AML Screening</h3>
          <p>Monitor global risk & sanctions</p>
        </div>

        <div className="card">
          <h3>🏢 KYB Checks</h3>
          <p>Verify business legitimacy</p>
        </div>

        <div className="card">
          <h3>📊 Risk Engine</h3>
          <p>Smart compliance scoring</p>
        </div>

      </div>

    </div>
  );
}

export default Home;