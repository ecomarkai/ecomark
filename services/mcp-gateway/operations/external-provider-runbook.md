# External provider incident runbook

1. Disable the provider or individual tool using the narrowest kill switch.
2. Stop new jobs and preserve audit, traces and affected run IDs.
3. Revoke tokens or rotate secret references when compromise is possible.
4. Identify affected tenants, data, costs and actions.
5. Notify security and compliance owners.
6. Recover through sandbox and canary before full activation.
7. Record root cause, remediation and prevention evidence.
