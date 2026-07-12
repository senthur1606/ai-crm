from sqlalchemy import Column, Integer, String
from database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String, index=True)
    hospital = Column(String)
    specialty = Column(String)
    product = Column(String)
    interaction_type = Column(String)
    date = Column(String)
    notes = Column(String)