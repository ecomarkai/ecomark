"""creative-strategy runtime boundary."""

class Agent:
    agent_id = "creative-strategy"

    async def plan(self, context):
        raise NotImplementedError("Implement domain planning and return a typed proposal")
