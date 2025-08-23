export interface IFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface IFaqGroup {
  group: string;
  items: IFaqItem[];
}

export const faqs: IFaqGroup[] = [
  {
    group: "General",
    items: [
      {
        id: 1,
        question: "What is Go Together?",
        answer:
          "Go Together is a ride-booking platform that connects riders and drivers for safe, affordable, and reliable transportation.",
      },
      {
        id: 2,
        question: "How do I create an account on Go Together?",
        answer:
          "Download the Go Together app, sign up with your mobile number or email, verify your identity, and you’re ready to go.",
      },
      {
        id: 3,
        question: "Does Go Together have a rating system?",
        answer:
          "Yes, both riders and drivers can rate each other after each trip to maintain quality and trust.",
      },
      {
        id: 4,
        question: "How does Go Together ensure fair pricing?",
        answer:
          "Go Together uses a transparent pricing model with upfront fare estimates so you always know what you’ll pay.",
      },
      {
        id: 5,
        question: "What happens during peak hours?",
        answer:
          "During high-demand times, surge pricing may apply to ensure more drivers are available for riders.",
      },
      {
        id: 6,
        question: "Can I use Go Together outside my city?",
        answer:
          "Go Together services are expanding across multiple cities. Check the app to see availability in your area.",
      },
      {
        id: 7,
        question: "Does Go Together offer referral rewards?",
        answer:
          "Yes, you can invite friends to Go Together and earn credits or discounts on your next ride.",
      },
    ],
  },
  {
    group: "Rider",
    items: [
      {
        id: 8,
        question: "How can I book a ride?",
        answer:
          "Open the Go Together app, enter your pickup and destination, choose your ride type, and confirm your booking.",
      },
      {
        id: 9,
        question: "Can I schedule a ride in advance?",
        answer:
          "Yes, Go Together allows you to schedule rides ahead of time for added convenience.",
      },
      {
        id: 10,
        question: "What if I need to cancel my ride?",
        answer:
          "You can cancel anytime before the driver arrives. A small cancellation fee may apply depending on the situation.",
      },
      {
        id: 11,
        question: "What if I left something in a car?",
        answer:
          "Use the Go Together app’s 'Lost and Found' option to report your lost item, and our team will help you connect with the driver.",
      },
    ],
  },
  {
    group: "Driver",
    items: [
      {
        id: 12,
        question: "How are drivers verified on Go Together?",
        answer:
          "All drivers go through background checks, license verification, and mandatory training before joining.",
      },
      {
        id: 13,
        question: "Can drivers choose their working hours?",
        answer:
          "Yes, drivers on Go Together have full flexibility to go online and accept rides whenever they prefer.",
      },
      {
        id: 14,
        question: "How do drivers earn money?",
        answer:
          "Drivers earn from completed rides. Earnings are credited directly to their Go Together wallet or linked bank account.",
      },
      {
        id: 15,
        question: "Can drivers see the destination before accepting a ride?",
        answer:
          "Yes, drivers on Go Together can view trip details before accepting, ensuring better transparency.",
      },
    ],
  },
  {
    group: "Payment",
    items: [
      {
        id: 16,
        question: "What payment methods does Go Together support?",
        answer:
          "You can pay with cash, credit/debit cards, or mobile wallets such as bKash, Nagad, and Rocket.",
      },
      {
        id: 17,
        question: "Is my payment information secure?",
        answer:
          "Yes, Go Together uses bank-grade encryption and trusted payment gateways to keep your financial data safe.",
      },
    ],
  },
  {
    group: "Safety",
    items: [
      {
        id: 18,
        question: "What safety measures does Go Together provide?",
        answer:
          "We provide real-time ride tracking, SOS emergency button, driver verification, and in-trip safety sharing.",
      },
      {
        id: 19,
        question: "Can I share my ride details with someone?",
        answer:
          "Yes, Go Together allows you to share your live trip status with family or friends for extra safety.",
      },
    ],
  },
  {
    group: "Support",
    items: [
      {
        id: 20,
        question: "How can I contact customer support?",
        answer:
          "You can reach Go Together support via in-app chat, email at support@gotogether.com, or call our 24/7 helpline.",
      },
    ],
  },
];
