import React from 'react';
import {motion} from "framer-motion";
import MyPhoto from "../assets/luiza1.jpg";
import {Link} from "react-router-dom";

function AboutSection(props) {
    // Animation variants
    const aboutVariants = {
        hidden: {x: -200, opacity: 0},
        visible: {x: 0, opacity: 1, transition: {delay: 0.5, duration: 2}}
    };

    return (
        // {/* About Section with Framer Motion */}
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
    )
        ;
}

export default AboutSection;