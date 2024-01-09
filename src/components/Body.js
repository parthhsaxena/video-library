import React, { useEffect } from "react";
import Card from "./Card";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/shows");
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <div className="p-24">
        <div className="text-7xl text-slate-700 pb-4">VideoLibrary</div>
        <p className="text-slate-600">
          The biggest "VideoLibrary" on the internet.
        </p>
      </div>
      <div className="flex flex-wrap p-12">
        <Card />
      </div>
    </div>
  );
};

export default Body;
