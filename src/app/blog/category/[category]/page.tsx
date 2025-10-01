import { posts } from "../../posts";
import Link from "next/link";

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const filteredPosts = posts.filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );

  if (!filteredPosts.length) return <h2 className="text-red-500">No posts found in {category}</h2>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category} Posts</h1>
      <ul className="flex flex-col gap-2">
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
