import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";

export default function Dashboard() {
  return (
    <main className=" max-w-screen-lg mx-auto min-h-screen flex flex-col bg-background   overflow-x-hidden">
        <Navbar/>

        <Search/>

        <Card title="Sample Title" description="Sample Description" location="Sample Location" />
    </main>
  );
}