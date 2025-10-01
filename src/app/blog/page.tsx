"use client";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
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
