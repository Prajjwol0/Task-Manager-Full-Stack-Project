# Task Manager Full-Stack Project

> ⚠️ This project is for **personal practice** and **not yet complete**.

## Project Overview

This is a full-stack Task Manager application built with the MERN stack (MongoDB, Express.js, React + Vite, Node.js).  
Users can sign up, log in, and manage tasks. Each logged-in user should see only their own tasks.

## Current Features

- User Signup & Login using JWT tokens  
- Create, Read, Update, Delete (CRUD) tasks  
- Frontend fetches tasks from backend (`/getTasks`)  
- Basic layout using React components  
- Token storage in `localStorage`  
- Sign Out button to log out users

## Tech Stack

- **Frontend**: React, Vite, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via Mongoose)  
- **Authentication**: JSON Web Tokens (JWT)  
- **API requests**: Axios / custom `api` instance  

## Getting Started

1. Clone the repository:  
   ```bash
   git clone https://github.com/Prajjwol0/Task-Manager-Full-Stack-Project.git
   cd Task-Manager-Full-Stack-Project
2. Backend setup:
   cd backend
npm install

Create a .env file with:
PORT=4000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

3. Frontend setup:
   cd ../frontend
   npm install
   npm run dev

4. Run the full stack:
   Start backend: npm run dev
   Start frontend (in separate terminal): npm run dev
   Open your browser at http://localhost:5173 (or the port Vite uses)

## Usage
   On the browser, signup for a new user or login with existing credentials
   After logging in, you should be redirected to the Home page and see your task list
   Use the “Sign Out” button to log out
   Note: Tasks should belong to the logged-in user only — but that feature is being refined
