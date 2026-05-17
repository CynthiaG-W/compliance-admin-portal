import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import useFetchServices from "../hooks/useFetchServices";

function Services() {
  const { data: services, loading } =
    useFetchServices("https://compliance-api-3ssu.onrender.com/services");

  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <h2>Loading services...⏳</h2>;
  }

  return (
    <div className="page">

      <div className="section">
        <h1>Compliance Services</h1>

        <p>
          Manage AML checks, KYB verification, identity checks and risk screening services.
        </p>

        <p style={{ color: "#2563eb", fontWeight: "bold" }}>
        </p>
      </div>

      {/* search bar */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search services by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* services grid */}
      <div className="grid">
        {services
          .filter((service) =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.category.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>

    </div>
  );
}

export default Services;