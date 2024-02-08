import { Link } from "react-router-dom";
import card from "./sitesData.json";

const SitesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {card.map((data) => (
        <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg relative">
          <Link to={`/details/${data.id}`}>
            <img className="w-full h-64 object-cover" src={data.images} alt={data.location} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.location}</div>
              <p className="text-gray-700 text-base">{data.version}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {data.date.map((date, dateIndex) => (
                <span
                  key={dateIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {date}
                </span>
              ))}
            </div>
            {/* Apply the Tailwind classes for specific styling */}
           
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SitesGrid;
