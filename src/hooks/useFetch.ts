// useFetch.js
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

function useFetch<T>(url: string, time: number) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const sleep = new Promise((resolve) => setTimeout(resolve, time));

  useEffect(() => {
    async function fetchData() {
      try {
        await sleep;
        const response = await fetch(url);
        if (!response.ok) {
          toast.error("An error occurred.");
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
