import Image from "next/image"

export default function Search() {
return (
    <div className="flex items-center bg-[#1C141E] w-[37rem] py-3 px-5 rounded-3xl">
        <Image src={"/iconSearch.svg"} alt="Icon from search" height={20} width={20} className="mr-2 w-3 h-3" />
        <input type="text" className="bg-transparent w-full outline-none text-white placeholder-gray-400"
        placeholder="Search Item, Collection and Account.."/>
    </div>
);
}
