import React from 'react';
import {Link} from 'react-router-dom';
import Luiza from '../assets/luiza2.jpg'; // Make sure the path to your image is correct

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-cover bg-center h-96 py-24 px-10 object-cover bg-gradient-to-r from-lime-50 via-emerald-200 to-lime-300 text-lime-700 flex flex-wrap">
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase">Bine ai venit pe pagina noastra</p>
                    <p className="text-3xl font-bold">Luiza Dumitriu Cristu</p>
                    <p className="text-2xl mb-10 leading-none italic">Fii aici, fii acum! Calatoreste in prezentul tau.</p>
                    <Link to="/about"
                          className="bg-transparent hover:bg-lime-700 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-700 hover:border-transparent rounded-lg">
                        Afla mai multe
                    </Link>
                </div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-6 py-10">
                {/* Services Section */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Services</h2>
                <div className="flex items-center flex-wrap">
                    <div className="w-full md:w-1/3 p-4 text-center">
                        <div className="p-8 border border-gray-200 rounded-lg">
                            <h5 className="text-xl text-gray-700 font-medium mb-2">Service One</h5>
                            <p className="text-base text-gray-500">Short explanation of the service one.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 text-center">
                        <div className="p-8 border border-gray-200 rounded-lg">
                            <h5 className="text-xl text-gray-700 font-medium mb-2">Service Two</h5>
                            <p className="text-base text-gray-500">Short explanation of the service two.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 text-center">
                        <div className="p-8 border border-gray-200 rounded-lg">
                            <h5 className="text-xl text-gray-700 font-medium mb-2">Service Three</h5>
                            <p className="text-base text-gray-500">Short explanation of the service three.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
                    <div className="flex justify-center">
                        <div className="w-full md:w-1/2 bg-white rounded shadow-xl p-8 m-4">
                            <p className="block w-full p-2 text-gray-800 text-xl font-bold mb-6">Fill out the form below
                                to contact us</p>
                            {/* Form fields and submit button */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;