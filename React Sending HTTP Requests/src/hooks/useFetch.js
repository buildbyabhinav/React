import { useEffect, useState } from "react";

export function useFetch(fecthFunction, initialValue) {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState()
    const [fetchedData, setFetchedData]= useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const places = await fecthFunction();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || " Failed to fetch data" });
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fecthFunction]);

  return {
    isLoading: isLoading,
    fetchedData: fetchedData,
    error:error,
    setFetchedData:setFetchedData
  }
}
