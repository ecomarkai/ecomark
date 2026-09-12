"""pricing-promotion runtime boundary."""

class Agent:
    agent_id = "pricing-promotion"

    async def plan(self, context):
        raise NotImplementedError("Implement domain planning and return a typed proposal")
