from pydantic import BaseModel

class InteractionCreate(BaseModel):
    hcp_name: str
    hospital: str
    specialty: str
    product: str
    interaction_type: str
    date: str
    notes: str