import Card from "./Card";
import useLibData from "../utils/useLibData";

const Body = () => {
  const shows = useLibData();

  return (
    <div>
      <div className="p-24">
        <div className="text-7xl text-slate-700 pb-4">VideoLibrary</div>
        <p className="text-slate-600">
          The biggest "VideoLibrary" on the internet.
        </p>
      </div>
      <div className="flex flex-wrap p-12">
        {shows.map((s) => (
          <Card key={s.id} showData={s} />
        ))}
      </div>
    </div>
  );
};

export default Body;
