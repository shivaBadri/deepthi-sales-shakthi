# Deepthi Sales Shakthi - Final Full Stack

This ZIP is built for the finalized reference design: lead generation + online training promotion + WhatsApp updates.

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Open: http://localhost:5173

## Run Backend
```bash
cd backend
npm install
npm run dev
```
API: http://localhost:5000

## Admin Dashboard
Open frontend route:
```
http://localhost:5173/admin
```
Leads submitted from forms are saved in `backend/data/leads.json`.

## Deploy
- Frontend: Vercel
- Backend: Render or Railway
- Add `VITE_API_URL=https://your-backend-url.com` in Vercel environment variables.

## Included
- Final responsive design
- Real uploaded webinar posters used as event assets
- Lead forms
- WhatsApp CTA links
- Admin leads view
- Backend API
- Mobile optimized layout
