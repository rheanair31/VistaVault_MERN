import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from "../Image.jsx";
import Categories from "./Categories.jsx";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    });
  }, []);

  const filteredPlaces = places.filter(place =>
    place.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search by address or title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Categories/>
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredPlaces.length > 0 && filteredPlaces.map(place => (
          <Link key={place._id} to={'/place/'+place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <Image className="rounded-2xl object-cover aspect-square" src={place.photos?.[0]} alt=""/>
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">Rs.{place.price}</span> per night
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}