import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import BorrowCard from "./BorrowCard";
import Marquee from "react-fast-marquee";
//import BorrowCard from "./BorrowCard";

const BorrowBook = () => {
    const borrow=useLoaderData();
    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-5xl pt-24 text-center bg-sky-200 text-teal-300 font-bold">Borrow book list </h2>
           <h3 className="text-3xl mt-4 text-center text-sky-400 font-bold">
           <Marquee>
            <span className="text-red-500">Warning! </span> This book must be returned within 14 days
            </Marquee>
           </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-4 my-4 py-10 '>
            {
                borrow.map((pass,index)=>
            <BorrowCard
            key={index}
           pass={pass}> </BorrowCard>)
            
            }
       </div>
        </div>
    );
};

export default BorrowBook;