import { Question } from "./types";

// Define the type for a single comment
type Comment = {
  id: number;
  title: string;
  name: string;
  comment: string;
  image: string;
};

// Generate more data with the same image
export const comments: Comment[] = [
  {
    id: 0,
    title: "Product Manager @ FinTech Innovators",
    name: "Alex Mulondo",
    comment:
      "We are confident in our growth strategy until we realized we were leaving out entire user segments. FinExpert gave us insights to turn it around.",
    image: "https://github.com/shadcn.png",
  },
  {
    id: 1,
    title: "CEO @ TechSolutions",
    name: "Jane Doe",
    comment:
      "FinExpert's analytics tools have been a game-changer for our business. We've seen a 30% increase in user engagement since implementing their solutions.",
    image: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    title: "CTO @ InnovateNow",
    name: "John Smith",
    comment:
      "The insights provided by FinExpert helped us identify key areas for improvement in our product. Their team is incredibly knowledgeable and supportive.",
    image: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    title: "Marketing Director @ GrowthHub",
    name: "Emily Johnson",
    comment:
      "FinExpert's platform has streamlined our marketing efforts and allowed us to target our audience more effectively. Highly recommend their services!",
    image: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    title: "Founder @ StartupX",
    name: "Michael Brown",
    comment:
      "We were struggling to make sense of our data until we started using FinExpert. Their tools are intuitive and have saved us countless hours.",
    image: "https://github.com/shadcn.png",
  },
];

type FrequentQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const frequentQuestions: FrequentQuestion[] = [
  {
    id: 0,
    question: "Who can benefit from FinExpert?",
    answer:
      "FinExpert is ideal for fintech users, regulators, developers, and service providers looking to enhance financial inclusivity.",
  },
  {
    id: 1,
    question: "What services does FinExpert provide?",
    answer:
      "FinExpert offers a range of services including financial analysis, regulatory compliance, API integrations, and tools for developers to build fintech solutions.",
  },
  {
    id: 2,
    question: "Is FinExpert available globally?",
    answer:
      "Yes, FinExpert is designed to be accessible globally, with support for multiple currencies and compliance with international financial regulations.",
  },
  {
    id: 3,
    question: "How does FinExpert ensure data security?",
    answer:
      "FinExpert employs advanced encryption, secure APIs, and follows industry best practices to ensure the highest level of data security and privacy.",
  },
  {
    id: 4,
    question: "Can FinExpert be integrated with existing systems?",
    answer:
      "Yes, FinExpert provides flexible APIs and SDKs that allow seamless integration with existing financial systems and platforms.",
  },
  {
    id: 5,
    question: "What kind of support does FinExpert offer?",
    answer:
      "FinExpert offers comprehensive support including documentation, developer resources, and a dedicated support team to assist with any issues or questions.",
  },
];

