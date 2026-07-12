from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas import InteractionCreate
from crud import (create_interaction, get_interactions,update_interaction,delete_interaction)

router = APIRouter(prefix="/interactions", tags=["Interactions"])

@router.post("/")
def add_interaction(data: InteractionCreate, db: Session = Depends(get_db)):
    return create_interaction(db, data)

@router.get("/")
def list_interactions(db: Session = Depends(get_db)):
    return get_interactions(db)

@router.put("/{interaction_id}")
def edit_interaction(
    interaction_id: int,
    data: InteractionCreate,
    db: Session = Depends(get_db),
):
    return update_interaction(db, interaction_id, data)

@router.delete("/{interaction_id}")
def remove_interaction(
    interaction_id: int,
    db: Session = Depends(get_db),
):
    return delete_interaction(db, interaction_id)