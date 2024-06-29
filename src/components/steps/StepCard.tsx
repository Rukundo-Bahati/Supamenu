import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  step: string;
  text: string;
  icon: IconType;
}

const StepCard = ({ step, text, icon: Icon }: Props) => {
  return (
    <Link to="/login">
    <div className="w-60 h-48 rounded bg-white p-4 shadow-lg cursor-pointer shadow-gray-200 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <Icon className="text-amber-500 h-12 w-8" />
        <h1 className="font-semibold">{step}</h1>
        <p className="w-40">{text}</p>
      </div>
    </div>
    </Link>
  );
};

export default StepCard;
