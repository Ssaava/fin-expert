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
