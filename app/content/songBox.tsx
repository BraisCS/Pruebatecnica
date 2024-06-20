import Image from "next/image";

export default function SongBox() {
return (
<article className="mb-20 w-48 xl:w-60 h-72 rounded-3xl flex flex-col justify-start items-start bg-[#211626] group cursor-pointer">
    <Image src={"/song.svg"} alt="song track" height={150} width={150} className="w-full" />
    <div className="w-full h-full flex flex-col justify-start items-center p-5 relative">
        <section className="h-full w-full flex flex-col justify-center items-start">
            <p className="font-bold text-[#FFF] text-xl">Jaime Cantante</p>
            <div className="w-full flex flex-row justify-start items-center gap-2">
                <Image src={"/userProffile.svg"} alt="User image" height={50} width={50} className="h-4 w-4" />
                <p className="font-normal text-[#FFF] text-sm">@johnti60</p>
            </div>
        </section>
        <section className="w-[90%] py-2 text-center rounded-2xl flex flex-row justify-evenly items-center z-50 bg-[#322638] text-[#FFF] relative opacity-0 group-hover:opacity-100 bottom-[-15%]">
            <Image src={"iconAgreement.svg"} alt="Icon 1" height={50} width={50} className="h-5" />
            <Image src={"iconShopping.svg"} alt="Icon 2" height={50} width={50} className="h-5" />
            <Image src={"iconLike.svg"} alt="Icon 3" height={50} width={50} className="h-5" />
        </section>
    </div>
</article>

  );
}

