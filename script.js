/* ==========================================================================
   UCC Maharashtra — Multilingual Questionnaire (Urdu / English / Hindi)
   script.js — data + rendering + search + copy (vanilla JS, safe DOM methods)
   ========================================================================== */
"use strict";

/* ---------------------------------------------------------------------------
   URDU QUESTIONNAIRE (RTL)
--------------------------------------------------------------------------- */
const URDU = {
  code: "ur",
  dir: "rtl",
  qLabel: "سوال",
  aLabel: "جواب:",
  aLabelWritten: "مجوزہ جواب:",
  part1: "حصہ اول: معروضی سوالات کے جوابات",
  part1Note: "سوالات 1 تا 31",
  part2: "حصہ دوم: فارم کے تحریری سوالات کے جوابات",
  part2Note: "سوالات 32 تا 37",
  title: "مہاراشٹر یکساں سول کوڈ کمیٹی کے انفرادی فارم کے جوابات",
  subtitle: "بحیثیت مسلمان، اسلامی پرسنل لا کے تحفظ اور آئینی حقوق کے تناظر میں",
  searchLabel: "تلاش کریں",
  searchPlaceholder: "سوال نمبر، سوال یا جواب کے مطابق تلاش کریں…",
  clearBtn: "صاف کریں",
  noResults: "کوئی سوال نہیں ملا۔ براہِ کرم کوئی اور لفظ آزمائیں۔",
  copyBtn: "جواب کاپی کریں",
  copied: "کاپی ہو گئی!",
  copyFail: "کاپی ناکام رہی، براہِ کرم دوبارہ کوشش کریں۔",
  questions: [
    { q: "کیا آپ اس وقت مہاراشٹر میں یکساں سول کوڈ نافذ کرنے کی حمایت کرتے ہیں؟", a: "NO" },
    { q: "کیا یکساں سول کوڈ مذہبی آزادی کے حق کی خلاف ورزی کیے بغیر نافذ کیا جا سکتا ہے؟", a: "NO" },
    { q: "کیا یکساں سول کوڈ قانونی تنازعات کو کم کرکے عدالتی کارروائی کو زیادہ مؤثر بنا سکتا ہے؟", a: "NO" },
    { q: "کیا شادی، طلاق اور دیگر خاندانی معاملات کے لیے تمام مذاہب پر ایک ہی قانون لاگو ہونا چاہیے؟", a: "NO" },
    { q: "کیا شادی، طلاق اور لِو اِن ریلیشن شپ وغیرہ کے اندراج کے لیے مشترکہ نظام ہونا چاہیے؟", a: "No" },
    { q: "شادی کی کم از کم عمر کیا ہونی چاہیے؟", a: "موجودہ قابلِ اطلاع قانون کے مطابق قانونی کم از کم عمر کی پابندی ہونی چاہیے۔" },
    { q: "کیا کسی شخص کو پہلے سے شادی شدہ ہونے کے باوجود دوسری شادی کی اجازت ہونی چاہیے؟", a: "YES" },
    { q: "کیا روایتی رسوم اور مذہبی طریقوں سے شادی کرنے کی اجازت برقرار رہنی چاہیے؟", a: "YES" },
    { q: "کیا تمام مذاہب کے لیے ممنوعہ رشتوں کی ایک ہی فہرست ہونی چاہیے؟", a: "NO" },
    { q: "کیا تمام مذاہب کے لیے طلاق کی وجوہات اور طریقۂ کار یکساں ہونا چاہیے؟", a: "NO" },
    { q: "کیا مردوں اور خواتین کے لیے طلاق کی وجوہات یکساں ہونی چاہییں؟", a: "NO COMMENT" },
    { q: "کیا غیر عدالتی طلاق کے تمام طریقوں پر پابندی لگائی جانی چاہیے؟", a: "NO" },
    { q: "کیا تمام مذاہب میں مردوں اور خواتین کو وراثت کے یکساں حقوق ملنے چاہییں؟", a: "NO" },
    { q: "کیا وصیت کے بغیر وراثت کی تقسیم کے لیے تمام مذاہب میں یکساں قانون ہونا چاہیے؟", a: "NO" },
    { q: "کیا ہر شخص کو وصیت کے ذریعے اپنی پوری جائیداد اپنی مرضی سے منتقل کرنے کی آزادی ہونی چاہیے؟", a: "NO" },
    { q: "کیا تمام بچوں کو ان کے والدین کی ازدواجی حیثیت سے قطع نظر یکساں وراثتی حقوق ملنے چاہییں؟", a: "No Comment" },
    { q: "کیا لِو اِن ریلیشن شپ کے معاملات کو یکساں سول کوڈ کے تحت منظم کیا جانا چاہیے؟", a: "NO" },
    { q: "کیا لِو اِن ریلیشن شپ کا اندراج لازمی ہونا چاہیے؟", a: "NO" },
    { q: "کیا لِو اِن ریلیشن شپ ختم ہونے پر اس کے خاتمے کا اندراج لازمی ہونا چاہیے؟", a: "NO" },
    { q: "کیا لِو اِن ریلیشن شپ میں خواتین کو کفالت اور وراثت کے حقوق ملنے چاہییں؟", a: "No Comment" },
    { q: "کیا لِو اِن ریلیشن شپ سے پیدا ہونے والے بچوں کو وراثت کے حقوق ملنے چاہییں؟", a: "No Comment" },
    { q: "کیا ایسے بچوں کو والدین سے نگہداشت اور کفالت حاصل کرنے کا حق ہونا چاہیے؟", a: "No Comment" },
    { q: "کیا تمام بچوں کی کفالت کے لیے ایک یکساں قانون ہونا چاہیے؟", a: "No Comment" },
    { q: "کیا بچوں کی تحویل کے معاملات میں ان کی فلاح و بہبود کو اولین اہمیت دی جانی چاہیے؟", a: "YES" },
    { q: "کیا ازدواجی تنازعات سے متعلق پیچیدہ قوانین لوگوں کو شادی کے بجائے لِو اِن ریلیشن شپ کی طرف مائل کرتے ہیں؟", a: "NO COMMENT" },
    { q: "کیا لِو اِن ریلیشن شپ میں شامل مرد اور خواتین کے حقوق کے تحفظ کے لیے قانون ہونا چاہیے؟", a: "No Comment" },
    { q: "کیا کسی لِو اِن ریلیشن شپ میں داخل ہونے کے وقت اندراج لازمی ہونا چاہیے؟", a: "No Comment" },
    { q: "کیا لِو اِن ریلیشن شپ ختم ہونے پر لازمی اندراج ہونا چاہیے؟", a: "No Comment" },
    { q: "کیا لِو اِن ریلیشن شپ میں خواتین کو بے دخل کیے جانے کی صورت میں کفالت اور دیگر حقوق کا تحفظ ملنا چاہیے؟", a: "No Comment" },
    { q: "کیا لِو اِن ریلیشن شپ سے پیدا ہونے والے بچوں کو وراثت کے حقوق حاصل ہونے چاہییں؟", a: "No Comment" },
    { q: "کیا ایسے بچوں کو والدین کی طرف سے نگہداشت اور کفالت حاصل کرنے کا حق ہونا چاہیے؟", a: "No Comment" },
    { q: "یکساں سول کوڈ میں کن امور کو شامل کیا جانا چاہیے؟", a: "آئینِ ہند کے آرٹیکل 44 میں یکساں سول کوڈ کے حصول کی گنجائش کا مطلب ہرگز یہ نہیں کہ اسے بلا ضرورت نافذ کیا جائے۔ مہاراشٹر میں اس کی کوئی واضح سماجی یا قانونی ضرورت ثابت کیے بغیر اسے نافذ کرنا مناسب نہیں۔ آئین کے رہنما اصولوں میں شراب بندی (آرٹیکل 47)، صحتِ عامہ کی بہتری اور دیگر فلاحی امور سے متعلق ہدایات بھی موجود ہیں۔ ریاست کو چاہیے کہ ان مقاصد کے حصول، عوامی صحت کے تحفظ اور سماجی مسائل کے حل کے لیے مؤثر اقدامات کرے۔ مسلمانوں کے مذہبی حقوق اور مسلم پرسنل لا کا احترام کرتے ہوئے خواتین اور بچوں کے حقوق کا تحفظ یقینی بنایا جائے اور کسی بھی قانون سازی سے پہلے تمام متعلقہ فریقوں سے بامعنی مشاورت کی جائے۔" },
    { q: "ذاتی اور خاندانی قوانین کے معاملات میں آپ کو کن مسائل کا سامنا کرنا پڑا ہے؟", a: "انسانی سماج میں مختلف مسائل کا پیدا ہونا فطری بات ہے۔ لیکن اس کے حل کے لیے پہلے سے موجود مذہبی اصول و رہنمائی کی سمجھ اور اس کا نفاذ مسئلے کے حل کے لیے کافی ہیں۔ پرسنل لاء کے ذریعے تنازعات حل کیے جاسکتے ہیں۔" },
    { q: "خاندانی قوانین کے کون سے پہلو خواتین کے لیے غیر منصفانہ ہیں؟ ان کے حل کے لیے کیا تجاویز ہیں؟", a: "خواتین کو وراثت سے محروم کرنا، مہر کی ادائیگی میں ٹال مٹول، نفقہ کے معاملات میں غیر ضروری تاخیر اور خاندانی تنازعات میں قانونی امداد کی کمی قابلِ توجہ مسائل ہیں۔ ان کے حل کے لیے موجودہ قوانین کا مؤثر نفاذ، مفت قانونی امداد، وراثتی حقوق کے بارے میں بیداری اور شکایات کے فوری ازالے کا نظام قائم کیا جائے۔ اصلاحات کے نام پر مذہبی آزادی ختم کرنے کے بجائے حقوق کے نفاذ اور انصاف کی فراہمی کو یقینی بنایا جائے۔" },
    { q: "زرعی زمین اور آبائی مکان کی وراثت کے لیے کیا الگ اصول ہونے چاہییں؟", a: "زرعی زمین، آبائی مکان اور دیگر جائیداد کی وراثت میں متعلقہ قوانین، زمین کی نوعیت اور جائز وارثوں کے حقوق کو مدنظر رکھا جائے۔ مسلمانوں کے لیے وراثت کے تسلیم شدہ شرعی اصولوں کا احترام کیا جائے۔ کسی خاتون یا دوسرے وارث کو دباؤ، دھوکا دہی یا غلط ریکارڈ کے ذریعے اس کے جائز حصے سے محروم نہ کیا جائے۔ جائیداد کے ریکارڈ کی درستگی، شفاف تقسیم اور آسان قانونی چارہ جوئی کے مؤثر انتظامات کیے جائیں۔" },
    { q: "کیا موجودہ خاندانی قوانین میں کسی تبدیلی یا اصلاح کی ضرورت ہے؟", a: "نہیں۔ خاندانی قوانین میں اصلاحات کا مقصد انصاف کی فراہمی، خواتین اور بچوں کے حقوق کا تحفظ، قانونی تنازعات میں کمی اور عدالتی کارروائی کو مؤثر بنانا ہونا چاہیے۔ اصلاحات کے لیے تمام مذہبی برادریوں سے مشاورت کی جائے اور مسلمانوں کے تسلیم شدہ پرسنل لا کے اصولوں اور آئینی مذہبی آزادی کا احترام کیا جائے۔ خواتین کو وراثت سے محروم کرنے، نفقہ کی ادائیگی میں غفلت اور قانونی چارہ جوئی میں غیر ضروری تاخیر جیسے عملی مسائل کے حل کو ترجیح دی جائے۔" },
    { q: "یکساں سول کوڈ کے بارے میں آپ کی دیگر تجاویز کیا ہیں؟", a: "مہاراشٹر میں یکساں سول کوڈ سے متعلق کسی بھی فیصلے سے قبل اس کے آئینی، قانونی، مذہبی اور سماجی اثرات کا تفصیلی جائزہ لیا جائے۔ تمام مذہبی برادریوں، خواتین کی تنظیموں، قانونی ماہرین اور شہریوں سے بامعنی مشاورت کی جائے۔ کسی بھی قانون کے نفاذ میں مذہبی آزادی، مساوات، انصاف اور بنیادی حقوق کا تحفظ یقینی بنایا جائے۔ مسلم پرسنل لا سے متعلق معاملات میں متعلقہ مذہبی اصولوں اور قانونی حقوق کو نظرانداز نہ کیا جائے۔ خواتین اور بچوں کے حقوق کے مؤثر تحفظ کے لیے موجودہ قوانین پر عمل درآمد بہتر بنایا جائے۔" }
  ]
};

