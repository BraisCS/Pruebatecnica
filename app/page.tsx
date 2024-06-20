import Content from "./content/page";
import NavTop from "./navTop/page";

export default function Home() {
  return (
    <div className=" w-[95%] ml-[2.5%]">
      <NavTop />
      <Content />
    </div>
);
}
