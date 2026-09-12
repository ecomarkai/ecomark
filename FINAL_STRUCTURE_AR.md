# Ecomark — هيكل SaaS النهائي لهذه المرحلة

> **English precedence notice:** This Arabic architecture document is retained for historical context.
> English is authoritative for new and actively maintained engineering documentation.
> [docs/product/ROADMAP.md](docs/product/ROADMAP.md) is authoritative for current sequencing:
> Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis.
> After that MVP is stable, add Salla, Meta integrations, GA4 and other connectors, and then
> advanced MCP creative-provider workflows. Historical flows below do not override that order.

هذه النسخة تكمل النسخة السابقة. يحتفظ مجلد العمل المحلي باسم ecomark للتوافق مع المسارات القديمة،
لكن الملف النهائي عند فك الضغط يستخدم المجلد ecomark.
الاسم التجاري Ecomark. الملفات مواصفات وقوالب تطوير وليست منصة تعمل أو تكاملات متصلة.
لا يوجد حتى الآن إثبات تحميل 10,000 متجر، ولا تشغيل إنتاجي أو شهادة أمان.
ابدأ بـ FILE_INDEX.md لاستعراض كل الملفات الفعلية ثم IMPLEMENTATION_STATUS.md.

## تقسيم المسؤوليات
| المسار | المسؤولية |
| --- | --- |
| apps/web-dashboard | واجهة الشركة وTenant Admin |
| apps/admin-portal | Platform Super Admin وإدارة التشغيل |
| apps/developer-portal | توثيق API وMCP ومفاتيح الوصول |
| apps/mobile-app | حدود تطبيق موبايل مستقبلي |
| apps/browser-extension | حدود إضافة متصفح مستقبلية |
| services/control-plane | الشركات والمتاجر والإعدادات ودورة الاشتراك |
| services/billing | الاشتراكات والصلاحيات المدفوعة وعدادات الاستهلاك |
| services/identity | هوية المستخدم وعضوية الشركة والصلاحيات |
| services/mcp-gateway | الاتصال بخوادم MCP واكتشاف أدواتها وفحصها |
| mcp/external/custom | إضافة مزوّد متوافق من لوحة التحكم |
| mcp/bindings | ربط أدوات المزوّد بمهارات وAgents محددة |
| workflows/creative-experiment | دورة الفكرة والتوليد والاختبار والقياس |
| services/media-library | ملفات كل شركة وربط مزود التخزين |
| services/experiment | تحديد التجربة وقياس نتائجها |
| skills | مهارات Ecomark المخططة وليست مثبتة في ChatGPT |
| contracts | عقود البيانات والإجراءات المشتركة |
| security وoperations | متطلبات الأمان والأداء والتشغيل |

## ربط MCP عام
لوحة الشركة > Integrations > Add custom MCP > عنوان الخادم > المصادقة > Test connection >
اكتشاف الأدوات > اختيار الصلاحيات > ربط Agent > تحديد الميزانية > تفعيل.

المزوّد ليس محصورًا في Higgsfield. النقل والمصادقة يجب أن يكونا مدعومين؛ فحص التوافق
هو الذي يحدد إمكان الربط. أسماء أدوات المزوّد لا تُخمن، بل تُكتشف وتراجع ثم تربط بقدراتنا.
خوادم STDIO تحتاج عاملًا معزولًا وحزمة مراجعة؛ لا يُسمح بإدخال أمر shell من المتجر.

## مثالك: تجربة Creative جديدة
1. Creative Strategy Agent يقرأ هوية البراند والمنتج والمواد المسموحة.
2. يكتب فرضية وفكرة وBrief، ويحدد الشكل واللغة والمقاسات.
3. المستخدم يراجع تكلفة التوليد والملفات التي ستخرج للمزوّد.
4. بوابة MCP تنفذ الأداة المرتبطة في حساب Higgsfield بعد التحقق من الاتصال.
5. تحفظ معرّف المهمة وتتابع النتيجة؛ لا تكرر إنشاء مهمة مدفوعة عند ضياع الرد.
6. تستورد النتيجة وتفحصها وتحفظها في مكتبة الشركة.
7. المستخدم يوافق على Creative النهائية.
8. Media Buyer ينشئ تجربة وحملة موقوفة، ويطلب موافقة منفصلة على الإنفاق والنشر.
9. بعد التشغيل تُقاس النتيجة وفق مدة وعينة متفق عليهما؛ قد تكون غير حاسمة.
10. تُحفظ الفكرة والنسخة والإنفاق والنتيجة في Growth Memory.

## SaaS
شركة واحدة قد تمتلك عدة متاجر وأعضاء وأدوار. صلاحيات الاشتراك منفصلة عن صلاحيات المستخدم.
تحتاج المنصة onboarding ودعوات وخطط وتجربة مجانية وحدود استهلاك وفوترة وإلغاء وتصدير وحذف.
لوحة المنصة تدير الخدمات والعملاء والموافقات والحوادث دون عرض أسرارهم.
لوحة الشركة لا ترى إلا بيانات الشركة المصرح بها.

## تسلسل تنفيذي تاريخي غير معتمد حاليًا
ابدأ بمسار واحد كامل لشركة تجريبية: تسجيل وربط مزوّد واكتشاف أداة وتوليد مادة وحفظها.
ثم أضف الاشتراك والقياس والموافقات والاختبار الإعلاني. بقية المجلدات حدود مستقبلية؛
لا يلزم تشغيل كل service منفصلة. الأمان والسرعة يحتاجان تنفيذًا واختبارات قبل أي ادعاء إنتاجي.