/* ---------------------------------------------------------------------------
   ENGLISH QUESTIONNAIRE (LTR)
--------------------------------------------------------------------------- */
const ENGLISH = {
  code: "en",
  dir: "ltr",
  qLabel: "Question",
  aLabel: "Answer:",
  aLabelWritten: "Proposed Response:",
  part1: "Part I: Responses to Objective Questions",
  part1Note: "Questions 1 to 31",
  part2: "Part II: Responses to the Written Questions",
  part2Note: "Questions 32 to 37",
  title: "Individual Questionnaire Responses for the Maharashtra Uniform Civil Code Committee",
  subtitle: "From the Perspective of a Muslim Citizen: Protection of Islamic Personal Law and Constitutional Rights",
  searchLabel: "Search",
  searchPlaceholder: "Search by question number, question or answer…",
  clearBtn: "Clear",
  noResults: "No matching questions found. Please try a different word.",
  copyBtn: "Copy Answer",
  copied: "Copied!",
  copyFail: "Copy failed, please try again.",
  questions: [
    { q: "Do you currently support the implementation of a Uniform Civil Code in Maharashtra?", a: "NO" },
    { q: "Can a Uniform Civil Code be implemented without violating the right to religious freedom?", a: "NO" },
    { q: "Can a Uniform Civil Code reduce legal disputes and make judicial proceedings more effective?", a: "NO" },
    { q: "Should the same law apply to all religions in matters of marriage, divorce and other family affairs?", a: "NO" },
    { q: "Should there be a common registration system for marriage, divorce, live-in relationships and related matters?", a: "NO" },
    { q: "What should be the minimum legal age for marriage?", a: "The legally prescribed minimum age under the applicable law should be strictly followed." },
    { q: "Should a person be permitted to enter into a second marriage while already married?", a: "YES" },
    { q: "Should the freedom to solemnise marriages according to traditional customs and religious practices be retained?", a: "YES" },
    { q: "Should there be a uniform list of prohibited relationships for all religions?", a: "NO" },
    { q: "Should the grounds and procedures for divorce be uniform across all religions?", a: "NO" },
    { q: "Should the grounds for divorce be the same for men and women?", a: "NO COMMENT" },
    { q: "Should all forms of non-judicial divorce be prohibited?", a: "NO" },
    { q: "Should men and women have equal inheritance rights across all religions?", a: "NO" },
    { q: "Should there be a uniform law of intestate succession, that is, inheritance in the absence of a will, for all religions?", a: "NO" },
    { q: "Should every person have the freedom to transfer their entire property according to their wishes through a will?", a: "NO" },
    { q: "Should all children have equal inheritance rights irrespective of the marital status of their parents?", a: "NO COMMENT" },
    { q: "Should matters relating to live-in relationships be regulated under a Uniform Civil Code?", a: "NO" },
    { q: "Should the registration of live-in relationships be compulsory?", a: "NO" },
    { q: "Should the termination of a live-in relationship be compulsorily registered?", a: "NO" },
    { q: "Should women in live-in relationships have maintenance and inheritance rights?", a: "NO COMMENT" },
    { q: "Should children born out of live-in relationships have inheritance rights?", a: "NO COMMENT" },
    { q: "Should such children have the right to care and maintenance from their parents?", a: "NO COMMENT" },
    { q: "Should there be a uniform law governing the maintenance of all children?", a: "NO COMMENT" },
    { q: "Should the welfare of children be given the highest priority in child custody matters?", a: "YES" },
    { q: "Do complex laws relating to marital disputes encourage people to choose live-in relationships instead of marriage?", a: "NO COMMENT" },
    { q: "Should there be a law to protect the rights of men and women involved in live-in relationships?", a: "NO COMMENT" },
    { q: "Should registration be compulsory when entering into a live-in relationship?", a: "NO COMMENT" },
    { q: "Should registration be compulsory when a live-in relationship ends?", a: "NO COMMENT" },
    { q: "Should women be protected through maintenance and other legal rights if they are evicted from a live-in relationship?", a: "NO COMMENT" },
    { q: "Should children born out of live-in relationships have inheritance rights?", a: "NO COMMENT" },
    { q: "Should such children have the right to care and maintenance from their parents?", a: "NO COMMENT" },
    { q: "What matters should be included in a Uniform Civil Code?", a: "Article 44 of the Constitution of India provides for efforts towards securing a Uniform Civil Code. However, this does not mean that such a code should be implemented without establishing a genuine need for it. Implementing a Uniform Civil Code in Maharashtra without demonstrating a clear social or legal necessity would not be appropriate.\n\nThe Directive Principles of State Policy also contain provisions relating to prohibition of intoxicating drinks under Article 47, improvement of public health and other public welfare objectives. The State should take effective measures to achieve these objectives, protect public health and address existing social problems.\n\nWhile respecting the religious rights of Muslims and the principles of Muslim Personal Law, the rights of women and children must be effectively protected. Meaningful consultation with all stakeholders should take place before any legislation is introduced." },
    { q: "What problems have you faced in matters relating to personal and family laws?", a: "The occurrence of different types of problems in human society is natural. However, a proper understanding of existing religious principles and guidance, along with their appropriate implementation, can be sufficient to address many such problems. Family disputes can be resolved through personal laws." },
    { q: "Which aspects of family laws are unfair to women? What measures would you suggest to address them?", a: "Denying women their rightful inheritance, delaying the payment of mehr (dower), unnecessary delays in maintenance matters, and inadequate access to legal assistance in family disputes are important concerns that require attention.\n\nThese issues should be addressed through the effective implementation of existing laws, free legal aid, greater awareness of inheritance rights, and an efficient mechanism for the timely resolution of complaints.\n\nInstead of undermining religious freedom in the name of reform, priority should be given to enforcing existing rights effectively and ensuring access to justice." },
    { q: "Should separate principles apply to the inheritance of agricultural land and ancestral houses?", a: "The inheritance of agricultural land, ancestral houses and other properties should be dealt with by taking into account the applicable laws, the nature of the property and the rights of lawful heirs.\n\nThe recognised principles of Sharia governing inheritance for Muslims should be respected. No woman or other lawful heir should be deprived of their rightful share through coercion, fraud or incorrect property records.\n\nAccurate property records, transparent distribution of assets and accessible, effective legal remedies should be ensured." },
    { q: "Is there a need to introduce changes or reforms in the existing family laws?", a: "The objective of reforms in family laws should be to ensure justice, protect the rights of women and children, reduce legal disputes and improve the effectiveness of judicial proceedings.\n\nAny proposed reforms should be developed through consultation with all religious communities, while respecting the recognised principles of Muslim Personal Law and the constitutional guarantee of religious freedom.\n\nPriority should be given to resolving practical problems, including the denial of women's inheritance rights, negligence in the payment of maintenance and unnecessary delays in legal proceedings." },
    { q: "What other suggestions do you have regarding the Uniform Civil Code?", a: "Before taking any decision regarding a Uniform Civil Code in Maharashtra, a detailed assessment of its constitutional, legal, religious and social implications should be undertaken.\n\nMeaningful consultations should be held with all religious communities, women's organisations, legal experts and citizens.\n\nAny legislation must safeguard religious freedom, equality, justice and fundamental rights. The recognised religious principles and legal rights associated with Muslim Personal Law should not be disregarded.\n\nImproving the implementation of existing laws should be prioritised to ensure the effective protection of the rights of women and children." }
  ]
};

