import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))
    };

    return (
        <nav className="bg-gray-900 text-white">
            <div className="mx-auto px-4 py-2 max-w-7xl flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <img src='https://i.ibb.co/LpCk3xr/toy-removebg-preview.png' alt="Website Logo" className="h-8 mr-2" />
                        <span className="font-bold text-xl">Car Toy World</span>
                    </a>
                </div>

                <div className="hidden sm:flex">
                    <Link to="/" className="nav-link mr-3 hover:text-red-500">Home</Link>
                    <Link to="/allToys" className="nav-link mr-3 hover:text-red-500">All Toys</Link>
                    <Link to="/blogs" className="nav-link mr-3 hover:text-red-500">Blogs</Link>

                    {
                        user &&
                        (<>
                            <Link to="/mytoys" className="nav-link mr-3 hover:text-red-500">My Toys</Link>
                            <Link to="/addToy" className="nav-link mr-3 hover:text-red-500">Add A Toy</Link>
                            <button onClick={handleLogOut} className="nav-button mr-3 hover:text-red-500">Log Out</button>
                        </>)
                    }
                </div>

                {
                    user ? (
                        // (<div className="flex items-center">
                        //     <img src={user.photoURL} alt="User Profile" className="h-8 w-8 rounded-full" />
                        // </div>
                        <div className="group flex justify-center flex-row-reverse">
                            <img src={user.photoURL} alt="Picture" className="h-8 w-8 rounded-full" />
                            <p className="text-gray-500 invisible mr-2 group-hover:visible">
                                {user.displayName ? user.displayName : 'name not set yet'}
                            </p>
                        </div>)
                        :
                        <Link to='/login' className='hover:text-red-500'>Login</Link>

                }

                <div className="sm:hidden">
                    <button
                        type="button"
                        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 12H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zm0-7H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zm0 14H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="px-2 pt-2 pb-4 sm:hidden">
                    <a href="/" className="nav-link mr-2 hover:text-red-500">Home</a>
                    <a href="/allToys" className="nav-link mr-2 hover:text-red-500">All Toys</a>
                    <a href="/blogs" className="nav-link mr-2 hover:text-red-500">Blogs</a>
                    {
                        user &&
                        (<>
                            <Link to="/mytoys" className="nav-link mr-2 hover:text-red-500">My Toys</Link>
                            <Link to="/addToy" className="nav-link mr-2 hover:text-red-500">Add A Toy</Link>
                            <button onClick={handleLogOut} className="nav-button mr-2 hover:text-red-500">Log Out</button>
                        </>)
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;

