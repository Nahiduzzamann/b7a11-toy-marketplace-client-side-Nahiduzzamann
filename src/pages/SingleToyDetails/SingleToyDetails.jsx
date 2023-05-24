
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);

    return (
        <div className="container mx-auto p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Picture */}
                <div>
                    <img src={loadedUser.PictureURL} alt="Toy" className="w-full" />
                </div>

                {/* Toy Details */}
                <div className="col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{loadedUser.ToyName}</h1>
                    <p className="text-gray-500 mb-2">
                        Seller: {loadedUser.SellerName} ({loadedUser.SellerEmail})
                    </p>
                    <p className="text-gray-500 mb-2">Sub-category: {loadedUser.SubCategory}</p>
                    <p className="text-gray-500 mb-2">Price: {loadedUser.Price}</p>
                    <p className="text-gray-500 mb-2">Rating: {loadedUser.Rating}</p>
                    <p className="text-gray-500 mb-2">Available Quantity: {loadedUser.AvailableQuantity}</p>
                    <p className="text-gray-500">{loadedUser.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;
