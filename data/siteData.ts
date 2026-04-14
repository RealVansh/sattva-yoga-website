export type Testimonial = {
  name: string;
  rating: number;
  comment: string;
};

export type YogaClass = {
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  batches?: {
    id: string;
    name: string;
    time: string;
    mode?: "offline" | "online" | "online-offline";
    status: "active" | "forming" | "custom";
  }[];
};

export const testimonials: Testimonial[] = [
  {
    name: "Keerthana V",
    rating: 5,
    comment:"Iam truly grateful to have such an amazing yoga teacher. Her guidance, patience and positive energy make every session feel calm and meaningful. she explain each posture clearly and always motivate us to improve at our own pace without pressure. Because of her support, I feel more flexible, confident and peaceful both physically and mentally."
  },
  {
    name: "Eddys Thottam",
    rating: 5,
    comment:"Jayanthi mam is really friendly and a caring person. My mom joined yoga because of health issues, Jayanthi mams guidance and care, my mom pain reducing day by day."  
  },
  {
    name: "Ragupathy Ram",
    rating: 5,
    comment:
      "Very cool yoga trainer Always explains the asanas and its benefits related to health. Multilingual and way of training is good 👍🏻 If you have any body problems, she Used to consider our request and will make asana which is the solution to your problems",
  },
  {
    name: "Rajaram Doss",
    rating: 5,
    comment: "Easy-to-follow instructions Feeling stronger and more flexible now"
    },
  {
    name: "Anugraha ajay prathapp",
    rating: 5,
    comment:
      "I feel this is the best decision I made after joining sattva yoga classes.....I joined for my neck and back pain....I have been coming for 3 months....now I feel relieved from neck and back pain and my body becomes more flexible. Jayanthi is excellent.",
  },
  {
    name: "Lokeshwari .S",
    rating: 5,
    comment:
      "I'm so glad I found this amazing yoga class in Tambaram. The certified instructor is incredibly knowledgeable, sharing insightful benefits of each asana. What impresses me most is the personalized attention given to every student, offering customized yoga routines tailored to individual needs. Customized yoga for thyroid, knee, sinus problem and lot more results can be noticed in months. If you're searching for a yoga class near Tambaram, look no further! Just go for itt!!",
  },
  {
    name: "Vishal Saagar",
    rating: 5,
    comment:
      "I joined this yoga class for shoulder pain and have seen great improvement. I feel more flexible, relaxed, and refreshed after every session. The session timing options are very convenient. Jayanthi mam provides excellent guidance and motivation.",
  },
  {
    name: "dhivya shankar",
    rating: 5,
    comment:
      "I should thank jayanthi mam, because before joining her yoga class, i had cervical issues, due to this i had tinkling on my nerves of both the sides of head. Doctor advised me take a cervical spine MRI, but i joined a yoga class, after the 5th class, that pain went away completely. Due to yoga my posture got corrected, and all the symptoms gone. Yoga should be very mandatory in everyday life.",
  },
  {
    name: "Pattath KRISHNAN PRAKASH",
    rating: 5,
    comment:
      "A good place to learn professional yoga. The timings are also flexible and the instructor is kind enough and patient to teach from basic to advanced level. Yoga can improve flexibility, strength, and balance, while reducing stress.",
  },
  {
    name: "selva rani",
    rating: 5,
    comment:
      "A very nice place to learn yoga.. from basic to advance asanas mam teach us with very clearly and step by step according to our flexibility.. I really feels so active after joining yoga.. Specifically mam gives different flow of stretches everyday to strengthen us.. so grateful mam..",
  },
  {
    name: "Kavitha Shankar",
    rating: 5,
    comment:
      "This is the first time I am taking yoga classes. Jayanthi ma’am was very friendly and made me feel comfortable. I had specific health issues and within 45 days of joining I saw lots of positive changes. I will 10/10 recommend to anyone.",
  },
  {
    name: "Dora Malcolm",
    rating: 5,
    comment:
      "I am very grateful to Jayanti Mam for all her sessions and understanding about her students needs. In one and half months I was able to sit and got the confidence to start learning Veenai. I am continuing my classes with Mam... In short I am learning every day.. how my body listens to my mind. Thanks to Mam..her family..and other batch mates..who encourage us on a daily basis.",
  },
  {
    name: "Shofiya R",
    rating: 5,
    comment:
      "I'm attending sattva yoga here for past 1 year I was suffering from health issues and mainly thyroid problem now I feel much better and my thyroid pain have disappeared in just few months Thank you so much mam👍 ...",
  },
];

export const classes: YogaClass[] = [
  {
    title: "Personal Foundations",
    description:
      "Highly recommended for beginners. Learn the absolute basics, correct your alignment, and build confidence 1-on-1 before joining a group.",
    duration: "60 minutes",
    benefits: ["1 on 1 Guidance", "Perfect for Beginners", "Paced to You"],
    batches: [
      {
        id: "personal-flex",
        name: "Personal Session",
        time: "Flexible time of your choice",
        mode: "online-offline",
        status: "custom",
      },
    ],
  },
  {
    title: "Daily Group Classes",
    description:
      "Join one of our three weekday batches (Monday to Friday). A consistent, grounded practice designed to build strength, flexibility, and routine alongside a supportive community.",
    duration: "60 minutes",
    benefits: ["3 Weekday Batches", "Community Support", "Builds Consistency"],
    batches: [
      {
        id: "daily-morning",
        name: "Morning Batch",
        time: "6:30 AM - 7:30 AM",
        mode: "online-offline",
        status: "active",
      },
      {
        id: "daily-ladies",
        name: "Ladies Only Batch",
        time: "10:50 AM - 11:50 AM",
        mode: "online-offline",
        status: "active",
      },
      {
        id: "daily-evening",
        name: "Evening Batch",
        time: "5:00 PM - 6:00 PM",
        mode: "online-offline",
        status: "forming",
      },
    ],
  },
  {
    title: "Weekend Batch",
    description:
      "A dedicated weekend session specifically tailored for busy professionals or students who can only commit to practice on Saturdays and Sundays.",
    duration: "60 minutes",
    benefits: ["Weekend Only", "Deep Relaxation", "Perfect for Busy Schedules"],
    batches: [
      {
        id: "weekend-morning",
        name: "Saturday & Sunday",
        time: "8:00 AM - 9:00 AM",
        mode: "online-offline",
        status: "active",
      },
    ],
  },
  {
    title: "Prenatal & Postnatal (Pregnancy) Yoga",
    description:
      "A soothing and highly specialized practice focused on breathwork, gentle mobility, and preparing the body for childbirth in a perfectly safe environment.",
    duration: "60 minutes",
    benefits: ["Safe & Gentle", "Relieves Back Pain", "Prepares for Birth"],
    batches: [
      {
        id: "prenatal-flex",
        name: "Personalized Session",
        time: "Flexible time of your choice",
        mode: "online-offline",
        status: "custom",
      },
    ],
  },
];