/* ---------------------------------------------------------------------------
   HINDI QUESTIONNAIRE (LTR)
--------------------------------------------------------------------------- */
const HINDI = {
  code: "hi",
  dir: "ltr",
  qLabel: "प्रश्न",
  aLabel: "उत्तर:",
  aLabelWritten: "प्रस्तावित उत्तर:",
  part1: "भाग I: वस्तुनिष्ठ प्रश्नों के उत्तर",
  part1Note: "प्रश्न 1 से 31 तक",
  part2: "भाग II: प्रपत्र के लिखित प्रश्नों के उत्तर",
  part2Note: "प्रश्न 32 से 37 तक",
  title: "महाराष्ट्र समान नागरिक संहिता समिति के व्यक्तिगत प्रपत्र के उत्तर",
  subtitle: "एक मुस्लिम नागरिक के रूप में इस्लामी पर्सनल लॉ के संरक्षण एवं संवैधानिक अधिकारों के संदर्भ में",
  searchLabel: "खोजें",
  searchPlaceholder: "प्रश्न संख्या, प्रश्न या उत्तर के अनुसार खोजें…",
  clearBtn: "साफ़ करें",
  noResults: "कोई मेल खाता प्रश्न नहीं मिला। कृपया कोई अन्य शब्द आज़माएँ।",
  copyBtn: "उत्तर कॉपी करें",
  copied: "कॉपी हो गया!",
  copyFail: "कॉपी विफल रहा, कृपया पुनः प्रयास करें।",
  questions: [
    { q: "क्या आप वर्तमान में महाराष्ट्र में समान नागरिक संहिता लागू करने का समर्थन करते हैं?", a: "NO (नहीं)" },
    { q: "क्या धार्मिक स्वतंत्रता के अधिकार का उल्लंघन किए बिना समान नागरिक संहिता लागू की जा सकती है?", a: "NO (नहीं)" },
    { q: "क्या समान नागरिक संहिता कानूनी विवादों को कम करके न्यायिक प्रक्रिया को अधिक प्रभावी बना सकती है?", a: "NO (नहीं)" },
    { q: "क्या विवाह, तलाक और अन्य पारिवारिक मामलों में सभी धर्मों पर एक ही कानून लागू होना चाहिए?", a: "NO (नहीं)" },
    { q: "क्या विवाह, तलाक और लिव-इन रिलेशनशिप आदि के पंजीकरण के लिए एक समान व्यवस्था होनी चाहिए?", a: "NO (नहीं)" },
    { q: "विवाह की न्यूनतम आयु क्या होनी चाहिए?", a: "वर्तमान में लागू कानून के अनुसार निर्धारित कानूनी न्यूनतम आयु का पालन अनिवार्य होना चाहिए।" },
    { q: "क्या किसी व्यक्ति को पहले से विवाहित होने के बावजूद दूसरी शादी करने की अनुमति होनी चाहिए?", a: "YES (हाँ)" },
    { q: "क्या पारंपरिक रीति-रिवाजों और धार्मिक विधियों के अनुसार विवाह करने की अनुमति जारी रहनी चाहिए?", a: "YES (हाँ)" },
    { q: "क्या सभी धर्मों के लिए निषिद्ध वैवाहिक संबंधों की एक समान सूची होनी चाहिए?", a: "NO (नहीं)" },
    { q: "क्या सभी धर्मों के लिए तलाक के आधार और प्रक्रिया एक समान होनी चाहिए?", a: "NO (नहीं)" },
    { q: "क्या पुरुषों और महिलाओं के लिए तलाक के आधार एक समान होने चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या गैर-न्यायिक तलाक की सभी प्रक्रियाओं पर प्रतिबंध लगाया जाना चाहिए?", a: "NO (नहीं)" },
    { q: "क्या सभी धर्मों में पुरुषों और महिलाओं को विरासत में समान अधिकार मिलने चाहिए?", a: "NO (नहीं)" },
    { q: "क्या बिना वसीयत के संपत्ति के उत्तराधिकार के लिए सभी धर्मों में एक समान कानून होना चाहिए?", a: "NO (नहीं)" },
    { q: "क्या प्रत्येक व्यक्ति को वसीयत के माध्यम से अपनी पूरी संपत्ति अपनी इच्छानुसार हस्तांतरित करने की स्वतंत्रता होनी चाहिए?", a: "NO (नहीं)" },
    { q: "क्या सभी बच्चों को उनके माता-पिता की वैवाहिक स्थिति से अलग, विरासत में समान अधिकार मिलने चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप से संबंधित मामलों को समान नागरिक संहिता के अंतर्गत विनियमित किया जाना चाहिए?", a: "NO (नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप का पंजीकरण अनिवार्य होना चाहिए?", a: "NO (नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप समाप्त होने पर उसके समापन का पंजीकरण अनिवार्य होना चाहिए?", a: "NO (नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप में महिलाओं को भरण-पोषण और विरासत के अधिकार मिलने चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप से जन्मे बच्चों को विरासत के अधिकार मिलने चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या ऐसे बच्चों को अपने माता-पिता से देखभाल और भरण-पोषण प्राप्त करने का अधिकार होना चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या सभी बच्चों के भरण-पोषण के लिए एक समान कानून होना चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या बच्चों की अभिरक्षा के मामलों में उनके कल्याण को सर्वोच्च प्राथमिकता दी जानी चाहिए?", a: "YES (हाँ)" },
    { q: "क्या वैवाहिक विवादों से संबंधित जटिल कानून लोगों को विवाह के बजाय लिव-इन रिलेशनशिप की ओर आकर्षित करते हैं?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप में शामिल पुरुषों और महिलाओं के अधिकारों की रक्षा के लिए कानून होना चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप में प्रवेश करते समय पंजीकरण अनिवार्य होना चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप समाप्त होने पर उसका पंजीकरण अनिवार्य होना चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप में किसी महिला को घर से निकाले जाने की स्थिति में भरण-पोषण तथा अन्य अधिकारों की सुरक्षा मिलनी चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या लिव-इन रिलेशनशिप से जन्मे बच्चों को विरासत के अधिकार प्राप्त होने चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "क्या ऐसे बच्चों को अपने माता-पिता से देखभाल और भरण-पोषण प्राप्त करने का अधिकार होना चाहिए?", a: "NO COMMENT (कोई टिप्पणी नहीं)" },
    { q: "समान नागरिक संहिता में किन विषयों को शामिल किया जाना चाहिए?", a: "भारतीय संविधान के अनुच्छेद 44 में समान नागरिक संहिता की दिशा में प्रयास करने का प्रावधान होने का अर्थ यह नहीं है कि इसे बिना किसी ठोस आवश्यकता के लागू कर दिया जाए। महाराष्ट्र में इसे लागू करने की कोई स्पष्ट सामाजिक या कानूनी आवश्यकता सिद्ध किए बिना ऐसा करना उचित नहीं होगा।\n\nसंविधान के नीति-निर्देशक सिद्धांतों में शराबबंदी (अनुच्छेद 47), सार्वजनिक स्वास्थ्य में सुधार तथा अन्य जनकल्याणकारी उद्देश्यों से संबंधित निर्देश भी शामिल हैं। राज्य को इन उद्देश्यों की प्राप्ति, सार्वजनिक स्वास्थ्य की रक्षा और सामाजिक समस्याओं के समाधान के लिए प्रभावी कदम उठाने चाहिए।\n\nमुसलमानों के धार्मिक अधिकारों और मुस्लिम पर्सनल लॉ का सम्मान करते हुए महिलाओं और बच्चों के अधिकारों की रक्षा सुनिश्चित की जानी चाहिए। किसी भी कानून के निर्माण से पहले सभी संबंधित पक्षों के साथ सार्थक परामर्श किया जाना चाहिए।" },
    { q: "व्यक्तिगत और पारिवारिक कानूनों से संबंधित मामलों में आपको किन समस्याओं का सामना करना पड़ा है?", a: "मानव समाज में विभिन्न प्रकार की समस्याओं का उत्पन्न होना स्वाभाविक है। लेकिन उनके समाधान के लिए पहले से मौजूद धार्मिक सिद्धांतों और मार्गदर्शन की सही समझ तथा उनका उचित पालन पर्याप्त हो सकता है। व्यक्तिगत कानूनों के माध्यम से पारिवारिक विवादों का समाधान किया जा सकता है।" },
    { q: "पारिवारिक कानूनों के कौन-से पहलू महिलाओं के लिए अन्यायपूर्ण हैं? उनके समाधान के लिए क्या सुझाव हैं?", a: "महिलाओं को विरासत से वंचित करना, मेहर के भुगतान में टालमटोल करना, भरण-पोषण के मामलों में अनावश्यक देरी और पारिवारिक विवादों में कानूनी सहायता की कमी ऐसे महत्वपूर्ण मुद्दे हैं जिन पर ध्यान देने की आवश्यकता है।\n\nइन समस्याओं के समाधान के लिए वर्तमान कानूनों का प्रभावी क्रियान्वयन, निःशुल्क कानूनी सहायता, विरासत संबंधी अधिकारों के बारे में जागरूकता तथा शिकायतों के त्वरित निवारण की व्यवस्था स्थापित की जानी चाहिए।\n\nसुधारों के नाम पर धार्मिक स्वतंत्रता समाप्त करने के बजाय अधिकारों के प्रभावी क्रियान्वयन और न्याय की उपलब्धता सुनिश्चित की जानी चाहिए।" },
    { q: "कृषि भूमि और पैतृक मकान की विरासत के लिए क्या अलग-अलग सिद्धांत होने चाहिए?", a: "कृषि भूमि, पैतृक मकान और अन्य संपत्तियों के उत्तराधिकार के मामलों में संबंधित कानूनों, भूमि की प्रकृति तथा वैध उत्तराधिकारियों के अधिकारों को ध्यान में रखा जाना चाहिए।\n\nमुसलमानों के लिए विरासत से संबंधित मान्य शरीयत सिद्धांतों का सम्मान किया जाना चाहिए। किसी महिला या अन्य उत्तराधिकारी को दबाव, धोखाधड़ी अथवा गलत अभिलेखों के माध्यम से उसके वैध हिस्से से वंचित नहीं किया जाना चाहिए।\n\nसंपत्ति अभिलेखों की शुद्धता, पारदर्शी बँटवारे तथा सरल और प्रभावी कानूनी उपायों की व्यवस्था सुनिश्चित की जानी चाहिए।" },
    { q: "क्या वर्तमान पारिवारिक कानूनों में किसी बदलाव या सुधार की आवश्यकता है?", a: "पारिवारिक कानूनों में सुधार का उद्देश्य न्याय प्रदान करना, महिलाओं और बच्चों के अधिकारों की रक्षा करना, कानूनी विवादों को कम करना तथा न्यायिक प्रक्रिया को प्रभावी बनाना होना चाहिए।\n\nसुधारों के लिए सभी धार्मिक समुदायों से परामर्श किया जाना चाहिए और मुसलमानों के मान्य व्यक्तिगत कानूनों के सिद्धांतों तथा संविधान द्वारा प्रदत्त धार्मिक स्वतंत्रता का सम्मान किया जाना चाहिए।\n\nमहिलाओं को विरासत से वंचित करने, भरण-पोषण के भुगतान में लापरवाही तथा कानूनी कार्यवाही में अनावश्यक देरी जैसी व्यावहारिक समस्याओं के समाधान को प्राथमिकता दी जानी चाहिए।" },
    { q: "समान नागरिक संहिता के संबंध में आपके अन्य सुझाव क्या हैं?", a: "महाराष्ट्र में समान नागरिक संहिता के संबंध में कोई भी निर्णय लेने से पहले उसके संवैधानिक, कानूनी, धार्मिक और सामाजिक प्रभावों का विस्तृत अध्ययन किया जाना चाहिए।\n\nसभी धार्मिक समुदायों, महिला संगठनों, कानूनी विशेषज्ञों और नागरिकों के साथ सार्थक परामर्श किया जाना चाहिए।\n\nकिसी भी कानून के क्रियान्वयन में धार्मिक स्वतंत्रता, समानता, न्याय और मौलिक अधिकारों की सुरक्षा सुनिश्चित की जानी चाहिए। मुस्लिम पर्सनल लॉ से संबंधित मामलों में मान्य धार्मिक सिद्धांतों और कानूनी अधिकारों की अनदेखी नहीं की जानी चाहिए।\n\nमहिलाओं और बच्चों के अधिकारों की प्रभावी सुरक्षा के लिए वर्तमान कानूनों के बेहतर क्रियान्वयन को प्राथमिकता दी जानी चाहिए।" }
  ]
};

/* ---------------------------------------------------------------------------
   LANGUAGE REGISTRY
--------------------------------------------------------------------------- */
const LANGUAGES = { ur: URDU, en: ENGLISH, hi: HINDI };

/* ---------------------------------------------------------------------------
   STATE + ELEMENT REFERENCES
--------------------------------------------------------------------------- */
let currentLang = null;
let cardRefs = [];      // { el, hay }
let part1El = null;
let part2El = null;

const els = {};

/* ---------------------------------------------------------------------------
   HELPERS (safe DOM creation)
--------------------------------------------------------------------------- */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function icon(name) {
  const i = document.createElement("i");
  i.className = "bi " + name;
  i.setAttribute("aria-hidden", "true");
  return i;
}

/* Classify categorical answers to render them as coloured badges.
   The exact answer text is always preserved. */
function answerBadgeClass(answer) {
  const t = answer.trim();
  if (/^NO[\s]*COMMENT/i.test(t)) return "ans-nocomment";
  if (/^YES/i.test(t)) return "ans-yes";
  if (/^NO(\s|\(|$)/i.test(t)) return "ans-no";
  return null;
}

/* ---------------------------------------------------------------------------
   COPY TO CLIPBOARD
--------------------------------------------------------------------------- */
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-9999px";
  ta.style.left = "-9999px";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (err) {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

async function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      /* fall through to fallback */
    }
  }
  return fallbackCopy(text);
}

