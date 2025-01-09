import { useLoaderData } from "react-router-dom";
import CardShop from "./CardShop";
import Navbar from "../shared/Navbar";

const Shop = () => {
  const all=useLoaderData();
 
  return (
      <div>
        <Navbar/>
        <h3 className="text-center pt-24 mb-4 text-3xl bg-sky-200 text-blue-500 ">All Books</h3>
              <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-16 gap-4 my-4 py-10 ml-20 mr-4 space-y-4'>
              {
              all.map((brand,index)=>
              <CardShop
              key={index}
              brand={brand}></CardShop> )
          }

    
      </div>
    </div>
  );
};

export default Shop;