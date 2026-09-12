"""cro runtime boundary."""

class Agent:
    agent_id = "cro"

    async def plan(self, context):
        raise NotImplementedError("Implement domain planning and return a typed proposal")
