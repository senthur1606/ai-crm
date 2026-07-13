# AI CRM - HCP Interaction Module

## Overview

AI CRM is a web application designed to help Medical Representatives record and manage Healthcare Professional (HCP) interactions. The application provides AI-powered assistance to summarize conversations, suggest follow-up actions, retrieve previous interactions, and recommend the next best action.

## Features

- Dashboard with interaction statistics
- Log HCP interactions using a structured form
- Edit and delete interaction records
- View interaction history
- AI-powered interaction summary
- Previous HCP interaction retrieval
- Follow-up recommendation
- Next Best Action suggestion
- Loading indicator and Snackbar notifications

## Technology Stack

### Frontend
- React
- Material UI
- Axios
- React Router

### Backend
- Python
- FastAPI
- SQLAlchemy
- SQLite

### AI
- LangGraph
- Groq LLM

## Project Structure

```
ai-crm/
│
├── backend/
│   ├── ai/
│   ├── routers/
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/senthur1606/ai-crm.git
```

```bash
cd ai-crm
```

---

## Backend Setup

Move to backend folder.

```bash
cd backend
```

Create virtual environment.

```bash
python -m venv venv
```

Activate virtual environment.

### Windows

```bash
venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Create a `.env` file.

```env
GROQ_API_KEY=your_groq_api_key
```

Run backend.

```bash
python -m uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

Move to frontend folder.

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Run frontend.

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## AI Features

The application uses LangGraph with Groq LLM to provide:

- Interaction Summary
- Previous HCP Interactions
- Follow-up Recommendation
- Next Best Action

---

## CRUD Operations

- Create Interaction
- View Interaction History
- Update Interaction
- Delete Interaction

---

## Future Improvements

- Authentication
- Role-based access
- MySQL/PostgreSQL support
- Redux state management
- Export reports
- Advanced analytics

---

## Author

Senthur Pandian

GitHub:
https://github.com/senthur1606