function setCopyButton(btn, iconName, label, cssClass, lang) {
  btn.replaceChildren();
  btn.appendChild(icon(iconName));
  btn.appendChild(document.createTextNode(" " + label));
  btn.className = "btn btn-copy" + (cssClass ? " " + cssClass : "");
  if (lang === "ur") btn.setAttribute("lang", "ur");
  else if (lang === "hi") btn.setAttribute("lang", "hi");
  else btn.removeAttribute("lang");
}

async function handleCopy(answerText, btn, meta) {
  if (btn.dataset.busy === "1") return;
  btn.dataset.busy = "1";
  const ok = await copyText(answerText);
  if (ok) {
    setCopyButton(btn, "bi-check-lg", meta.copied, "copied", meta.code);
  } else {
    setCopyButton(btn, "bi-exclamation-triangle", meta.copyFail, "fail", meta.code);
  }
  setTimeout(() => {
    setCopyButton(btn, "bi-clipboard", meta.copyBtn, "", meta.code);
    delete btn.dataset.busy;
  }, ok ? 1500 : 2500);
}

/* ---------------------------------------------------------------------------
   RENDERING
--------------------------------------------------------------------------- */
function buildTitleCard(meta) {
  const card = el("div", "q-title-card");
  card.setAttribute("lang", meta.code);
  card.setAttribute("dir", meta.dir);
  card.appendChild(el("h2", "q-title", meta.title));
  card.appendChild(el("p", "q-subtitle", meta.subtitle));
  return card;
}

