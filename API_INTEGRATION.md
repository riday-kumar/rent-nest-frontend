# API Integration

This document lists all backend API endpoints consumed by the RentNest frontend application.

Base URL:
http://localhost:5000/

## Authentication

| Frontend Component | Method | Endpoint           | Purpose          |
| ------------------ | ------ | ------------------ | ---------------- |
| LoginForm          | POST   | /api/auth/login    | User Login       |
| RegisterForm       | POST   | /api/auth/register | Create Account   |
| Navbar             | GET    | /api/auth/me       | Get Current User |

---

## Properties (Public)

| Frontend Component | Method | Endpoint            | Purpose              |
| ------------------ | ------ | ------------------- | -------------------- |
| PropertyList       | GET    | /api/properties     | Get All Properties   |
| PropertyDetails    | GET    | /api/properties/:id | Get Property Details |

---

## Landlord(Dashboard)

| Frontend Component               | Method | Endpoint                   | Purpose                        |
| -------------------------------- | ------ | -------------------------- | ------------------------------ |
| AddPropertyForm                  | POST   | /api/properties            | Add New Property               |
| EditPropertyForm                 | PATCH  | /api/properties/:id        | Update Property                |
| DeleteButton                     | DELETE | /api/properties/:id        | Delete Property                |
| Rent Requests                    | GET    | /api/landlord/requests     | All Rent Requests              |
| Approve or Reject Request Button | PATCH  | /api/landlord/requests/:id | Approve or Reject Rent Request |

---

## Tenant(Dashboard)

| Frontend Component  | Method | Endpoint              | Purpose                 |
| ------------------- | ------ | --------------------- | ----------------------- |
| My Rent Requests    | GET    | /api/rentals/my-rents | Get All Rental Requests |
| Rent Request Button | POST   | /api/rentals          | Create a Rent Request   |
| Pay Button          | POST   | /api/payments/create  | Create Payment          |
| Review Form         | POST   | /api/reviews          | Create Review           |
| Payment History     | GET    | /api/payments         | Get All Payments        |

---

## Admin(Dashboard)

| Frontend Component   | Method | Endpoint             | Purpose                                      |
| -------------------- | ------ | -------------------- | -------------------------------------------- |
| Total Users          | GET    | /api/admin/users     | Get All Users                                |
| Status Action Button | PATCH  | /api/admin/users/:id | Admin Can Control User Status                |
| All Rent Requests    | GET    | /api/admin/rentals   | Admin Can See All Rent Requests              |
| Pending Request      | GET    | /api/admin/pending   | Admin Can See How many Rent Requests pending |

---

## Common Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
