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
