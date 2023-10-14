const useFetch = () => {
  const fetchData = async (url, id) => {
    url = id ? `${url}/${id}` : url;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went wrong.");
        // throw {
        //   message: "Failed to fetch vans",
        //   statusText: res.statusText,
        //   status: res.status,
        // };
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchData };
};

export default useFetch;
