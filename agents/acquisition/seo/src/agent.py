"""seo runtime boundary."""

class Agent:
    agent_id = "seo"

    async def plan(self, context):
        raise NotImplementedError("Implement domain planning and return a typed proposal")