function buildPartHeader(text, note) {
  const header = el("div", "part-header");
  header.appendChild(el("h2", null, text));
  if (note) header.appendChild(el("p", "part-note", note));
  return header;
}

function buildCard(number, meta) {
  const item = meta.questions[number - 1];

  const card = el("article", "question-card");
  card.setAttribute("lang", meta.code);
  card.setAttribute("dir", meta.dir);

  const body = el("div", "card-body");

  // Question number chip
  body.appendChild(el("span", "q-num", meta.qLabel + " " + number));

  // Question text
  body.appendChild(el("h3", "q-text", item.q));

  // Answer section — clearly separated
  const aBox = el("div", "a-box");
  const aLabel = el("div", "a-label");
  aLabel.appendChild(icon(number <= 31 ? "bi-patch-check" : "bi-journal-text"));
  aLabel.appendChild(document.createTextNode(number <= 31 ? meta.aLabel : meta.aLabelWritten));
  aBox.appendChild(aLabel);

  const badgeClass = answerBadgeClass(item.a);
  if (badgeClass) {
    aBox.appendChild(el("span", "a-badge " + badgeClass, item.a));
  } else {
    aBox.appendChild(el("p", "a-text", item.a));
  }

  // Copy Answer button (copies ONLY the answer text)
  const btn = el("button", "btn btn-copy");
  btn.type = "button";
  btn.setAttribute("aria-live", "polite");
  setCopyButton(btn, "bi-clipboard", meta.copyBtn, "", meta.code);
  btn.addEventListener("click", () => handleCopy(item.a, btn, meta));
  aBox.appendChild(btn);

  body.appendChild(aBox);
  card.appendChild(body);
  return card;
}

