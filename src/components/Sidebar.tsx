"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = ["Tech", "Life", "Travel"];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white shadow-md p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">Categories</h3>
      <ul className="flex flex-col gap-2">
        {categories.map((cat) => {
          const catPath = `/blog/category/${cat.toLowerCase()}`;
          const isActive = pathname.startsWith(catPath);
          return (
            <li key={cat}>
              <Link
                href={catPath}
                className={`block px-2 py-1 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              >
                {cat}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
