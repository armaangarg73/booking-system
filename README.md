# booking-system
#  Book My Ticket

A full-stack movie seat booking application with authentication, real-time seat availability, and a modern UI.

---

## Features

* User Authentication (Register/Login with JWT)
* Book a seat (one seat per user)
* Prevent double booking
* Real-time seat availability
* View your booked seat
* Premium UI with animations & modals
* Fast and responsive frontend

---

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* JWT (Authentication)
* bcrypt (Password hashing)

### Frontend

* HTML, CSS (Tailwind + custom styling)
* Vanilla JavaScript

---

## Project Structure

```
book-my-ticket/
│
├── src/
│   ├── config/        # Database connection
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth middleware
│   ├── routes/        # API routes
│   ├── app.js
│   └── server.js
│
├── database/
│   └── schema.sql     # DB schema
│
├── index.html         # Frontend UI
├── .env               # Environment variables (not committed)
├── package.json
└── README.md
```

---

## Setup Instructions

### 1 Clone the repository

```
git clone https://github.com/your-username/booking-system.git
cd booking-system
```

---

### 2 Install dependencie
```
npm install
```

---

### 3️Setup environment variables

Create a `.env` file:

```
JWT_SECRET=your_secret_key
```

---

### 4️Setup PostgreSQL

Run `schema.sql` in your database:

```
database/schema.sql
```

---

### 5️Start the server

```
npm run dev
```

---

### 6️Open in browser

```
http://localhost:8080
```

---

## API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Seats

* `GET /seats`

### Booking

* `PUT /bookings/:id`
* `GET /bookings/me`

---

## How to Use

1. Register a new user
2. Login
3. Select a seat
4. Confirm booking
5. Seat gets locked

--
## Rules

* One user can book only one seat
* A seat can only be booked once

---

## Future Improvements

*  Multiple seat booking
* Payment integration
* Admin dashboard
*  Deployment (Render/Vercel)

---

##  Author

Armaan Garg


