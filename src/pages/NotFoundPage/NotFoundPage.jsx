import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg" 
        alt="404 Not Found"
        className="mb-8"
      />
      <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-4">
        <Button color="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
