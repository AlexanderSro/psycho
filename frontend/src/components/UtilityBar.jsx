import React from 'react';

function UtilityBar() {
    return (
        <div className="text-black bg-[#f7cd47] max-w-full p-2">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-w-full">
                <div>
                    <span className="mr-4">Email: luiza.psihoterapeut@gmail.com</span>
                    <span>Telefon: +447737019391</span>
                </div>
                <div className="mt-2 sm:mt-0">
                    <a href="https://www.instagram.com/yourusername" className="hover:text-gray-200 mr-4">Instagram</a>
                    <a href="https://www.facebook.com/yourusername" className="hover:text-gray-200">Facebook</a>
                </div>
            </div>
        </div>
    );
}

export default UtilityBar;