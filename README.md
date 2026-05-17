# Compliance Admin Portal

A React-based admin dashboard for managing compliance services such as AML screening, identity verification, KYB checks, and background screening across Africa.

This project uses a simulated backend with JSON Server to perform full CRUD operations.

---

## 🚀 Features

- View compliance services
- Add new services
- Edit service price (PATCH)
- Delete services
- Live search filtering
- Client-side routing
- Responsive admin dashboard UI
- Unit testing with Vitest

---

## 🛠️ Tech Stack

- React (Vite)
- React Router DOM
- JSON Server (mock backend)
- CSS
- Vitest (testing)
- React Testing Library

---

## 📁 Project Structure
src/
├── components/
├── pages/
├── hooks/
├── api/
├── tests/


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/compliance-admin-portal.git

2. Install dependencies
npm install

3. Start JSON server (backend)
npm run server
Backend runs at:
http://localhost:5173


📦 API Endpoints
| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /services     | Get all services |
| POST   | /services     | Add new service  |
| PATCH  | /services/:id | Update a service |
| DELETE | /services/:id | Delete a service |

🧪 Testing

Run tests with:npx vitest
Tests include:

Component rendering
Page rendering
Basic UI checks

🎯 Project Purpose

This project demonstrates:

React state management
CRUD operations
API integration
Component-based architecture
Client-side routing
Testing fundamentals

👨‍💻 Author

Developed as a React summative project for learning full-stack frontend concepts.

📌 Notes
Uses JSON Server as a fake backend
Data resets if db.json is overwritten or reset