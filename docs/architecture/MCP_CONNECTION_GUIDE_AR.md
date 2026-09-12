# دليل ربط Ecomark بـMCP و ومزودي الأدوات

> **English precedence notice:** This Arabic guide is retained for historical onboarding context.
> Current English engineering standards are authoritative. For implementation sequencing, follow
> [docs/product/ROADMAP.md](../product/ROADMAP.md). Advanced MCP creative-provider workflows begin
> only after the Shopify-first MVP, Salla, Meta integrations, and GA4 and other connector expansion.

## المبدأ

Ecomark يعمل كـMCP Client عند الاتصال بمزوّد خارجي، وكـMCP Server عندما يتيح قدراته
لتطبيقات الذكاء الاصطناعي. كل اتصال يمر عبر MCP Gateway ولا يصل مباشرة إلى Agents أو قواعد البيانات.

## المسار الأول: Remote MCP مثل Higgsfield

1. افتح Platform Admin أو Tenant Admin ثم Integrations ثم MCP Connections.
2. اختر Verified Provider Preset مثل Higgsfield.
3. نفّذ تسجيل الدخول لدى المزوّد؛ لا تدخل كلمات المرور داخل Ecomark.
4. يستقبل Ecomark التوكن داخل Tenant Secrets Vault.
5. يكتشف MCP Gateway الأدوات ويضعها في Quarantine.
6. يفحص Schema والصلاحيات والتكلفة وخطورة كل Tool.
7. يختار Admin الأدوات المسموحة ويحدد الميزانية والسرعة وعدد العمليات المتزامنة.
8. ينفذ Sandbox Test بملف غير حساس.
9. بعد الموافقة ينتقل الاتصال إلى Active وتبدأ مراقبة الصحة والتكلفة وتغيّر الأدوات.
10. أي صورة أو فيديو ناتج يُستورد إلى Media Library الخاصة بالشركة ويُفحص قبل استخدامه.

لا يُكتب MCP Endpoint في الكود. يأتي من Verified Preset أو إعداد موثوق حتى يمكن تغييره بدون إصدار جديد.

## المسار الثاني: API-to-MCP Bridge مثل Google Ads

Google Ads API هو مصدر التنفيذ. Google Ads Connector ينفذ OAuth والمزامنة والاستعلامات والتعديلات.
بعد ذلك يعرض Ecomark أدوات Canonical من خلال MCP Bridge الداخلي.

مثال:

- ads.performance.read
- ads.campaigns.read
- ads.budget.propose
- ads.budget.update
- ads.campaign.pause

أدوات القراءة يمكن تفعيلها أولًا. أدوات التعديل تكون Disabled افتراضيًا وتتطلب Policy وApproval
وIdempotency وVerification وAudit. بهذه الطريقة لا يمتلك الـAgent Developer Token أو Refresh Token.

## حالات الاتصال

Draft -> Authenticating -> Discovering -> Quarantined -> Testing -> Approval -> Active.

يمكن أن ينتقل إلى Degraded أو Suspended أو Revoked. اكتشاف Tool جديد أو تغير Schema لا يفعله تلقائيًا؛
يعود إلى Quarantine للمراجعة.

## الأمان

- TLS واتصال خارجي عبر Egress Proxy وDomain Allowlist.
- OAuth 2.1 وPKCE للمستخدمين وWorkload Identity للخدمات الداخلية.
- Secrets Manager منفصل ومشفر مع تدوير المفاتيح.
- ربط كل Credential بـtenant_id وprovider_id وصلاحيات محدودة.
- Tool Allowlist وJSON Schema Validation وتصنيف Read وWrite وFinancial وDestructive.
- حماية من Prompt Injection وتسريب البيانات وSSRF وإرسال ملفات غير مصرح بها.
- موافقة بشرية وStep-up Authentication للإجراءات الحساسة.
- Audit Log غير قابل للتعديل وKill Switch عالمي ولكل Tenant وProvider وTool.
- انتهاء Tokens وإلغاؤها وحذفها عند Disconnect.
- لا يوجد وصول مباشر من Admin UI أو Agent إلى قاعدة بيانات أو Vendor Secret.

## السرعة والاعتمادية

- Connection Pooling وKeep-alive لاتصالات MCP وAPIs.
- Cache قصير للقراءات مع Data Freshness ظاهر.
- Batch Queries وIncremental Sync بدل إعادة تحميل كل البيانات.
- Queues مستقلة للقراءة والتعديل والملفات الكبيرة.
- Async Jobs لإنشاء الصور والفيديو وتعديلات الإعلانات.
- Distributed Rate Limiting لكل Tenant وProvider.
- Timeouts وCircuit Breakers وExponential Backoff.
- Idempotency Keys ومنع التكرار وDead-letter Queue.
- Webhooks لإكمال Jobs بدل Polling عندما يدعم المزوّد ذلك.
- مراقبة Latency وError Rate وQueue Lag وCost لكل Tool.

## لوحة التحكم

### Platform Super Admin

تدير الشركات والمتاجر والمستخدمين وRBAC والتكاملات وMCP وAPI وAgents وSkills وAutomations
والملفات والموديلات والتكاليف والفوترة والموافقات وAudit والأمان وCompliance وصحة الخدمات
والـQueues والـFeature Flags والحوادث والـKill Switches.

### Tenant Admin

يدير فقط شركته: الفريق والصلاحيات، المتاجر، حسابات الإعلانات، MCP وAPI، Agents وSkills،
Automations، Media Library، الموافقات، الاستخدام، الفواتير، وسجل شركته.

اللوحتان تستخدمان Admin Gateway لإرسال Commands إلى الخدمة المالكة للبيانات. لا توجد شاشة تستطيع
تعديل قواعد بيانات الخدمات مباشرة.

## المصادر الرسمية المرجعية

- Google Ads API OAuth: https://developers.google.com/google-ads/api/docs/oauth/overview
- Google Ads API Developer Token: https://developers.google.com/google-ads/api/docs/api-policy/developer-token
- Higgsfield MCP: https://higgsfield.ai/mcp
