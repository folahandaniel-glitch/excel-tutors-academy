/**
 * Default public-site content. Every block here is editable by the Super Admin
 * (Admin → Homepage / Content) and versioned; these values are only the
 * starting point (§64, Rule 20).
 */

export interface PageBlock {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
  cta: { label: string; href: string };
}

export const CONTENT_DEFAULTS = {
  home: {
    heroEyebrow: "Focused · Consistent · Excellent",
    heroHeading: "EXCEL TUTORS ACADEMY",
    tagline: "Learn Today, Lead Tomorrow.",
    positioning: "Smart Assessment. Secure Examination. Better Learning.",
    heroDescription:
      "A complete learning and computer-based testing platform from Basic 1 to SS3 — guided lessons with pictures, auto-marked classwork, realistic mock CBT, Common Entrance, BECE, JAMB, WAEC and NECO preparation, and international practice, all in one secure place.",
    ctaRegister: "Student Registration",
    ctaLogin: "Student Login",
    ctaCbt: "Access CBT",
    trust: ["Server-timed, secure CBT", "Instant, accurate results", "Works on any phone"],
    stats: [
      { value: "12", label: "Classes: Basic 1–6, JSS1–JSS3 and SS1–SS3" },
      { value: "50+", label: "Subjects across primary, junior and senior secondary" },
      { value: "24/7", label: "Independent study access" },
      { value: "100%", label: "Server-side marking" },
    ],
    featuresHeading: "Everything a serious student needs",
    featuresIntro: "Designed with teachers and examiners for Nigerian primary and secondary schools — and built to international standards.",
    features: [
      { icon: "BookOpen", title: "EXCEL Study Centre", body: "Structured lessons by department, class, term and topic with examples, videos and progress tracking." },
      { icon: "MonitorCheck", title: "Realistic CBT", body: "A professional exam interface with a server-controlled timer, question palette, flagging and auto-submit." },
      { icon: "Target", title: "BECE · JAMB · WAEC · NECO prep", body: "Randomised mock papers from an approved, original question bank — no two students get the same paper." },
      { icon: "ClipboardCheck", title: "Classwork & assignments", body: "Objective assessments marked instantly, with explanations and targeted revision when you fall short." },
      { icon: "LineChart", title: "Performance analytics", body: "See strengths, weak topics, trends and accuracy by subject so you know exactly what to practise next." },
      { icon: "ShieldCheck", title: "Secure & fair", body: "Encrypted accounts, one-student access codes, activity logs and tamper-resistant results." },
    ],
    journeyHeading: "Your path to exam confidence",
    announcement: { enabled: false, text: "", link: "" },
    announcements: {
      enabled: true,
      secondsPerItem: 6,
      items: [
        { tag: "New", text: "Primary School is here: Basic 1 to Basic 6 can now register, with Quantitative and Verbal Reasoning.", linkLabel: "Register", link: "/register" },
        { tag: "Parents", text: "Parents and guardians can now follow their children's lessons and results.", linkLabel: "Create a parent account", link: "/register/parent" },
        { tag: "Premium", text: "International practice in the style of IELTS, TOEFL, SAT and checkpoint tests for Premium students.", linkLabel: "", link: "" },
        { tag: "Learn", text: "Picture Dictionary, idioms, phrasal verbs and learning games are now in Study Materials.", linkLabel: "Sign in", link: "/login" },
      ],
    },
    carousel: {
      enabled: true,
      secondsPerSlide: 6,
      slides: [
        { title: "JAMB questions, subject by subject", text: "Sit 50 JAMB (UTME) questions in each subject under exam conditions and see your score at once.", linkLabel: "Start practising", link: "/login?next=/student/jamb" },
        { title: "Lessons for every class, Basic 1 to SS3", text: "Study the scheme of work topic by topic, then test yourself with auto-marked classwork.", linkLabel: "See the subjects", link: "/subjects" },
        { title: "New here?", text: "Create your student account, activate your access code and begin today.", linkLabel: "Register", link: "/register" },
      ],
    },
    founder: {
      enabled: false,
      eyebrow: "From the Founder",
      heading: "Education that prepares every child to stand tall",
      name: "",
      role: "Founder & Proprietor, Excel Tutors Academy",
      message:
        "EXCEL TUTORS ACADEMY was founded on a simple conviction: every child can excel when teaching is sound, practice is regular and assessment is honest.\n\nEXCEL TUTORS ACADEMY grew out of that conviction. Examinations such as JAMB are now written on computers, and too many bright students meet a computer-based test for the first time in the examination hall. I wanted our students, and any serious student in Nigeria, to practise under real examination conditions long before the day that counts.\n\nSo we built a platform where a student can study the scheme of work topic by topic, attempt classwork, sit timed tests for BECE, WAEC, NECO and JAMB, and see at once where to improve. My promise to parents and students is that we will keep the content sound, the marking fair and the standard high.",
      highlights: ["Founder and Proprietor of Excel Tutors Academy", "Leading the Excel Tutors Academy learning community", "Committed to learning, practice and honest assessment"],
      photoAssetId: "",
      ctaLabel: "About EXCEL",
      ctaLink: "/about",
    },
    appearance: { darkGlowStyle: true, animations: true },
    closingHeading: "Ready to start practising?",
    closingBody: "Create your student account, activate your access code and begin today.",
  },
  about: {
    title: "About EXCEL TUTORS ACADEMY",
    eyebrow: "Who we are",
    intro:
      "EXCEL TUTORS ACADEMY is the digital learning and assessment platform of EXCEL TUTORS ACADEMY — built to help every student learn independently, practise deliberately and perform confidently in examinations.",
    sections: [
      {
        heading: "Our mission",
        body: "To give every secondary school student access to high-quality lessons, fair assessment and honest feedback — anywhere, on any device.",
      },
      {
        heading: "What makes us different",
        body: "Our examination engine is server-controlled: timing, question selection and marking all happen securely on our servers, so results are accurate and trustworthy. Our Study Centre follows a guided path — lesson, classwork, assessment, mastery — so students always know what to do next.",
      },
      {
        heading: "Original, approved content",
        body: "We use original, teacher-authored and properly licensed questions. Every question is reviewed and approved by an academic administrator before it can appear in an examination.",
      },
    ],
    highlights: ["Built for JSS1–JSS3 and SS1–SS3", "Science, Commercial and Arts departments in SS", "Designed for low-bandwidth mobile use"],
    cta: { label: "Create your account", href: "/register" },
  } satisfies PageBlock,
  subjects: {
    title: "Subjects",
    eyebrow: "Curriculum",
    intro: "Junior Secondary (JSS1–JSS3) follows the Basic Education curriculum; Senior Secondary (SS1–SS3) is organised into Science, Commercial and Arts. Every student sees exactly the subjects for their class.",
    sections: [],
    highlights: [],
    cta: { label: "Start learning", href: "/register" },
  } satisfies PageBlock,
  "cbt-practice": {
    title: "CBT Practice",
    eyebrow: "Practise like it's the real thing",
    intro: "Build speed and accuracy with timed practice in an interface that mirrors real computer-based tests.",
    sections: [
      { heading: "Real exam conditions", body: "A sticky timer, numbered question palette, answer flagging and a review screen before you submit — on phone, tablet or laptop." },
      { heading: "Every paper is different", body: "Questions and options are randomised from an approved bank, so practice builds understanding, not memorisation." },
      { heading: "Learn from every attempt", body: "See your score, grade and the correct answers with explanations as soon as results are released." },
    ],
    highlights: ["Server-controlled timer", "Autosave on every answer", "Resumes safely after network loss"],
    cta: { label: "Access CBT", href: "/login?next=/student/exams" },
  } satisfies PageBlock,
  "mock-exams": {
    title: "Mock Examinations",
    eyebrow: "Full-length rehearsals",
    intro: "Sit complete, timed mock papers set by the examination office and see where you stand before the real exam.",
    sections: [
      { heading: "Scheduled and on-demand", body: "Mock exams can open and close at set times, just like school examinations, or be available for independent practice." },
      { heading: "Detailed performance report", body: "Your result slip shows score, percentage, grade, correct, incorrect and unanswered questions, plus time used." },
    ],
    highlights: ["Printable result slips", "Grade A–F reporting", "Topic-by-topic breakdown"],
    cta: { label: "View mock exams", href: "/login?next=/student/mock" },
  } satisfies PageBlock,
  "bece-preparation": {
    title: "BECE Preparation (JSS3)",
    eyebrow: "Basic Education Certificate Examination",
    intro: "Get JSS3 students ready for the BECE with guided lessons, practice questions and full BECE-style mock papers.",
    sections: [
      { heading: "Built on the JSS curriculum", body: "Mathematics, English, Basic Science, Basic Technology, Social Studies, Civic Education and more — organised by class and topic from JSS1 to JSS3." },
      { heading: "Mock papers under exam conditions", body: "Timed BECE-style mocks drawn at random from an approved, original question bank, marked instantly with explanations." },
      { heading: "A strong start for SS1", body: "Mastery-based lessons close gaps early, so students move into Science, Commercial or Arts with confidence." },
    ],
    highlights: ["JSS1–JSS3 coverage", "BECE-style mock papers", "Progress tracking for parents and teachers"],
    cta: { label: "Start BECE practice", href: "/register" },
  } satisfies PageBlock,
  "jamb-preparation": {
    title: "JAMB (UTME) Preparation",
    eyebrow: "Unified Tertiary Matriculation Examination",
    intro: "Prepare for the UTME with timed CBT practice across Use of English, Mathematics and your chosen subjects.",
    sections: [
      { heading: "CBT-first preparation", body: "The UTME is computer-based. Our interface trains you to manage time, navigate questions and review efficiently." },
      { heading: "Syllabus-aligned practice", body: "Original questions organised by topic so you can target weak areas before exam day." },
    ],
    highlights: ["Timed subject combinations", "Topic analytics", "Explanations for every answer"],
    cta: { label: "Start JAMB practice", href: "/register" },
  } satisfies PageBlock,
  "waec-preparation": {
    title: "WAEC (WASSCE) Preparation",
    eyebrow: "West African Senior School Certificate Examination",
    intro: "Strengthen your objective-paper performance with structured revision and realistic practice for the WASSCE.",
    sections: [
      { heading: "Topic-by-topic mastery", body: "Work through the curriculum in the Study Centre, then test yourself with classwork and mock papers." },
      { heading: "Know your grade", body: "Results use a clear grading scale so you can track your progress towards credit passes." },
    ],
    highlights: ["SS1–SS3 coverage", "Science, Commercial and Arts", "Progress tracking"],
    cta: { label: "Start WAEC practice", href: "/register" },
  } satisfies PageBlock,
  "neco-preparation": {
    title: "NECO (SSCE) Preparation",
    eyebrow: "National Examinations Council",
    intro: "Prepare for the NECO SSCE with guided lessons, practice questions and full mock examinations.",
    sections: [
      { heading: "Consistent practice", body: "Short daily practice sessions and assignments keep your knowledge fresh across every subject." },
      { heading: "Focused revision", body: "Analytics highlight your weakest topics and recommend what to practise next." },
    ],
    highlights: ["Daily practice", "Weak-topic recommendations", "Mock examinations"],
    cta: { label: "Start NECO practice", href: "/register" },
  } satisfies PageBlock,
  "study-centre": {
    title: "EXCEL Study Centre",
    eyebrow: "Learn independently",
    intro: "Every active access code unlocks the complete Study Centre — study at your own pace, any time, without waiting for a teacher to be online.",
    sections: [
      { heading: "A guided learning path", body: "Lesson → study material → classwork → objective assessment → next lesson. Reach the mastery score to move on; if not, retry with targeted revision." },
      { heading: "Rich materials", body: "Notes with worked examples, clear mathematics, videos, audio, documents and curated external resources." },
      { heading: "See your progress", body: "Track completed lessons, classwork scores and topic mastery across every subject." },
    ],
    highlights: ["Department → Class → Term → Subject → Topic", "Auto-marked classwork", "Mastery-based progression"],
    cta: { label: "Open the Study Centre", href: "/login?next=/student/study" },
  } satisfies PageBlock,
  "how-it-works": {
    title: "How it works",
    eyebrow: "Four simple steps",
    intro: "Getting started with EXCEL TUTORS ACADEMY takes only a few minutes.",
    sections: [
      { heading: "1. Register", body: "Create your student account with your class (Basic 1 to SS3) and, for SS students, your department. A school can also register a whole class at once. Choose a strong password — at least 10 characters with letters, numbers and a symbol." },
      { heading: "2. Get your access code", body: "Need an Access Code? To get an access code, reach the Super Admin to get your code (09166864020)." },
      { heading: "3. Activate", body: "Enter your code on your dashboard. Your access period starts the moment you activate it, not before." },
      { heading: "4. Learn, practise, test, improve", body: "Study lessons, complete classwork, sit mock CBT examinations and track your improvement." },
    ],
    highlights: [],
    cta: { label: "Register now", href: "/register" },
  } satisfies PageBlock,
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "How do I get an access code?", a: "Need an Access Code? To get an access code, reach the Super Admin to get your code (09166864020)." },
      { q: "When does my access start?", a: "Your access period begins the moment you first activate your code — not when the code was created. Your dashboard shows the exact expiry date and a live countdown." },
      { q: "Can I share my access code?", a: "No. Each code becomes linked to one student account when it is activated and cannot be used on another account." },
      { q: "What happens if my network drops during an exam?", a: "Your answers are saved continuously. Reconnect and reopen the exam — you continue where you stopped. The timer is kept by our server, so it keeps running while you are away." },
      { q: "Will I get the same questions as my classmates?", a: "Usually not. Questions and options are randomly selected and ordered from an approved bank for each student." },
      { q: "Can I use my phone?", a: "Yes. The platform is designed mobile-first and works on Android phones, iPhones, tablets and computers, even on slower connections." },
      { q: "What happens when my access expires?", a: "You can no longer start exams or open protected Study Centre content, but your past results remain available. Contact the Super Admin for a new code." },
      { q: "Do parents need an access code?", a: "Yes. The parent portal opens with a parent access code from the school. It is different from a student access code, and one code belongs to one parent account. Parents who registered before codes were introduced have a free period, shown on their Parent access page." },
      { q: "My code was entered on the wrong account. What can I do?", a: "Contact the Super Admin with both Student IDs. The school can move a running code to the right student; the remaining days move with it." },
      { q: "I think my result is wrong. Can I appeal?", a: "Yes. Open the result and choose 'Appeal this result' within 7 days of its release. Say which questions you mean and why. The examination office replies on the same page." },
      { q: "I forgot my password. What should I do?", a: "Use 'Forgot password' on the login page. If you still cannot sign in, contact the Super Admin — for your security, administrators can reset your password but can never see it." },
    ],
  },
  contact: {
    title: "Contact us",
    intro: "We're here to help students, parents and schools.",
    phone: "09166864020, 08087107085",
    email: "",
    address: "EXCEL TUTORS ACADEMY, Nigeria",
    hours: "Monday – Friday, 8:00am – 5:00pm (WAT)",
    accessNote: "Need an Access Code? To get an access code, reach the Super Admin to get your code (09166864020).",
  },
  privacy: {
    title: "Privacy Policy",
    updated: "2026-09-30",
    body: `EXCEL TUTORS ACADEMY ("we") is operated for EXCEL TUTORS ACADEMY. This policy explains what we collect and how we protect it.

## What we collect
- Account details you provide at registration: name, email, phone number, student ID, class, department, school, state and country, and optionally date of birth and gender.
- Learning and assessment records: lessons opened, classwork and assignment submissions, examination attempts, answers, scores and results.
- Security records: sign-in times, IP address, device/browser type, and security events such as failed sign-ins.

## How we use it
- To provide lessons, examinations, results and progress analytics.
- To protect accounts and examinations (for example, detecting suspicious activity).
- To send notifications you have not switched off, such as results and access reminders.

## What we never do
- We never store your password in readable form — only a secure one-way hash. Nobody, including administrators, can see your password.
- We do not sell your data or show your information to other students.

## Who can see your data
Authorised school administrators can see your account information, results and learning progress for academic and support purposes. All administrative actions are logged.

## Retention
Results and academic records are retained to keep historical results auditable. You may request correction of inaccurate information, or ask about deletion where the law permits, by contacting the school.

## Contact
Questions about privacy? Contact EXCEL TUTORS ACADEMY on 09166864020.`,
  },
  terms: {
    title: "Terms and Conditions",
    updated: "2026-09-30",
    body: `By creating an account on EXCEL TUTORS ACADEMY you agree to these terms.

## Your account
- Provide accurate information and keep your password private.
- Access codes are personal: once activated, a code belongs to your account and must not be shared or resold.

## Examinations and conduct
- Examinations must be taken by the account holder without unauthorised help.
- The platform records browser activity such as leaving the exam window. Attempts may be reviewed and, where malpractice is confirmed, voided by the examination office.
- Timing and marking are determined by our servers and are final, subject to review by the school.

## Content
- Lessons, questions and materials are provided for personal study and may not be copied or redistributed.
- We use original, teacher-authored or properly licensed content.

## Access periods
- Your access begins when you first activate a code and lasts for the period assigned to it. The school may extend, suspend or end access with a recorded reason.

## Changes
We may update these terms. Continued use means you accept the updated terms.`,
  },
  "primary-school": {
    title: "Primary School (Basic 1 to 6)",
    eyebrow: "For younger learners",
    intro: "Lessons, classwork and tests written for Basic 1 to Basic 6 pupils, with pictures and diagrams, short notes and plenty of practice.",
    sections: [
      { heading: "Every subject, every term", body: "Mathematics, English Studies, Basic Science and Technology, Social and Citizenship Studies, Physical and Health Education, Religious Studies, History, Cultural and Creative Arts, French, Arabic, Yoruba, Igbo and Hausa, with Digital Literacy and Pre-vocational Studies from Basic 4. Each class has twelve topics, four for each term." },
      { heading: "Simple notes, then practice", body: "Each topic has a short lesson note, worked examples and questions with an explanation for every answer, so a pupil learns from each mistake." },
      { heading: "Ready for Common Entrance", body: "Basic 5 and Basic 6 pupils practise timed tests on a computer or phone, the way entrance examinations are now written." },
      { heading: "Parents can follow along", body: "A parent or guardian can link to a child's account and see lessons completed, test results and a study timetable." },
    ],
    highlights: ["Basic 1 to Basic 6", "Pictures and diagrams", "Works on a phone", "Common Entrance practice"],
    cta: { label: "Register a pupil", href: "/register" },
  } satisfies PageBlock,
  "for-parents": {
    title: "For parents and guardians",
    eyebrow: "Follow your child's learning",
    intro: "The parent portal shows you what your child is studying, how they are scoring and where they need help, without asking them for their password.",
    sections: [
      { heading: "1. Create a parent account", body: "Register as a parent or guardian with your own e-mail and password. A parent account is separate from a student account." },
      { heading: "2. Enter your parent access code", body: "The parent portal opens with a parent access code from the school. One code belongs to one parent account. A student access code does not work on a parent account." },
      { heading: "3. Link your child", body: "Send a link request with your child's Student ID. Your child sees the request after signing in and accepts it. Nothing about a student is shown until the link is confirmed." },
      { heading: "What you can see", body: "Lessons completed, test and examination results the school has released, the date your child last signed in, and whether their access is active. You can also set a study timetable and reminders for your child." },
      { heading: "Learning for parents", body: "Short articles on parenting, child development and study support, parent quizzes and a moderated parent community." },
    ],
    highlights: ["Separate, private parent account", "Your child must accept the link", "Results and study progress", "Study timetable"],
    cta: { label: "Create a parent account", href: "/register/parent" },
  } satisfies PageBlock,
  "get-access": {
    title: "How to get an access code",
    eyebrow: "Access codes",
    intro: "Need an Access Code? To get an access code, reach the Super Admin to get your code (09166864020).",
    sections: [
      { heading: "What a code opens", body: "A student access code opens computer-based tests, the Study Centre, practice, assignments and performance reports for the number of days on the code. A parent access code opens the parent portal." },
      { heading: "When the days start", body: "Your access period starts at the moment you enter the code on your own account, not on the day the code was created. Your dashboard shows the exact end date and a countdown." },
      { heading: "One code, one account", body: "A code is tied to the account that activates it and cannot be used again on another account. Do not share your code before you have used it." },
      { heading: "If something goes wrong", body: "If a code is refused, check that you typed it exactly as given, including the dashes. If it was entered on the wrong account, the school can move it to the right one. Contact the Super Admin with your name and Student ID." },
      { heading: "When your access ends", body: "You can still sign in and see your past results. To continue with tests and lessons, get a new code and enter it on your dashboard." },
    ],
    highlights: ["Students: enter the code on your dashboard", "Parents: enter the code on the Parent access page", "Keep your code private"],
    cta: { label: "Sign in to enter a code", href: "/login" },
  } satisfies PageBlock,
  /** The moving banner at the top of the parent's first page. Every slide can be edited or removed. */
  "parent-promo": {
    enabled: true,
    seconds: 6,
    slides: [
      { eyebrow: "EXCEL TUTORS ACADEMY", title: "A reliable computer makes learning easier", body: "Buy good, dependable laptops and desktop computers for school work and CBT practice, with a warranty you can trust.", cta: "Call 09166864020", link: "tel:09166864020", icon: "laptop" },
      { eyebrow: "EXCEL TUTORS ACADEMY", title: "Tablets and phones for learners", body: "Sturdy tablets and smartphones with good batteries and clear screens, chosen with students in mind.", cta: "Call 09166864020", link: "tel:09166864020", icon: "tablet" },
      { eyebrow: "EXCEL TUTORS ACADEMY", title: "Printers for homework and projects", body: "Print notes, past questions and projects at home. Printers, ink and paper are available.", cta: "Call 09166864020", link: "tel:09166864020", icon: "printer" },
      { eyebrow: "EXCEL TUTORS ACADEMY", title: "Power banks, earbuds and accessories", body: "Keep lessons going through power cuts and let your child listen without disturbing the house: power banks, earbuds, chargers and more.", cta: "Call 09166864020", link: "tel:09166864020", icon: "battery" },
    ],
  },
  footer: {
    about: "The digital learning and assessment platform of EXCEL TUTORS ACADEMY.",
  },
} as const;

export type ContentKey = keyof typeof CONTENT_DEFAULTS;
export const PAGE_KEYS = ["about", "subjects", "cbt-practice", "mock-exams", "bece-preparation", "jamb-preparation", "waec-preparation", "neco-preparation", "study-centre", "how-it-works", "primary-school", "for-parents", "get-access"] as const;
