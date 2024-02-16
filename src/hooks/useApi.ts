import { useState, useEffect } from "react";

interface useApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string;
}

export const useApi = <T>(url: string): useApiResponse<T> => {
  const [data, setData] = useState<T>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            accept: "application/json",
            "User-agent": "learning app",
          },
        });
        const jsonData = await response.json();
        if (!response.ok) {
          setError(jsonData);
          return;
        }
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
    };
  }, [url]);

  return { data, loading, error };
};
