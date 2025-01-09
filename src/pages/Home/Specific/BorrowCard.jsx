const BorrowCard = ({ pass }) => {
  const { bookName, email, date, userCategory } = pass;

  return (
    <div className="flex justify-center">
      <div className="max-w-md mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-xl overflow-hidden shadow-lg">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{bookName}</h2>
            <div className="bg-white text-green-500 rounded-full px-3 py-1 text-sm font-semibold">
              {userCategory}
            </div>
          </div>
          <p className="text-gray-200 text-lg mb-4">{email}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white text-blue-500 rounded-full px-3 py-1 text-sm font-semibold">
              Borrow Date
            </div>
            <div className="text-white text-lg font-semibold">{date}</div>
          </div>
        
       
        </div>
      </div>
    </div>
  );
};

export default BorrowCard;