function buildQuestionnaire(meta) {
  // Title card
  els.qContent.replaceChildren(buildTitleCard(meta));
  els.qContent.setAttribute("dir", meta.dir);
  els.qContent.setAttribute("lang", meta.code);

  // Search + status localisation
  els.searchLabel.replaceChildren(icon("bi-search"), document.createTextNode(" " + meta.searchLabel));
  els.searchInput.placeholder = meta.searchPlaceholder;
  els.searchInput.classList.toggle("urdu-input", meta.code === "ur");
  els.searchInput.classList.toggle("hindi-input", meta.code === "hi");
  els.clearSearchText.textContent = meta.clearBtn;
  els.noResultsText.textContent = meta.noResults;
  if (meta.code === "ur") {
    els.noResults.setAttribute("lang", "ur");
    els.noResults.setAttribute("dir", "rtl");
  } else {
    els.noResults.removeAttribute("lang");
    els.noResults.setAttribute("dir", "ltr");
  }

  // Question list: Part I (Q1–31), Part II (Q32–37)
  els.questionList.replaceChildren();
  cardRefs = [];

  part1El = buildPartHeader(meta.part1, meta.part1Note);
  els.questionList.appendChild(part1El);

  for (let n = 1; n <= 31; n++) {
    const card = buildCard(n, meta);
    els.questionList.appendChild(card);
    cardRefs.push({ el: card, hay: (n + " " + meta.questions[n - 1].q + " " + meta.questions[n - 1].a).toLowerCase() });
  }

  part2El = buildPartHeader(meta.part2, meta.part2Note);
  els.questionList.appendChild(part2El);

  for (let n = 32; n <= 37; n++) {
    const card = buildCard(n, meta);
    els.questionList.appendChild(card);
    cardRefs.push({ el: card, hay: (n + " " + meta.questions[n - 1].q + " " + meta.questions[n - 1].a).toLowerCase() });
  }
}

