import { useState, useEffect } from "react";

const useSearch = () => {
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
  return suggestions;
};

export default useSearch;
