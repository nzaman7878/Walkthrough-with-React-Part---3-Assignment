import React from "react";
import { useNavigate } from "react-router-dom";

// ImageCard component
export const ImageCard = ({ imageUrl, id }) => {
  // useNavigate hook from React Router for programmatic navigation
  const navigate = useNavigate();

  // Function to redirect to the SinglePhoto page when the image is clicked
  const redirectToPage = () => {
    navigate(`/${id}`);
  };

  // Render the component
  return (
    <div>
      {/* Display the image and set up a click event to navigate to the SinglePhoto page */}
      <img src={imageUrl} onClick={redirectToPage} alt="" />
    </div>
  );
};
