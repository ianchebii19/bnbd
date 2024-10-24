import Image from "next/image";
import Search from "./components/Navbar/Search";
import Menu from "./components/Navbar/Menu";

export default function Home() {
  return (
    <div>

<div className="block sm:hidden">
      <div className="flex justify-center space-x-6">
    <Search/>
  </div>
  
    </div>
    <div className="flex flex-row ">
    <Menu/>
  </div>
    </div>
   
    
  );
}
