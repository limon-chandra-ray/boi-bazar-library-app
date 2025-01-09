import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import DonateCard from "./DonateCard";

const Donate = () => {
  const donateItems = useLoaderData();
  console.log(donateItems)

  return (
    <div>
      <Navbar />
      <h2 className="text-4xl pt-24 text-center bg-pink-200 text-teal-300 font-bold">
        Donation Book List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-4 my-4 py-10">
        {donateItems.map((item, index) => (
          <DonateCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Donate;