export const userSurveyQuestions: Question[] = [
  {
    type: "radio",
    label: "Have you ever registered for a fintech service?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label: "Which Fintech service have you used before?",
    options: [
      "Mobile Money",
      "Online Lending Platforms",
      "Digital Wallets",
      "Cryptocurrency platforms",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label: "What Challenges have you faced in accessing FinTech services?",
    options: [
      "High Fees",
      "Complex interfaces",
      "Limited Customer Support",
      "Security Concerns",
      "Others",
    ],
  },
  {
    type: "number-radio",
    label: "Do you find FinTech services affordable?",
    options: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label: "Are FinTech services accessible to people with disabilities?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label: "How often do you use FinTech services?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
  },
  {
    type: "number-radio",
    label: "Do you trust FinTech platforms with your financial transactions?",
    options: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label:
      "Have you ever experienced fraud or security issues while using FinTech?",
    options: ["Yes", "No"],
  },
  {
    type: "number-radio",
    label: "How easy is it to navigate FinTech platforms?",
    options: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label: "Do you find customer Support responsive and helpful?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label: "Is language a barrier when using FinTech services?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label: "WHow do you primarily access FinTech services?",
    options: ["Mobile App", "USSD", "Websites", "Others"],
  },
  {
    type: "radio",
    label:
      "Do you think FinTech services cater to rural users as well as urban users?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "Have you ever faced transaction delays or failures using fintech services?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "Do you feel safe using FinTech services compared to traditional banking?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "Does your FinTech Platform provide educational resources or financial literacy?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label: "Would you recommend FinTech services to others?",
    options: ["Yes", "No"],
  },
  {
    type: "text",
    label: "What improvements would you suggest for FinTech inclusivity",
    placeholder: "type your answer here",
  },
  {
    type: "radio",
    label: "Are transaction fees clearly communicated before making payments?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "Do FinTech services offer financial products tailored to your needs?",
    options: ["Yes", "No"],
  },
];

export const regulatorSurveyQuestions: Question[] = [
  {
    type: "number-radio",
    label:
      "To what extent do FinTech companies employ policies against gender discrimination?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "number-radio",
    label:
      "To what extent are there community support initiatives for FinTech targeting females?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "number-radio",
    label:
      "To what extent are there community support initiatives for FinTech targeting males?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },

  {
    type: "checkbox",
    label:
      "What is the minimum legal age required for an individual to use FinTech services?",
    options: ["16 Years", "18 Years", "21 Years", "Other"],
  },
  {
    type: "number-radio",
    label:
      "To what extent do your policies ensure racial and ethnic diversity? ",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },

  {
    type: "number-radio",
    label:
      "To what extent do your policies promote access to FinTech services by people of different academic backgrounds?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "number-radio",
    label:
      "To what extent do your policies ensure equal access to FinTech services regardless of religious group?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label:
      "Are there strong policies in place to enhance access to FinTech services for handicapped people?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "Are there community support initiatives for FinTech services targeting rural areas?",
    options: ["Yes", "No"],
  },

  {
    type: "number-radio",
    label:
      "How well do community support initiatives for FinTech target urban areas?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },

  {
    type: "radio",
    label:
      "Are there strong policies ensuring equal access to FinTech services regardless of one's marital status?",
    options: ["Yes", "No"],
  },
  {
    type: "number-radio",
    label:
      "How would you rate the effectiveness of community support initiatives for financial literacy? ",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label:
      "Do you regulate the collection and use of personal information by FinTech companies?",
    options: ["Yes", "No"],
  },
  {
    type: "number-radio",
    label:
      "What level of priority do you assign to enforcing data privacy protection regulations for FinTech companies?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label:
      "Do you have policies on the use of unique identifiers for FinTech users across different companies?",
    options: ["Yes", "No"],
  },

  {
    type: "radio",
    label:
      "Are there strong policies governing the management of international user data for FinTech companies?",
    options: ["Yes", "No"],
  },
  {
    type: "number-radio",
    label:
      "To what extent do you enforce regulations regarding the frequency of data recording and updating?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "radio",
    label:
      "Are there strong policies in place requiring annual reporting by FinTech companies?",
    options: ["Yes", "No"],
  },
  {
    type: "number-radio",
    label:
      "What is the effectiveness of standards for reporting the actual usage of FinTech services?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
  {
    type: "number-radio",
    label:
      "To what extent do you monitor the retention rates of users in FinTech companies?",
    options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
  },
];

export const serviceProviderSurveyQuestions: Question[] = [
  {
    type: "radio",
    label:
      "What percentage of your users have access to combined banking, financial, and digital services?",
    options: ["0-25%", "26-50%", "51-75%", "76-100%"],
  },
  {
    type: "radio",
    label:
      "How is the distribution of your users between rural and urban areas?",
    options: [
      "Mostly rural (75%+ rural, 25% urban)",
      "Balanced (50% rural, 50% urban)",
      "Mostly urban (75% urban, 25% rural)",
      "Uncertain / No data",
    ],
  },
  {
    type: "checkbox",
    label:
      "What is the age distribution of your app users? (Select all that apply)",
    options: ["Under 18", "18-25", "26-35", "36-45", "46-50", "Above 60"],
  },

  {
    type: "radio",
    label: "591",
    options: [
      "Below $100",
      "$100-$500",
      "$501-$1000",
      "$1001-$5,000",
      "Above $500",
      "Prefer not to say",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you verify the accuracy of user identification and bio data? (Select all that apply)",
    options: [
      "National ID",
      "Biometric authentication",
      "Cross-checking with financial institutions",
      "Document verification (eg, passports, driver's licenses)",
      "",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What measures are in place to handle inconsistent data? (Select all that apply)",
    options: [
      "Automated validation checks",
      "Manual data reviews",
      "Prompting users to update incorrect/missing information",
      "Ignoring inconsistent data in reports",
      "Other",
    ],
  },

  {
    type: "checkbox",
    label:
      " How do you cater to different demographics? (Select all that apply)",
    options: [
      "Language translation services",
      "Customized financial products for different user groups",
      "Region-specific and transaction options",
      "Accessibility features (eg; support for disabled users)",
      "Other",
    ],
  },
  {
    type: "radio",
    label:
      "What percentage of users actively use your platform compared to total enrolled users?",
    options: ["0-25%", "26-50%", "51-75%", "76-100%"],
  },

  {
    type: "checkbox",
    label:
      "What is your preferred mode of communication with clients? (Select all that apply)",
    options: [
      "SMS",
      "Email",
      "Push notifications",
      "In-app purchases",
      "Call center support",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you verify if clients have existing financial obligations? (Select all that apply)",
    options: [
      "Credit Bureau checks",
      "Bank account transaction analysis",
      "Self-declaration from users",
      "Other",
    ],
  },
  // to be fixed later
  {
    type: "checkbox",
    label:
      "What percentage of users use different platforms? (Total should be 100%)",
    options: ["Android", "iOS", "USSD", "web"],
  },
  {
    type: "radio",
    label:
      "Do you offer services tailored to users with different credit scores?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label:
      "How do you address economic inequality through your financial products? (Select all that apply)",
    options: [
      "Low-interest loans for low-income users",
      "Microfinance and small loan schemas",
      "Financial literacy programs",
      "No or low transaction fees for underprivileged users",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What are the common barriers to financial inclusion faced by your users? (Select all that apply)",
    options: [
      "Lack of required identification documents",
      "Poor digital literacy",
      "High transaction costs",
      "Limited financial knowledge",
      "Lack of access to mobile devices or internet",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you track and analyze user churn trends? (Select all that apply)",
    options: [
      "Tracking login and transaction frequency",
      "Analyzing feedback adn complaints",
      "Sending exit surveys to inactive users",
      "Predictive analytics to forecast churn risk",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What strategies do you have for financial literacy improvement? (Select all that apply)",
    options: [
      "Free educational content in the app",
      "Financial advisory services",
      "Partnerships with educational institutions",
      "Webinars and training sessions",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you verify the preferred contact communication type of clients? (Select all that apply)",
    options: [
      "Asking during sign-up",
      "Allowing users to update preferences in the app",
      "Tracking response rates from different channels",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you tailor financial services to specific needs of different regions? (Select all that apply)",
    options: [
      "Adjusting pricing based on local economic conditions",
      "Offering region-specific payment methods",
      "Partnering with local financial institutions",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What resources and support do you provide to facilitate app usage? (Select all that apply)",
    options: [
      "Customer support via call, chat, or email",
      "In-app tutorials and help center",
      "Community forums and peer support groups",
      "Dedicated financial education programs",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you track and analyze user churn trends? (Select all that apply)",
    options: [
      "Tracking login and transaction frequency",
      "Analyzing feedback and complaints",
      "Sending exit surveys to inactive users",
      "Predictive analytics to forecast churn risk",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What strategies do you have for financial literacy improvement? (Select all that apply)",
    options: [
      "Free educational content in the app",
      "Financial advisory services",
      "Financial advisory services",
      "Webinars and training sessions",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you verify the preferred contact communication type of clients? (Select all that apply)",
    options: [
      "Asking during sign-up",
      "Allowing users to update preferences in the app",
      "Tracking response rates from different channels",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you tailor financial services to specific needs of different regions? (Select all that apply)",
    options: [
      "Adjusting pricing based on local economic conditions",
      "Offering region-specific payment methods",
      "Partnering with local financial institutions",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What resources and support do you provide to facilitate app usage? (Select all that apply)",
    options: [
      "Customer support via call, chat, or email",
      "In-app tutorials and help center",
      "Community forums and peer support groups",
      "Dedicated financial education programs",
      "Other",
    ],
  },
  //
];

export const developerSurveyQuestions: Question[] = [
  {
    type: "checkbox",
    label:
      "Which privacy protection regulations do you enforce? (Select all that apply)",
    options: [
      "General Data Protection Regulation (GDPR)",
      "Payment Card Industry Data Security Standard (PCI DSS)",
      "Payment Card Industry Data Security Standard (PCI DSS)",
      "ISO 27001",
      "None",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "Which protocols do you follow to prevent duplicate user registrations? (Select all that apply)",
    options: [
      "Unique identifiers (e.g., National ID, Social Security Number)",
      "Biometric verification",
      "Phone number/email verification",
      "IP address tracking",
      "Device fingerprinting",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "Which measures do you use to ensure the uniqueness and security of each user? (Select all that apply)",
    options: [
      "Multi-factor authentication (MFE)",
      "Biometric authentication (e.g., fingerprint, facial recognition)",
      "Strong password enforcement",
      "CAPTCHA or bot detection mechanisms",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What measures are in place to ensure the confidentiality of user financial transactions? (Select all that apply)",
    options: [
      "End-to-end encryption",
      "Tokenization",
      "Multi-factor authentication (MFE)",
      "User consent and authorization procedures",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "Which security measures are used to protect user personal information? (Select all that apply)",
    options: [
      "Data encryption",
      "Secure data storage and restricted access",
      "Regular security audits",
      "Which security measures are used to protect user personal information? (Select all that apply)",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "What encryption protocols do you use for storing sensitive user data? (Select all that apply)",
    options: [
      "AES-256",
      "RSA encryption",
      "TLS/SSL for data transmission",
      "Hashing and slating for password",
      "Other",
    ],
  },
  {
    type: "radio",
    label:
      "Do you enforce strong authentication methods (e.g., MFA, biometrics)?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label: "How often do you conduct security audits and penetration testing?",
    options: ["Monthly", "Quarterly", "Bi-annually", "Annually", "Never"],
  },
  {
    type: "radio",
    label: "Do you have a policy on tracking and updating user activity data?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label:
      "How do you handle missing or inconsistent user demographic data? (Select all that apply)",
    options: [
      "Data validation and standardization",
      "Requesting user updates via app notifications",
      "Automated error detection and correction",
      "Ignoring missing fields in analysis",
      "Other",
    ],
  },
  {
    type: "checkbox",
    label:
      "How do you ensure accessibility for users with disabilities? (Select all that apply)",
    options: [
      "Support for screen readers",
      "Voice command functionality",
      "High-contrast and text-to-speech options",
      "Keyboard-only navigation support",
      "Other",
    ],
  },
  {
    type: "radio",
    label:
      "Do you track user engagement levels to improve financial literacy resources?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "Are there guidelines to regulate tracking and reporting of user behavior?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    label:
      "How often do you analyze user churn rates to improve financial inclusion?",
    options: ["Monthly", "Quarterly", "Bi-annually", "Annually", "Never"],
  },
  {
    type: "radio",
    label:
      "Do you use AI or machine learning models for risk assessment and fraud detection?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label:
      "What methods do you use to verify user identity and prevent fraud? (Select all that apply)",
    options: [
      "Know your Customer (KYC) verification",
      "Biometric verification",
      "One-time password (OTP) verification",
      "AI-based fraud detection algorithms",
      "Other",
    ],
  },
  {
    type: "radio",
    label:
      "Do you provide features that support unbanked or underbanked populations?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label:
      "How do you incorporate country-specific regulations into FinTech services? (Select all that apply)",
    options: [
      "Compliance with national banking regulations",
      "Localization of user policies and terms",
      "integration with regional financial networks",
      "Other",
    ],
  },
  {
    type: "radio",
    label:
      "Do you ensure compliance with age restrictions in FinTech services?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    label:
      "How do you assess the fairness of credit score-based financial products? (Select all that apply)",
    options: [
      "Periodic fairness audits",
      "AI-based bias detection",
      "Transparency in scoring methodologies",
      "User complaint and appeal mechanisms",
      "Other",
    ],
  },
];

// export const formDataTemplate = [
//   {
//     type: "checkbox",
//     label: "",
//     options: ["Other"],
//   },
//   {
//     type: "radio",
//     label: "",
//     options: ["Yes", "No"],
//   },

//   {
//     type: "number-radio",
//     label: "",
//     options: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
//   },
//   //
// ];
