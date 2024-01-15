import React, { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [libData, setLibData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/shows");
    const json = await data.json();
    setLibData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-24">
        <div className="text-7xl text-slate-700 pb-4">VideoLibrary</div>
        <p className="text-slate-600">
          The biggest "VideoLibrary" on the internet.
        </p>
      </div>
      <div className="flex flex-wrap p-12">
        {libData.map((s) => (
          <Card key={s.id} showData={s} />
        ))}
      </div>
    </div>
  );
};

export default Body;
