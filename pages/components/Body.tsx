import Buttons from "./Buttons";
import Info from "./Info";

export default function Body() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="h-[100px] w-[60%] lg:w-[40%] flex gap-6 flex-col">
        <Info />
        <Buttons />
      </div>
    </div>
  )
}