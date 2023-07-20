const useFetch = () => {
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) throw new Error("Something went wrong.");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchData };
};

export default useFetch;
