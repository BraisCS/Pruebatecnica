import Image from "next/image";

export default function Navigation() {
return (
    <div className="w-[31rem] flex flex-row justify-evenly items-center text-base font-sans font-normal text-[#FFF]">
        <a href="" className="px-5 py-2 rounded-3xl hover:bg-[#54399F83] hover:text-[#D0C0FF] flex flex-row justify-start gap-2 group">
            <Image src={"homeIcon.svg"} alt="Icon home" height={50} width={50}
            className="opacity-0 group-hover:opacity-100 w-4"/>
            <span className="">Home</span>
      </a>
      <a href="" className="px-5 py-2 rounded-3xl hover:bg-[#54399F83] hover:text-[#D0C0FF]">
        Descubrir
      </a>
      <a href="" className="px-5 py-2 rounded-3xl hover:bg-[#54399F83] hover:text-[#D0C0FF]">
      Favoritos
      </a>
      <a href="" className="px-5 py-2 rounded-3xl hover:bg-[#7855DC] hover:text-[#D0C0FF]">
      Subir Obra
      </a>
      <Image
        src={"/userProffile.svg"}
        alt="User profile"
        height={40}
        width={40}
        className="ml-[0.625rem] w-10 h-10"
      />
    </div>
  );
}
