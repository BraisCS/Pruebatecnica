import Image from "next/image";
import SongBox from "./songBox";
import NavContent from "./navContent";

export default function Content() {
return (
    <main className="w-full flex flex-col gap-5">
        <section className="w-full pl-16 flex flex-row justify-between items-center rounded-xl bg-gradient-to-r from-[#7953DC] to-[#3AAAD9]">
            <article className="w-[43%] xl:w-[30%] 2x1:w-[25%] flex flex-col justify-start items-start gap-5">
                <h1 className="font-bold text-6xl text-[#FFF]"> Membresía <br /> Premium </h1>
                <div className="w-full flex flex-row justify-between items-center font-semibold text-xl text-[#FFF]">
                    <button className="px-5 py-2 border-[#E3E3E3] border rounded-3xl hover:bg-[#FFFFFF14] hover:border-none">Subscribirse</button>
                    <button className="px-5  py-2 border-[#E3E3E3] border rounded-3xl hover:bg-[#FFFFFF14] hover:border-none">Descubrir planes</button>
                </div>
            </article>
            <Image src={"contentImage.svg"} alt="Background Image" height={2500} width={2500} className=" w-[32rem]" />
        </section>
        <article>
            <NavContent />
        </article>
        <article className="w-full flex flex-row justify-between items-center">
            <SongBox />
            <SongBox />
            <SongBox />
            <SongBox />
            <SongBox />
        </article>
    </main>
);
}
