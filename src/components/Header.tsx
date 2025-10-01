"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-red-950">My Blog</h1>
            <nav className="flex gap-4">
               {links.map((link)=>{
                 const isActive = pathname === link.href;
                 return(
                    <Link
                       key={link.href}
                       href={link.href}
                       className={`px-2 py-1 rounded ${isActive ? "bg-blue-500": "text-gray-700 hover:bg-gray-200"}`}
                    >
                        {link.name}
                    </Link>
                 );
               })}
            </nav>

          </div>
        </header>
    )
}