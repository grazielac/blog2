import { StaticImageData } from "next/image";
import letter from "../../public/letter.jpg";
import painting from "../../public/painting.jpg";
import pilates from "../../public/pilates.jpg";
import interior from "../../public/interior.jpg";
import travel from "../../public/travel.jpg";
import fashion from "../../public/fashion.jpg";

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
    slug: "writing-personal-letters",
    title: "Writing Personal Letters in a Digital Age",
    image: letter,
    description:
      "Tips for crafting heartfelt letters that leave a lasting impression.",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["personal"],
    content: "Full content here...",
  },
  {
    slug: "travel-guide-europe",
    title: "The Ultimate Travel Guide to Europe",
    image: travel,
    description: "Hey playboy it's about time",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["travel"],
    content: "Full content here...",
  },
  {
    slug: "morning-pilates-routine",
    title: "My Morning Pilates Routine",
    image: pilates,
    description:
      "Discover how a 20-minute Pilates routine keeps me energized and focused every day.",
    author: "Graziela Caringal",
    date: "October 24, 2025",
    tags: ["personal"],
    content: "Full content here...",
  },
  {
    slug: "interior-design-ideas",
    title: "Interior Design Ideas for Small Spaces",
    image: interior,
    description:
      "Maximize your space with clever design tips and creative decor ideas.",
    author: "Graziela Caringal",
    date: "October 25, 2025",
    content: "Full content here...",
    tags: ["interior"],
  },
  {
    slug: "fall-fashion-trends-2025",
    title: "Fall Fashion Trends 2025",
    image: fashion,
    description:
      "Explore the hottest trends this fall, from cozy layers to statement accessories.",
    author: "Graziela Caringal",
    date: "October 26, 2025",
    tags: ["fashion"],
    content: "Full blog content goes here...",
  },
  {
    slug: "classical-painting",
    title: "im broke",
    image: painting,
    description:
      "A guide to innovative painting styles and techniques for artists at any level.",
    author: "Graziela Caringal",
    date: "October 27, 2025",
    tags: ["creative"],
    content: "Full content here...",
  },

];
