export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e3d704b25cmsh98f23dd5b432075p12d9e9jsn6a63ca6f53e1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
