# ربط Google Ads

> **English precedence notice:** This Arabic connector guide is retained for historical onboarding
> context. Current English engineering standards and [docs/product/ROADMAP.md](../../../docs/product/ROADMAP.md)
> are authoritative. This guide does not move Google advertising work ahead of the Shopify-first MVP,
> Salla, Meta integrations, or the planned GA4 and other connector phase.

1. أنشئ أو استخدم Google Ads Manager Account.
2. اطلب Developer Token من API Center.
3. أنشئ OAuth Client في Google Cloud واضبط شاشة الموافقة وCallback URL.
4. من لوحة الشركة اضغط Connect Google Ads وسجّل الدخول ووافق على الصلاحيات.
5. خزّن Refresh Token مشفرًا لكل Tenant داخل Secrets Manager.
6. اختر الحسابات الإعلانية المسموحة وحدد Read-only أولًا.
7. شغّل اختبار الاتصال وHistorical Backfill ثم Incremental Sync.
8. فعّل أدوات التعديل فقط بعد Policy وApproval وAudit واختبار Sandbox.
9. MCP الداخلي يعرض Canonical Tools ولا يكشف Developer Token أو Refresh Token.

راجع دائمًا وثائق Google Ads API الرسمية لأن الإصدارات والسياسات تتغير.
