import { useState, useEffect } from "react";

const useLibData = () => {
  const [libData, setLibData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/shows");
    const json = await data.json();
    setLibData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return libData;
};

export default useLibData;
