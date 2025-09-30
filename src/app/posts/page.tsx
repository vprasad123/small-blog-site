const posts = [
    {id:"1", title:"Getting Started with Next.js"},
    {id:"2", title:"Understanding Dynamic Routing"},
    {id:"3", title:"Deploying Next.js to Vercel"},
];

export default function Posts(){
    return(
        <main>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </main>
    )
}