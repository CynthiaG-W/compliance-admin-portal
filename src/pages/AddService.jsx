import { useState } from "react";
import { createService } from "../api/services";

function AddService() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    status: "Active",
    turnaroundTime: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newService = {
      ...formData,
      price: Number(formData.price),
    };

    createService(newService).then(() => {
      alert("Service added!");

      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        status: "Active",
        turnaroundTime: "",
      });
    });
  }

  return (
    <div className="page">

      <div className="section">
        <h1>Add New Service</h1>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div style={{ marginBottom: "12px" }}>
            <input
              name="name"
              placeholder="Service name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* DESCRIPTION */}
          <div style={{ marginBottom: "12px" }}>
            <input
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* CATEGORY */}
          <div style={{ marginBottom: "12px" }}>
            <input
              name="category"
              placeholder="Category (e.g. KYC, AML)"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          {/* PRICE */}
          <div style={{ marginBottom: "12px" }}>
            <input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          {/* TURNAROUND TIME */}
          <div style={{ marginBottom: "12px" }}>
            <input
              name="turnaroundTime"
              placeholder="Turnaround Time (e.g. 5 min)"
              value={formData.turnaroundTime}
              onChange={handleChange}
            />
          </div>

          {/* STATUS */}
          <div style={{ marginBottom: "18px" }}>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" style={{ marginTop: "10px" }}>
            Add Service
          </button>

        </form>
      </div>

    </div>
  );
}

export default AddService;