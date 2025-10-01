import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function RootLayout ({ children }: {children:React.ReactNode}){
     return(
       <html lang="en">
          <body className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto p-4">{children}</main>
            <Footer />
          </body>
       </html>
     )
}