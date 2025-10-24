import Nav from "./components/nav";
import BlogCard from "./components/BlogCard";
import lovenote from "../public/lovenote.png";

export default function Home() {
  return (
    <>
      <Nav />
      <BlogCard
        title="How to make 3 million"
        image={lovenote} 
        description="Hey playboy it's about time"
        author="Graziela Caringal"
        date="October 24, 2025"
      />
    </>
  );
}
