import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Fetching failed");
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({message : error.message || 'Could not fetch places'})
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if(error){
    return <Error title="An error occured" message = {error.message}/>
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => setAvailablePlaces(resData.places));
  // }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching Places"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
