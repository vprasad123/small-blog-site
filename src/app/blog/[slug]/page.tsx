import { posts } from "../posts";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <h2 className="text-red-500">Post not found!</h2>;

  return (
    <article className="p-4 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </article>
  );
}
