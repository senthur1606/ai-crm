from langchain_core.tools import tool

@tool
def log_interaction(interaction: str):
    """Log a new HCP interaction."""
    return f"✅ Interaction logged successfully.\n\n{interaction}"


@tool
def edit_interaction(interaction_id: str):
    """Edit an existing interaction."""
    return f"✏️ Interaction {interaction_id} updated successfully."


@tool
def get_hcp_history(hcp_name: str):
    """Retrieve previous interactions with an HCP."""
    return f"""
Previous Interactions with {hcp_name}

• 12 Jun - Discussed CardioX
• 25 Jun - Requested Product Brochure
• 05 Jul - Positive feedback received
"""


@tool
def schedule_followup(hcp_name: str):
    """Schedule a follow-up visit."""
    return f"📅 Follow-up scheduled for {hcp_name} next week."


@tool
def next_best_action(hcp_name: str):
    """Suggest the next best sales action."""
    return (
        f"🎯 Recommended action for {hcp_name}: "
        "Send product brochure and arrange a product demonstration."
    )