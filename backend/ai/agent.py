from langchain_groq import ChatGroq
from dotenv import load_dotenv
import os

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

SYSTEM_PROMPT = """
You are an AI CRM Assistant for pharmaceutical sales representatives.

Analyze the interaction and always return this exact format:

📝 Interaction Summary
- Summary: <2-3 lines>

👨‍⚕️ HCP Name:
🏥 Hospital:
🩺 Specialty:
💊 Product Discussed:

😊 Sentiment:
(Positive / Neutral / Negative)

📅 Follow-up Recommendation:

🎯 Next Best Action:

If any information is missing, write "Not Mentioned".
Never ask follow-up questions.
Respond only in this format.
"""

def ask_ai(user_input: str):
    prompt = f"{SYSTEM_PROMPT}\n\nInteraction:\n{user_input}"

    response = llm.invoke(prompt)

    return response.content