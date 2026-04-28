# USA Plumbing Service - MERN App

Production-oriented MERN starter for a local plumbing services website with separate frontend and backend projects.

## Stack
- Frontend: React (Vite), Tailwind CSS, React Router, React Hook Form, Zod, Helmet
- Backend: Node.js, Express, Mongoose, Helmet, CORS, express-validator

## Project Structure
- `frontend/` SEO-focused React app with lazy-loaded sections and skeleton fallbacks
- `backend/` REST API for contact requests with validation and MongoDB persistence

## Local Setup
1. Install dependencies:
   - `cd frontend && npm install`
   - `cd ../backend && npm install`
2. Create env files:
   - `frontend/.env` from `frontend/.env.example`
   - `backend/.env` from `backend/.env.example`
3. Run apps in separate terminals:
   - Frontend: `cd frontend && npm run dev`
   - Backend: `cd backend && npm run dev`

## API
- `GET /api/health` - health check
- `POST /api/contact` - submit contact form
