import { TiTick } from "react-icons/ti";

const ResultInstructions = () => {
  return (
    <div className="grid grid-cols-3 mb-2 mx-6 gap-4 bg-gray-100 rounded-md">
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
        <div className="w-5 h-5 rounded-full border bg-red-300"></div>
        <div className="">wrong answer selected</div>
      </div>
    </div>
  );
};

export default ResultInstructions;
