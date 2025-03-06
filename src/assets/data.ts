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
