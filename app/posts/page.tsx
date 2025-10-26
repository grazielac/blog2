import BlogPost from "../blog/[slug]/page";

export default function BlogPostPage({ params }: { params: { postId: string }}) {
    return <BlogPost postId={params.postId} />;
}