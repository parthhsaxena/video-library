import React from "react";

const Card = () => {
  return (
    <div className="p-12">
      <ul className="bg-gray-200 rounded-xl h-36 w-80 p-2">
        <li className="text-2xl text-bold text-gray-600"></li>
        <li className="text-lg text-gray-600">Genres: </li>
        <li className="text-lg text-gray-600">Language: </li>
        <li className="text-lg text-gray-600">Premiered: </li>
      </ul>
    </div>
  );
};

export default Card;