/* ---------------------------------------------------------------------------
   LANGUAGE SELECTION
--------------------------------------------------------------------------- */
function selectLanguage(lang) {
  const meta = LANGUAGES[lang];
  if (!meta) return;
  currentLang = lang;

  // Active states on every language button (hero + navbar)
  document.querySelectorAll(".js-lang-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  // Hide the "select a language" prompt, show the questionnaire
  els.selectPrompt.hidden = true;
  els.questionnaire.hidden = false;

  // Render the chosen questionnaire
  buildQuestionnaire(meta);

  // Reset any previous search
  els.searchInput.value = "";
  applySearch();

  // Bring the questionnaire into view
  els.questionnaire.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------------------------------------------------------------------
   SEARCH
--------------------------------------------------------------------------- */
function applySearch() {
  const term = els.searchInput.value.trim().toLowerCase();
  const searching = term.length > 0;
  let visibleCount = 0;

  cardRefs.forEach((ref) => {
    const match = !searching || ref.hay.includes(term);
    ref.el.hidden = !match;
    if (match) visibleCount++;
  });

  // While searching, hide the part headers for a clean results view
  if (part1El) part1El.hidden = searching;
  if (part2El) part2El.hidden = searching;

  els.noResults.hidden = !(searching && visibleCount === 0);
}

function clearSearch() {
  els.searchInput.value = "";
  applySearch();
  els.searchInput.focus();
}

/* ---------------------------------------------------------------------------
   BACK TO TOP
--------------------------------------------------------------------------- */
function handleScroll() {
  els.backToTop.classList.toggle("show", window.scrollY > 400);
}

/* ---------------------------------------------------------------------------
   INITIALISATION
--------------------------------------------------------------------------- */
function init() {
  els.qContent = document.getElementById("qContent");
  els.searchCard = document.getElementById("searchCard");
  els.searchLabel = document.getElementById("searchLabel");
  els.searchInput = document.getElementById("searchInput");
  els.clearSearchBtn = document.getElementById("clearSearchBtn");
  els.clearSearchText = document.getElementById("clearSearchText");
  els.noResults = document.getElementById("noResults");
  els.noResultsText = document.getElementById("noResultsText");
  els.questionList = document.getElementById("questionList");
  els.questionnaire = document.getElementById("questionnaire");
  els.selectPrompt = document.getElementById("selectPrompt");
  els.backToTop = document.getElementById("backToTop");

  // Language buttons (hero + navbar)
  document.querySelectorAll(".js-lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => selectLanguage(btn.getAttribute("data-lang")));
  });

  // Search
  els.searchInput.addEventListener("input", applySearch);
  els.clearSearchBtn.addEventListener("click", clearSearch);

  // Back to top
  window.addEventListener("scroll", handleScroll, { passive: true });
  els.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  handleScroll();
}

document.addEventListener("DOMContentLoaded", init);
