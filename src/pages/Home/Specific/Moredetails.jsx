import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../shared/Navbar";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { BaseUrl } from "../../../Constant/ApiDoamin";

const Moredetails = () => {
  const item = useLoaderData();
  const { id } = useParams();
  const { name, author, image, rating, category, desc, quantity } = item;
  const { user } = useContext(AuthContext);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`${BaseUrl}more-detail/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBookDetails(data);
      } else {
        console.error("Error fetching book details:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleBorrowBook = () => {
    setLoading(true);

    // Check if quantity is greater than 0
    if (quantity === 0) {
      Swal.fire({
        title: "Error!",
        text: "This book is currently out of stock.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      setLoading(false);
      return;
    }

    const bookName = name;
    const email = user?.email || "";
    const date = new Date().toISOString().split("T")[0];
    const userCategory = category;

    const borrowBookData = { bookName, email, date, userCategory };

    fetch(`${BaseUrl}borrow`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrowBookData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book borrowed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setIsBorrowed(true);

          // Update the quantity in the frontend
          setBookDetails(prevDetails => ({ ...prevDetails, quantity: prevDetails.quantity - 1 }));
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error borrowing book:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to borrow book. Please try again later.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-4xl pt-24 text-center bg-pink-200 text-teal-300 font-bold">
        Book Details
      </h2>
      <div className="max-w-lg mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-md overflow-hidden shadow-lg pt-24 p-6">
        <img
          className="w-full h-60 object-cover rounded-t-md"
          src={image}
          alt={name}
        />
        <div className="py-4">
          <div className="font-bold text-2xl mb-2 text-white">{name}</div>
          <p className="text-gray-200 text-lg mb-2">by {author}</p>
          <div className="border-t border-b border-gray-300 my-2"></div>
          <div className="mb-2">
            <p className="text-gray-200 text-base">Rating: {rating}</p>
            <p className="text-gray-200 text-base">Quantity: {bookDetails.quantity}</p>
            <p className="text-gray-200 text-base">Category: {category}</p>
          </div>
          <div className="border-t border-b border-gray-300 my-2"></div>
          <p className="text-gray-200 text-base">{desc}</p>
        </div>
        <div className="py-4">
          <button
            className={`btn btn-primary ${isBorrowed ? 'disabled' : ''}`}
            onClick={handleBorrowBook}
            disabled={quantity === 0 || isBorrowed || loading}
          >
            {loading ? 'Borrowing...' : (isBorrowed ? 'Borrowed' : 'Borrow Book')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moredetails;
