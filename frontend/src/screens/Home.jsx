import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import MyPhoto from '../assets/luiza5.jpg'; // Ensure the path to your photo is correct

function Home() {
    // Animation variants
    const heroVariants = {
        hidden: {opacity: 0, scale: 0.6},
        visible: {opacity: 1, scale: 1, transition: {duration: 2, delay: 0.5}}
    };

    return (
        <div className="font-serif text-gray-900 bg-cover">
            {/* Hero Section with Framer Motion */}
            <motion.div
                className="flex items-center justify-center min-h-full bg-contain bg-no-repeat m-2"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center justify-center">
                    <img src={MyPhoto} alt="Luiza Dumitriu Cristu"
                         style={{width: '50%', height: '50%', objectFit: 'cover'}}/>
                    <div className="p-2">
                        <Link to="/about"
                              className="btn text-lg bg-[#ddf5c6] shadow-lg">Sa
                            ne conectam</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;