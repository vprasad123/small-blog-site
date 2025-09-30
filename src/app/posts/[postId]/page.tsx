type Props = {
  params: { postId: string };
};

const posts = {
  "1": { title: "Getting Started with Next.js", content: "This is an intro to Next.js..." },
  "2": { title: "Understanding Dynamic Routing", content: "Dynamic routing lets you..." },
  "3": { title: "Deploying Next.js to Vercel", content: "Deployment is easy with Vercel..." },
};

export default function PostDetails({ params }: Props) {
  const post = posts[params.postId];

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <a href="/posts">← Back to Posts</a>
    </main>
  );
}
