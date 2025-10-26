import BlogPost from "../blog/[slug]/page";

export default function BlogPostPage({ params }: { params: { slug: string }}) {
    return <BlogPost />;
}