from sqlalchemy.orm import Session
from models import Interaction

def create_interaction(db: Session, data):
    interaction = Interaction(
        hcp_name=data.hcp_name,
        hospital=data.hospital,
        specialty=data.specialty,
        product=data.product,
        interaction_type=data.interaction_type,
        date=data.date,
        notes=data.notes,
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction

def get_interactions(db):
    return db.query(Interaction).all()

def update_interaction(db, interaction_id, data):
    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()

    if interaction:
        interaction.hcp_name = data.hcp_name
        interaction.hospital = data.hospital
        interaction.specialty = data.specialty
        interaction.product = data.product
        interaction.interaction_type = data.interaction_type
        interaction.date = data.date
        interaction.notes = data.notes

        db.commit()
        db.refresh(interaction)

    return interaction

def delete_interaction(db, interaction_id):
    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()

    if interaction:
        db.delete(interaction)
        db.commit()

    return {"message": "Deleted Successfully"}