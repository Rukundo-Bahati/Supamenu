import StepCard from "./StepCard";
import { FaDesktop, FaUserEdit, FaUtensils } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-96 ">
      <h1 className="text-black text-center font-semibold text-4xl my-8">
        How it works
      </h1>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <StepCard
          step="Step 1"
          text="Register your restaurant"
          icon={FaUserEdit}
        />
        <StepCard
          step="Step 2"
          text="Create your restaurant profile and create menu items"
          icon={FaUtensils}
        />
        <StepCard
          step="Step 3"
          text="Start receiving orders"
          icon={FaDesktop}
        />
      </div>
    </div>
  );
};

export default Steps;
