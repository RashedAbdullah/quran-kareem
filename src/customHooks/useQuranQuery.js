import { useEffect, useState } from "react";

const useQuranQuery = () => {
  const [quran, setQuran] = useState([]);
  const [error, setError] = useState(null);

  const getQuran = async () => {
    try {
      const url = `https://api.alquran.cloud/v1/quran/quran-uthmani`;
      const response = await fetch(url);
      if (!response.status) {
        throw new Error("Failed to fetching data...");
      }
      const data = await response.json();
      setQuran(data.data.surahs);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getQuran();
  }, []);

  return { quran, error };
};

export { useQuranQuery };
