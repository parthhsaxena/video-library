import React, { useEffect, useState } from "react";
import Card from "./Card";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => searchRes(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const searchRes = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/search/shows?q=" + searchText
    );
    const json = await data.json();
    setSuggestions(json);
    // console.log(suggestions);
  };

  return (
    <div className="p-10">
      <div className="text-center">
        <h1 className="font-bold text-2xl">Enter the search term...</h1>
        <div className="p-4">
          <input
            type="text"
            className="rounded-2xl p-4 w-96 border border-gray-700 shadow-md shadow-gray-400"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        {suggestions?.map(({ show }) => (
          <Card key={show.id} showData={show} />
        ))}
      </div>
    </div>
  );
};

export default Search;
