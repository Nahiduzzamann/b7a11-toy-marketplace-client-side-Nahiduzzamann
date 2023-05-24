import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <div className="flex items-center">
              <img
                src='https://i.ibb.co/LpCk3xr/toy-removebg-preview.png' 
                alt="Website Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-lg font-semibold">Car Toy World</span>
            </div>
            <p className="mt-4">
            A car toy is a miniature replica of a real car designed for play and enjoyment. These toys are meticulously crafted to capture the essence and details of various car models, making them highly appealing to both children and car enthusiasts of all ages.
            </p>
            <div className="mt-4 flex">
              <a href="https://www.facebook.com/na.hid.731135/" className="mr-2">
                <FaFacebook className="text-gray-300 hover:text-gray-500" />
              </a>
              <a href="#" className="mr-2">
                <FaInstagram className="text-gray-300 hover:text-gray-500" />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fmd-nahiduzzaman-08395a179%3Ffbclid%3DIwAR1GY83Ce9lyyY8JvC7wrXKNtAJL6IIEM_WxD0XYCm8Zv7T72-AOI70mXfU&h=AT3MYhXXzicy7xWs5n0468iFQt9BeQWrCSwZ4ojEBaH0p4-M4v16k__FMyE4-qiplsZVIHD-mjvQYHdZiLyxFmkqmo0Xsw6_t38LBFzcZuI4hBK0CmL8XNoDhzG_idF-2O2J" className="mr-2">
                <FaLinkedin className="text-gray-300 hover:text-gray-500" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              Phone: <a href="tel:123456789">01741365648</a>
            </p>
            <p>
              Email: <a href="mailto:info@cartoystore.com">nahid.cse.diu.19@gmail.com</a>
            </p>
            <p>Address: Mirpur, Dhaka</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-disc ml-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Car Toy Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
