import { Link, useParams } from "react-router-dom";

const SpecificCard = ({ item }) => {
  const { id } = useParams();
  console.log(item);
  const { _id, image, name, author, category, rating, quantity } = item;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-8">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt=""
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">Author: {author}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
            Quantity: {quantity}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
            Rating: {rating}
          </div>
          <Link
            to={`/moredetail/${_id}`}
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecificCard;