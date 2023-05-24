import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const GallerySection = () => {
    const [allToys, setAllToys] = useState([])
    const [buttonVisible, setButtonVisible] = useState(true);

    useEffect(() => {
        fetch('https://toy-car.vercel.app/allToys8')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, [])

    const viewAll = () => {
        fetch('https://toy-car.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                setButtonVisible(false)
            });
    }
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-8">Car Toy Gallery</h2>

                {buttonVisible ?
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {allToys.map((Toy) => (
                                <div key={Toy._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold mb-2">{Toy.SubCategory}</h3>
                                    </div>
                                    <img src={Toy.PictureURL} alt='toy img' className="w-full h-40 object-cover" />
                                </div>
                            ))}
                        </div>
                        <Button onClick={viewAll} variant="contained" color="primary">
                            View All
                        </Button>
                    </>
                    :
                    <div className="max-h-[600px] overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {allToys.map((Toy) => (
                            <div key={Toy._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">{Toy.SubCategory}</h3>
                                </div>
                                <img src={Toy.PictureURL} alt='toy img' className="w-full h-40 object-cover" />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    );
};

export default GallerySection;
