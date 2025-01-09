import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import SpecificCard from "./SpecificCard";
import Navbar from "../../shared/Navbar";





const Specific = () => {
    const specificbrand=useLoaderData();
    const {id}=useParams();
    const [brands,setBrands]=useState();
    console.log(specificbrand)

    useEffect(()=>{
        const findBrand = specificbrand?.filter(data => data.category ==id )
         setBrands(findBrand);
     },[id,specificbrand]);
     console.log(brands);
    return (

        
     <div>
    <Navbar className="my-4"></Navbar>
    
  
    <h1 className="my-16  mb-4 text-3xl text-center font-bold text-teal-500">Book  show:</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {
    brands?.map((item,idx)=><SpecificCard key={idx} item={item}></SpecificCard>)
 }
    </div>
 


     </div> 

    );
};

export default Specific;