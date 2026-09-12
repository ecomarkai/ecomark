# ابدأ من هنا — Ecomark

> **English precedence notice:** This Arabic document is retained for historical onboarding context.
> English is authoritative for new and actively maintained engineering documentation.
> [docs/product/ROADMAP.md](docs/product/ROADMAP.md) is authoritative for current sequencing:
> Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis.
> After that MVP is stable, add Salla, Meta integrations, GA4 and other connectors, and then
> advanced MCP creative-provider workflows. The earlier sequence below is not current.

اقرأ `FINAL_STRUCTURE_AR.md` و`IMPLEMENTATION_STATUS.md` أولًا. يعرض `FILE_INDEX.md`
لقطة تاريخية لملفات الهيكل. هذه النسخة تتضمن مواصفات SaaS وCustom MCP وAgent Bindings
وتجربة Creative؛ وكلها تحتاج إلى تنفيذ واختبارات إنتاجية.

هذا المستودع هو الهيكل الهندسي الكامل لمنصة Ecomark، وليس تطبيقًا جاهزًا للإنتاج بعد.

## ترتيب تنفيذ تاريخي غير معتمد حاليًا

1. ابدأ بـ `apps/web-dashboard` و`services/control-plane` و`services/identity`.
2. نفّذ أول ثلاثة Connectors: Salla أو Shopify، Meta Ads، وGA4.
3. وحّد البيانات داخل `services/event-normalizer` و`services/commerce-graph`.
4. ابنِ المقاييس والربحية داخل `services/profit-engine`.
5. شغّل `analytics` و`media-buyer` و`pricing-promotion` بوضع الاقتراح فقط.
6. أضف الموافقات والسياسات والتدقيق قبل أي تنفيذ خارجي.
7. لا تفصل كل Service في Deployment مستقل من اليوم الأول؛ حافظ على حدود الكود ثم افصل عند وجود سبب قياس واضح.

## قاعدة أساسية

الـAgent لا يتصل مباشرة بـMeta أو Salla أو Shopify. يطلب Capability موحدة، وطبقة التنفيذ تختار
الـConnector المناسب، تطبق Policy، تطلب Approval عند الحاجة، ثم تسجل النتيجة في Audit Log.

## ما الذي يكوّن الملكية التقنية؟

- Commerce Graph موحد وقابل لإعادة البناء.
- Decision Engine يقيس نتيجة كل قرار.
- Growth Memory تحفظ التجارب والنتائج بصورة قانونية وآمنة.
- Capability Contracts تمنع الارتباط بمزود واحد.
- تقييمات موثقة لكل Agent.
- طبقة Governance للتصريح والموافقة والتدقيق والتراجع.
- بيانات مجهولة أو مجمعة عبر المتاجر فقط وفق العقود والموافقة.
