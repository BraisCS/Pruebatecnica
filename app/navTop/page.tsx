import Image from "next/image";
import Search from "./search";
import Buttons from "./buttons";

export default function NavTop() {
return (
    <nav className="w-full h-20 flex flex-row justify-between items-center ">
        <Image className="" src={"iconWeb.svg"} alt="Icon Web" height={150} width={150} /> 
        <Search />
        <Buttons />
    </nav>
);
  }
  