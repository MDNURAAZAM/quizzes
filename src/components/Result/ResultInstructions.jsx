import { TiTick } from "react-icons/ti";

const ResultInstructions = () => {
  return (
    <div className="grid grid-cols-3 p-3 gap-4">
      <div className=" flex items-center justify-start gap-2 p-2">
        <div className="w-5 h-5 rounded-full border bg-green-200"></div>
        <div className="">correct answer</div>
      </div>
      <div className=" flex items-center justify-start gap-2 p-2">
        <div className="">
          <TiTick className="text-primary text-2xl" />
        </div>
        <div className="">selected answer</div>
      </div>
      <div className=" flex items-center justify-start gap-2 p-2">
        <div className="w-5 h-5 rounded-full border bg-red-400"></div>
        <div className="">wrong answer selected</div>
      </div>
    </div>
  );
};

export default ResultInstructions;
