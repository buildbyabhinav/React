// import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise ((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(
      places,
      position.coords.latitude,
      position.coords.longitude
    );
    resolve(sortedPlaces)
  });
  })
}

export default function AvailablePlaces({ onSelectPlace }) {
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const {
    isLoading,
    error,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces ,[]);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     try {
  //       const places = await fetchAvailablePlaces()
  //       // const response = await fetch("http://localhost:3000/places");
  //       // const resData = await response.json();
  //       // if (!response.ok) {
  //       //   throw new Error("Fetching failed");
  //       // }

  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces = sortPlacesByDistance(
  //           places,
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //         setAvailablePlaces(sortedPlaces);
  //         setIsLoading(false); // since navigator will run sometime in future setIsLoading outside will execute first so to execute it later sometime we put it in try and cath both blocks
  //       });
  //     } catch (error) {
  //       setError({ message: error.message || "Could not fetch places" });
  //       setIsLoading(false);
  //     }
  //     // setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  if (error) {
    return <Error title="An error occured" message={error.message} />;
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
