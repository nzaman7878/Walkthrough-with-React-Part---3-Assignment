import React, { useEffect, useState } from "react";
import "../style/SinglePhoto.css";
import { useParams } from "react-router-dom";

// SinglePhoto component
export const SinglePhoto = () => {
  // State to hold the fetched data for a single photo
  const [data, setData] = useState();

  // Get the 'id' parameter from the URL using React Router's useParams
  const { id } = useParams();

  // Function to fetch data for a single photo based on the 'id' parameter
  const getData = async () => {
    try {
      const resp = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const { photo } = await resp.json();
      setData(photo);
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
    <div id="singlePhoto">
      {/* Display the image and details of the single photo */}
      <img src={data?.url} alt="" />
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};
