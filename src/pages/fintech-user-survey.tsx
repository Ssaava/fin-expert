import { Question } from "@/assets/types";
import SurveyComponent from "@/components/survey/SurveyComponent";
const FintechUserSurvey = () => {
  // Dynamic questions configuration
  const questions: Question[] = [
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
      label:
        "Are transaction fees clearly communicated before making payments?",
      options: ["Yes", "No"],
    },
    {
      type: "radio",
      label:
        "Do FinTech services offer financial products tailored to your needs?",
      options: ["Yes", "No"],
    },
  ];

  return (
    <>
      <section className="pb-10">
        <SurveyComponent questions={questions} />
      </section>
    </>
  );
};

export default FintechUserSurvey;
