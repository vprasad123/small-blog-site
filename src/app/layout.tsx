import Link from "next/link";
import React from "react";

export const metadata = {
    title:"My Blog",
    descrption:"A simple blog built with Next.js",
};
export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body>
        <nav style={{padding:"10px", borderBottom:"1px solid #ccc"}}>
          <Link href="/" style={{marginRight:"15px"}}>Home</Link>
          <Link href="/about" style={{marginRight:"15px"}}>About</Link>
          <Link href="/posts">Blog</Link>
        </nav>
        <main style={{padding:"20px"}}>{children}</main>
      </body>
    </html>
  )
}