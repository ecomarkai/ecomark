"""media-buyer runtime boundary."""

class Agent:
    agent_id = "media-buyer"

    async def plan(self, context):
        raise NotImplementedError("Implement domain planning and return a typed proposal")
