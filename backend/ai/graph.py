from langgraph.graph import StateGraph, END
from ai.state import AgentState
from ai.agent import ask_ai
from ai.tools import (
    get_hcp_history,
    schedule_followup,
    next_best_action,
)


def ai_node(state: AgentState):
 prompt = state["user_input"].lower()

 if "history" in prompt:
    return {
        "response": get_hcp_history.invoke({"hcp_name": "Dr. Kumar"})
    }

 if "follow" in prompt:
    return {
        "response": schedule_followup.invoke({"hcp_name": "Dr. Kumar"})
    }

 if ("next action" in prompt
     or "best action" in prompt
     or "recommendation" in prompt):
    return {
        "response": next_best_action.invoke({"hcp_name": "Dr. Kumar"})
    }

 return {
    "response": ask_ai(state["user_input"])
 }


builder = StateGraph(AgentState)

builder.add_node("ai_node", ai_node)

builder.set_entry_point("ai_node")

builder.add_edge("ai_node", END)

graph = builder.compile()