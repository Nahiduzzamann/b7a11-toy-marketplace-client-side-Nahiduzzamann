import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const ShopByCategory = () => {
  const location = useLocation()
  const [allToys, setAllToys] = useState([]);


  const [activeCategory, setActiveCategory] = useState([]);

  useEffect(() => {
    fetch('https://toy-car.vercel.app/allToys')
      .then(res => res.json())
      .then(data => setAllToys(data));


  }, [])

  const handleTabChange = (CategoryName) => {
    let category = []
    allToys.map(toy => {
      const foundIndex = toy.SubCategory.indexOf(CategoryName)
      if (foundIndex !== -1) {
        category.push(toy)
      }
    })
    setActiveCategory(category);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Shop by Category</h2>
        <div className="flex justify-center mb-8">
          <div className="border-b border-gray-300">
            {allToys.map((toy) => (
              <button
                key={toy._id}
                className={`py-2 px-4 mr-4 text-lg font-medium focus:outline-none ${activeCategory._id == toy._id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                  }`}
                onClick={() => handleTabChange(toy.SubCategory)}
              >
                {toy.SubCategory}
              </button>
            ))}
          </div>
        </div>
        <div className="max-h-[450px] overflow-x-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeCategory.map((toy) => (
            <div key={toy._id} className="bg-white rounded-lg shadow-md p-4">
              <img src={toy.PictureURL} alt={toy.ToyName} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{toy.ToyName}</h3>
              <p className="text-gray-600 mb-2">${toy.Price}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">&#9733;</span>
                <p className="text-gray-600 ml-2">{toy.Rating}</p>
              </div>
              <Link to={`/SingleToyDetails/${toy._id}`}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
