import {
  whatsaap,
  printing,
  code,
  call,
  price,
  video,
  cart,
  bicycle,
  cash,
  clock,
  graphic,
  plan,
  vision,
  mission,
  list,
  eye,
  gauge,
  logo3d,
  books,
  businesscard,
  calender,
  cups,
  clocklabel,
  edupack,
  edupack2,
  flyers,
  largeformat,
  pen,
  productlabel,
  Tshirt,
} from "../public/assets";

export { whatsaap, video };

export const navLinks = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "portfolio",
    path: "#portfolio",
  },
  {
    label: "about us",
    path: "#about us",
  },
  {
    label: "services",
    path: "#services",
  },
  {
    label: "online shopping",
    path: "#",
    innerLinks: [
      { label: "register", path: "/register" },
      { label: "promo code status", path: "/promocodestatus" },
      { label: "staff only", path: "/staff" }
    ],
  },
  {
    label: "contact",
    path: "#contact",
  },
];

export const content = [
  {
    title: "mihuri ya kisasa",
    text: "ipo mihuri yenye tarehe na isiyo na tahere lakin ipo yenye umbo mbalimbali kama vile duara, square, oval ...",
  },
  {
    title: "water proof products labels",
    text: "two mihuri yenye tarehe na isiyo na tahere lakin ipo yenye umbo mbalimbali kama vile duara, square, oval nk",
  },
  {
    title: "Diary and notebook printing",
    text: "three mihuri yenye tarehe na isiyo na tahere lakin ipo yenye umbo mbalimbali kama vile duara, square, oval nk",
  },
];

export const FeaturedService = [
  {
    image: cart,
    title: "online shopping",
    description:
      "We do offer online shopping for our service, so you can make an order at anytime you wish.",
  },
  {
    image: bicycle,
    title: "delivery services",
    description:
      "We do offer online shopping for our service, so you can make an order at anytime you wish.",
  },
  {
    image: cash,
    title: "safe payment",
    description:
      "We do offer online shopping for our service, so you can make an order at anytime you wish.",
  },
  {
    image: clock,
    title: "24/7 help center",
    description:
      "We do offer online shopping for our service, so you can make an order at anytime you wish.",
  },
];

export const filterButtons = [
  "all",
  "product label",
  "T shirt",
  "receipt books",
  "watch",
  "cups and plate printing",
  "flyers and bronchures",
  "ID & BC",
  "flyers and bronchures",
  "printed pen",
  "3D",
  "calender",
  "large format",
  "software development",
];
export const portfolio = [
  {
    category: "product label",
    items: [
      {
        title: "product label",
        image: productlabel,
        disaccount: "Up to 30% off",
      },
      {
        title: "chairs label",
        image: productlabel,
        disaccount: "Up to 29% off",
      },
    ],
  },
  {
    category: "T shirt",
    items: [
      { title: "printed T-shirt", image: Tshirt, disaccount: "Up to 30% off" },
      { title: "T-shirt", image: Tshirt, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "receipt books",
    items: [
      { title: "books", image: books, disaccount: "Up to 30% off" },
      { title: "books", image: books, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "watch",
    items: [
      {
        title: "digital clock",
        image: clocklabel,
        disaccount: "Up to 30% off",
      },
      { title: "watch", image: clocklabel, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "cups and plate printing",
    items: [
      { title: "cups", image: cups, disaccount: "Up to 40% off" },
      { title: "plates", image: cups, disaccount: "Up to 42% off" },
    ],
  },
  {
    category: "flyers and bronchures",
    items: [
      { title: "flyers", image: flyers, disaccount: "Up to 30% off" },
      { title: "bronchures", image: flyers, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "ID & BC",
    items: [
      {
        title: "identification and business card",
        image: businesscard,
        disaccount: "Up to 30% off",
      },
      { title: "ID & BC", image: businesscard, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "printed pen",
    items: [
      { title: "printed pen", image: pen, disaccount: "Up to 30% off" },
      { title: "printed pen", image: pen, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "3D",
    items: [
      { title: "logo 3D", image: logo3d, disaccount: "Up to 30% off" },
      { title: "logo 3D", image: logo3d, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "calender",
    items: [
      { title: "calender", image: calender, disaccount: "Up to 30% off" },
      { title: "calender", image: calender, disaccount: "Up to 30% off" },
    ],
  },
  {
    category: "large format",
    items: [
      {
        title: "large format",
        image: largeformat,
        disaccount: "Up to 30% off",
      },
      {
        title: "large format",
        image: largeformat,
        disaccount: "Up to 30% off",
      },
    ],
  },
  {
    category: "software development",
    items: [
      { title: "web development", image: edupack, disaccount: "Up to 40% off" },
      {
        title: "mobile development",
        image: edupack2,
        disaccount: "Up to 30% off",
      },
    ],
  },
];

export const services = [
  {
    title: "online shopping",
    text: "We do offer online shopping for our services, so you can make an order at anytime you wish.",
    icon: cart,
  },
  {
    title: "graphics designing",
    text: "Logo, Newsletter, Books, Magazines, product Label and all other related services.",
    icon: graphic,
  },
  {
    title: "all printing services",
    text: "Tshirt,Caps,Mug,Pen,Flyers,Brochures,ID Cards,Certificates, Receipt Books,Blockout Banner, Backlight Banner, Rollup Banners, Menu card and much more.",
    icon: printing,
  },
  {
    title: "software development",
    text: "Designing, development and management of blogs, websites, systems and Mobile Apps.",
    icon: code,
  },
  {
    title: "stationery services",
    text: "We do supply all stationary items such as rim of paper, manila paper, Stapler, Eraser, Push-Pin, Paper Clip, Rubber Stamp, Highlighter, Sticky notes, Clipboard, Folder and much more.",
    icon: price,
  },
  {
    title: "24/7 support",
    text: "Customer satisfaction is the ultimately goal of our company. Therefore, we are always available to hear and support them.",
    icon: call,
  },
];

export const usefulLinks = [
  {
    link: "online shopping",
    path: "/",
  },
  {
    link: "edupack Tanzania",
    path: "/",
  },
  {
    link: "OBMS",
    path: "/",
  },
  {
    link: "Computer class",
    path: "/",
  },
  {
    link: "terms of service",
    path: "/",
  },
  {
    link: "privacy policy",
    path: "/",
  },
];

export const about = [
  {
    image: mission,
    icon: gauge,
    title: "our mission",
    text: "To deliver better IT services to the community through innovative graphics designing, printing and software development.",
  },
  {
    image: plan,
    icon: list,
    title: "our plan",
    text: "To be preferred as most favorable company in software and printing industry. That is going to happen by being honest and fair at all time in our dealing with customers, suppliers, competitors and each other.",
  },
  {
    image: vision,
    icon: eye,
    title: "our vision",
    text: "To focus on provision of effective, innovative and quality IT Solutions in Tanzania and Africa in General.",
  },
];
