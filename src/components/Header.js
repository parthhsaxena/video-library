import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-300 h-20 shadow-lg flex justify-between">
      <div className="p-5 justify-start">
        <label className="font-bold">VideoLibrary</label>
      </div>
      <div className="py-5 px-14 justify-end">
        <label className="font-bold p-6">Home</label>
        <label className="font-bold p-6">List</label>
        <label className="font-bold p-6">Search</label>
        <label className="font-bold p-6">Profile</label>
      </div>
    </div>
  );
};

export default Header;
