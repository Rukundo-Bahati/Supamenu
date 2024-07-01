interface Props {
  bg1: string;
  bg2: string;
  bg3: string;
}

const ProfileCard = ({ bg1, bg2, bg3 }: Props) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg h-full mt-3">
      <h1 className="font-semibold mb-3 text-center">
        1.Create your restaurant profile
      </h1>
      <div className="flex gap-3 mb-3">
        <div
          className={`h-10 w-10 ${bg1} text-white rounded-3xl items-center flex justify-center text-xl`}
        >
          1
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold">Restaurant information</h1>
          <p>restaurant names,address,details,owner details</p>
        </div>
      </div>
      <div className="flex gap-3 mb-3">
        <div
          className={`h-10 w-10 ${bg2} text-white rounded-3xl items-center flex justify-center text-xl`}
        >
          2
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">Restaurant Type & timings</h1>
          <p>Establishment & cuisine type, opening hours</p>
        </div>
      </div>
      <div className="flex gap-3 mb-3">
        <div
          className={`h-10 w-10 ${bg3} text-white rounded-3xl items-center flex justify-center text-xl`}
        >
          3
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">Create your menu</h1>
          <p>menu,restaurant,food images</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
