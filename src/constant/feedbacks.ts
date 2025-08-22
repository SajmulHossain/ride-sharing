export interface ICustomerFeedback {
  name: string;
  feedback: string;
  rating: number;
  location: string;
  avatar: string;
}

export const feedbacks: ICustomerFeedback[] = [
  {
    name: "Sharif Uddin",
    feedback:
      "This app is so easy to use! I can book services instantly and the experience has been smooth every time.",
    rating: 5,
    location: "Dhaka, Bangladesh",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "Amit Chowdhury",
    feedback:
      "Very reliable platform. Pricing is transparent and I never had to worry about hidden charges.",
    rating: 4,
    location: "Chattogram, Bangladesh",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Nasir Udding",
    feedback:
      "The support team is excellent. They responded quickly and resolved my issue without hassle.",
    rating: 5,
    location: "Sylhet, Bangladesh",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "Rafiq Uddin",
    feedback:
      "Super convenient! I can manage everything in one place. Highly recommend this app.",
    rating: 5,
    location: "Rajshahi, Bangladesh",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Tanvir Ahmed",
    feedback:
      "Great experience overall. The app is fast, secure, and makes my life easier.",
    rating: 4,
    location: "Khulna, Bangladesh",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
];
