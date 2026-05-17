import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createService } from "../api/services";

function AddService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    status: "Active",
    turnaroundTime: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const newService = {
      ...formData,
      price: Number(formData.price),
    };

    createService(newService)
      .then(() => {
        alert("Service added successfully!");

        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          status: "Active",
          turnaroundTime: "",
        });

        navigate("/services");
      })
      .catch((err) => {
        console.error("Error adding service:", err);
        alert("Failed to add service");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="page">
      <div className="section">
        <h1>Add New Service</h1>

        {/* Grid form */}
        <form onSubmit={handleSubmit} className="form-grid">

          <input
            name="name"
            placeholder="Service name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category (e.g. KYC, AML)"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            name="turnaroundTime"
            placeholder="Turnaround Time (e.g. 5 min)"
            value={formData.turnaroundTime}
            onChange={handleChange}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
          </select>

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Service"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddService;