import { useEffect, useState } from "react";
import { ImageCard } from "../component/ImageCard";
import "../style/HomePage.css";

// HomePage component
export const HomePage = () => {
  // State to hold the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data from the API
  const getData = async () => {
    try {
      const resp = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
      );
      const { photos } = await resp.json();
      setData(photos);
      console.log(photos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to run the data fetching function on component mount
  useEffect(() => {
    getData();
  }, []);

  // Render the component
  return (
    <div id="parent">
      {/* Map through the fetched data and render ImageCard component for each item */}
      {data?.map((e, i) => {
        return <ImageCard id={e.id} imageUrl={e.url} key={i} />;
      })}
    </div>
  );
};
