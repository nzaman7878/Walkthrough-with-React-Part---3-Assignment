import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { SinglePhoto } from '../Pages/SinglePhoto';

// CustomRoute component responsible for defining the application routes
export const CustomRoute = () => {
  return (
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={<HomePage />} />

      {/* Route for displaying a single photo based on the ID */}
      <Route path="/:id" element={<SinglePhoto />} />
    </Routes>
  );
};
