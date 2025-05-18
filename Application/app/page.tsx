import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Main from "@/Components/Main";
import Navbar from "@/Components/Navbar";



export default function Home() {
  return (
 <main className=" max-w-screen-lg mx-auto min-h-screen flex flex-col bg-background overflow-x-hidden">
  <Navbar/>
  <Hero/>
  <Main/>
  <Footer/>

 </main>
  );
}
