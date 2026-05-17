import { deleteService, updateService } from "../api/services";

function ServiceCard({ service }) {

  // DELETE service
  function handleDelete() {
    deleteService(service.id).then(() => {
      window.location.reload();
    });
  }

  // UPDATE (PATCH) service price
  function handleEditPrice() {
    const newPrice = prompt("Enter new price:");

    if (!newPrice || isNaN(newPrice)) return;

    updateService(service.id, {
      price: Number(newPrice),
    }).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="card">

      <h3>{service.name}</h3>

      <p>{service.description}</p>

      <p>
        <strong>Category:</strong> {service.category}
      </p>

      {/* STATUS BADGE */}
      <p>
        <strong>Status:</strong>{" "}
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            color: "white",
            backgroundColor:
              service.status === "Active"
                ? "#16a34a"
                : service.status === "Pending"
                ? "#f59e0b"
                : "#ef4444",
          }}
        >
          {service.status}
        </span>
      </p>

      <p>
        <strong>Price:</strong> ${service.price}
      </p>

      <p>
        <strong>Turnaround:</strong> {service.turnaroundTime}
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleEditPrice}>
          Edit Price
        </button>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>

    </div>
  );
}

export default ServiceCard;