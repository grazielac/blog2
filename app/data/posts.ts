import lovenote from "../../public/lovenote.png";
import { StaticImageData } from "next/image";
import fit from "../../public/fit.jpg";
import letter from "../../public/letter.jpg";
import painting from "../../public/painting.jpg";
import pilates from "../../public/pilates.jpg";
import travel from "../../public/travel.jpg";





interface Post {
  slug: string;
  title: string;
  image: StaticImageData;
  description: string;
  author: string;
  date: string;
  content?: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to Barcelona",
    image: lovenote,
    description: "Hello world u there",
    author: "Graziela Caringal",
    date: "October 25, 2025",
    content: "Full content here...",
    tags: ["TRAVEL"],
  },
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to barcelona",
    image: fit,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["TRAVEL", "PERSONAL"],
    content: "Full blog content goes here...",
  },
  {
    slug: "im-broke",
    title: "im broke",
    image: painting,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["WORK", "CAREER"],
    content: "Full content here...",
  },
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to barcelona",
    image: letter,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["CREATIVE", "PERSONAL"],
    content: "Full content here...",
  },
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to barcelona",
    image: travel,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["LIFESTYLE", "PERSONAL"],
    content: "Full content here...",
  },
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to barcelona",
    image: lovenote,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["TRAVEL", "PERSONAL"],
    content: "Full content here...",
  },
  {
    slug: "my-trip-to-barcelona",
    title: "My trip to barcelona",
    image: pilates,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["TRAVEL", "PERSONAL"],
    content: "Full content here...",
  },
];
