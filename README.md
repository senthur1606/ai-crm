# AI CRM - HCP Interaction Module

## Overview

AI CRM is a web application developed to help Medical Representatives manage Healthcare Professional (HCP) interactions. The application allows users to log interactions through a structured form and provides AI-powered assistance using LangGraph and Groq LLM.

## Features

- Dashboard with interaction statistics
- Log HCP interactions
- Edit existing interactions
- Delete interactions
- View interaction history
- AI-powered interaction summary
- Previous HCP interaction retrieval
- Follow-up recommendation
- Next Best Action suggestion
- Snackbar notifications
- Loading indicator during AI response

---

## Tech Stack

### Frontend

- React
- Redux Toolkit
- Vite
- Material UI
- Axios
- React Router DOM

### Backend

- Python
- FastAPI
- SQLAlchemy
- MySQL
- Uvicorn

### AI

- LangGraph
- Groq LLM (gemma2-9b-it)

---

## Project Structure

```
ai-crm/
│
├── backend/
│   ├── ai/
│   ├── routers/
│   ├── crud.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/senthur1606/ai-crm.git
cd ai-crm
```

---

## Backend Setup

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

Create MySQL database.

```sql
CREATE DATABASE ai_crm;
```

Update the database connection in `database.py`.

```python
DATABASE_URL = "mysql+pymysql://root:your_password@localhost/ai_crm"
```

Run the backend.

```bash
python -m uvicorn main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

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

Frontend:

```
http://localhost:5173
```

---

## AI Features

The LangGraph agent provides:

- Log Interaction
- Edit Interaction
- Interaction Summary
- Previous HCP Interaction History
- Follow-up Recommendation
- Next Best Action Suggestion

---

## CRUD Operations

- Create Interaction
- Read Interaction History
- Update Interaction
- Delete Interaction

---

## AI Workflow

```
User
  │
  ▼
React + Redux
  │
  ▼
FastAPI
  │
  ▼
LangGraph
  │
  ▼
Groq LLM
  │
  ▼
MySQL
  │
  ▼
Response to UI
```

---

## Future Improvements

- User Authentication
- Role-Based Access
- Dashboard Analytics
- Export Reports
- Email Notifications

---

## Author

**Senthur Pandian**

GitHub: https://github.com/senthur1606