export default function NavContent() {

return (
  <nav className=" w-[50%] xl:w-[38%] flex justify-between items-center p-4">
    <p className=" font-bold text-2xl text-[#FFF]">Obras destacadas</p>
    <div className=" flex space-x-4">
      <button className=" font-medium text-sm text-[#BCBCBC]">Music</button>
      <button className=" font-medium text-sm text-[#BCBCBC]">Collectibles</button>
      <button className=" font-medium text-sm text-[#BCBCBC]">Utility</button>        
    </div>
  </nav>
);
};
