import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthProvider';
import { BaseUrl } from '../Constant/ApiDoamin';

const Dashboard = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalBorrowedBooks, setTotalBorrowedBooks] = useState(0);
  const [donate, setDonate] = useState(0);
  const {user}=useContext(AuthContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const allBooksResponse = await axios.get(`${BaseUrl}all-books`);
        const borrowedBooksResponse = await axios.get(`${BaseUrl}borrow`);
        const donateResponse = await axios.get(`${BaseUrl}donate`);
        

        setTotalBooks(allBooksResponse.data.length);
        setTotalBorrowedBooks(borrowedBooksResponse.data.length);
        setDonate(donateResponse.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="w-full">
        <div className="bg-white rounded-3xl p-8 mb-5">
          <h1 className="text-3xl font-bold mb-10">Dashboard development for the book inventory</h1>
          <div className="flex items-center justify-between">
         
          
          </div>

          <hr className="my-4" />

          <div className="grid grid-cols-1 gap-x-20">
            <div>
              <h2 className="text-2xl font-bold mb-4">Stats</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="p-4 bg-green-100 rounded-xl">
                    <div className="font-bold text-xl text-gray-800 leading-none">User {user.displayName}</div>

                    <div>
                 
                   <h2>Email: {user.email}</h2>
                    </div>
                  
                  </div>
                </div>

                <div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">{totalBooks}</div>
                  <div className="mt-2">Total Books</div>
                </div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">{totalBorrowedBooks}</div>
                  <div className="mt-2">Borrowed Books</div>
                </div>
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">{donate}</div>
                  <div className="mt-2">Borrowed Books</div>
                </div>
                </div>
                {/* <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">20</div>
                  <div className="mt-2">Tasks finished</div>
                </div> */}
                <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div className="font-bold text-2xl leading-none">5,5</div>
                  <div className="mt-2">Tracked hours</div>
                </div>
                <div className="col-span-2">
                  <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">Your daily plan</div>
                    <div className="mt-2">5 of 8 completed</div>
                  </div>
                </div>
                {/* Add the new stats */}
               
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
