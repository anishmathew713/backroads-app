import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook-f" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 4, href: "https://www.youtube.com", icon: "fab fa-youtube" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    country: "china",
    duration: "2 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "august 26th, 2045",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    country: "china",
    duration: "12 days",
    price: "from $2100",
  },
  {
    id: 3,
    image: tour3,
    date: "august 26th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    country: "indonesia",
    duration: "9 days",
    price: "from $2100",
  },
];
