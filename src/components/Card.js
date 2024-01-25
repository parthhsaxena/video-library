import React from "react";

const Card = ({ showData }) => {
  return (
    <div className="flex p-12">
      <div>
        <img
          src={showData?.image?.original}
          alt="show-logo"
          className="h-40 rounded-md"
        />
      </div>
      <ul className="bg-gray-200 rounded-xl  w-80 p-2">
        <li className="text-2xl text-bold text-gray-600">{showData.name}</li>
        <li className="text-lg text-gray-600">
          Genres: {showData.genres.join(", ")}
        </li>
        <li className="text-lg text-gray-600">Language: {showData.language}</li>
        <li className="text-lg text-gray-600">
          Premiered: {showData.premiered}
        </li>
      </ul>
    </div>
  );
};

export default Card;
