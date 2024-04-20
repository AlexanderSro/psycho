import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import MyPhoto from '../assets/luiza1.jpg'; // Ensure the path to your photo is correct

function Home2() {
    // Animation variants
    const heroVariants = {
        hidden: {opacity: 0, scale: 0.6},
        visible: {opacity: 1, scale: 1, transition: {duration: 2 , delay: 0.5}}
    };

    const aboutVariants = {
        hidden: {x: -200, opacity: 0},
        visible: {x: 0, opacity: 1, transition: {delay: 0.5, duration: 2}}
    };

    return (
        <div className="font-serif text-gray-900">
            {/* Hero Section with Framer Motion */}
            <motion.div
                className="hero min-h-screen lg:bg-fixed bg-top"
                style={{backgroundImage: `url(${MyPhoto})`}}
                variants={heroVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-lg lg:text-5xl font-bold">Bun venit, sunt Luiza Dumitriu Cristu</h1>
                        <p className="mb-5 text-xl lg:text-2xl">Fii aici, fii acum! Calatoreste in prezentul tau.</p>
                        <Link to="/about"
                              className="btn text-lg bg-gradient-to-r from-lime-200 to-lime-400 shadow-neutral-content">Afla
                            mai multe despre mine</Link>
                    </div>
                </div>
            </motion.div>
            {/* About Section with Framer Motion */}
            <div className="container mx-auto py-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    variants={aboutVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className="flex items-center justify-center">
                        <img src={MyPhoto} alt="Luiza Dumitriu Cristu" className="rounded-lg shadow-lg"/>
                    </div>
                    <div className="flex flex-col justify-center p-2">
                        <h2 className="text-3xl font-bold mb-5">Despre mine</h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                            enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                            nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                            lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <Link to="/about"
                              className="btn text-lg bg-gradient-to-r from-lime-200 to-lime-400 shadow-neutral-content">Afla
                            mai multe</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home2;
