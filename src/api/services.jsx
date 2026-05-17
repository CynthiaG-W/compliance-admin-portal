const BASE_URL = "https://compliance-api-3ssu.onrender.com/services";

// READ (GET)
export const getServices = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
};

// CREATE (POST)
export const createService = async (service) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(service),
  });

  if (!res.ok) throw new Error("Failed to create service");
  return res.json();
};

// UPDATE (PATCH)
export const updateService = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update service");
  return res.json();
};

// DELETE
export const deleteService = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete service");
  return true;
};