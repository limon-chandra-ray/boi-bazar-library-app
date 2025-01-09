import { Link } from "react-router-dom";

const CardShop = ({ brand }) => {
  const { name, author, rating, category, image,_id } = brand;
  return (
    <div className="flex justify-center">
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
        <div className="relative">
          <img className="w-full h-64 object-cover" src={image} alt={name} />
          <div className="absolute top-0 left-0 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-br-lg">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">Author: {author}</p>
          <div className="flex justify-between items-center mb-4">
            <div className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-sm font-semibold">
              Rating: {rating}
            </div>
            <Link
             to={`/more-detail/${_id}`}
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-sky-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;