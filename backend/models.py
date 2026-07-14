from sqlalchemy import Column, Integer, String
from database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String(100), index=True)
    hospital = Column(String(150))
    specialty = Column(String(100))
    product = Column(String(100))
    interaction_type = Column(String(50))
    date = Column(String(20))
    notes = Column(String(1000))