from fastapi import APIRouter
from pydantic import BaseModel
from ai.graph import graph

router = APIRouter(prefix="/ai", tags=["AI"])

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(req: ChatRequest):
    result = graph.invoke({
        "user_input": req.message
    })

    return {
        "response": result["response"]
    }