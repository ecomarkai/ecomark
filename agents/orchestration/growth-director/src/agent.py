"""growth-director runtime boundary."""

class Agent:
    agent_id = "growth-director"

    async def plan(self, context):
        raise NotImplementedError("Implement domain planning and return a typed proposal")
