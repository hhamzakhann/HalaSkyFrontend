import { poppinsFont } from "@/app/font";
import { getFaqs } from "@/app/_lib/data-service";
import FaqItem from "./faqItem";

// Sample FAQ data
const faqData = [
  {
    id: "q1",
    question: "How Can I Reset My Account Password?",
    answer: [
      'Go To The Login Page And Click On "Forgot Password."',
      "Enter Your Registered Email Address.",
      "You Will Receive An Email With Instructions To Reset Your Password.",
      "Follow The Link Provided To Create A New Password.",
    ],
  },
  {
    id: "q2",
    question: "How Do I Cancel A Booking?",
    answer: [
      "Log into your account and navigate to 'My Bookings'.",
      "Find the booking you wish to cancel and click on 'View Details'.",
      "Click on the 'Cancel Booking' button and confirm your cancellation.",
      "You will receive a confirmation email once your booking is cancelled.",
    ],
  },
  {
    id: "q3",
    question: "How Can I Apply A Discount Code To My Booking?",
    answer: [
      "During the booking process, proceed to the payment page.",
      "Look for the 'Discount Code' or 'Promo Code' field.",
      "Enter your discount code and click 'Apply'.",
      "The discount will be applied to your total if the code is valid.",
    ],
  },
  {
    id: "q4",
    question: "How Can I Report Inappropriate Content Or Comments?",
    answer: [
      "Locate the content or comment you wish to report.",
      "Click on the 'Report' button or flag icon next to the content.",
      "Select the reason for reporting from the provided options.",
      "Submit your report and our team will review it promptly.",
    ],
  },
  {
    id: "q5",
    question: "How Do I Contact Customer Support?",
    answer: [
      "You can contact our customer support team via email at support@halasky.com.",
      "For immediate assistance, use the Live Chat feature available on our website.",
      "Call our 24/7 support line at +1-800-HALASKY.",
      "Visit our Help Center for self-service options and common solutions.",
    ],
  },
];

export default async function Faqs() {
  const { data: faqs } = await getFaqs();

  if (faqs.length === 0)
    return (
      <p className="text-center w-1/2 py-4 bg-slate-200 m-auto mt-4">
        👋🏻 No FAQs founds added by the admin.
        <br /> create new FAQs by click on create FAQ button
      </p>
    );

  return (
    <div className={`space-y-4 max-w-3xl mx-auto ${poppinsFont.className}`}>
      {faqs.map((question) => (
        <FaqItem question={question} />
      ))}
    </div>
  );
}
