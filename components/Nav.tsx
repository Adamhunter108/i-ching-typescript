import React, { useState } from 'react'
import Link from 'next/link'

export default function Nav() {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                className="flex text-4xl text-gray-400 items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
                >
                        {/* X SVG */}
                    <svg className="w-10 h-10 text-indigo-500" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/>
                    </svg>
                </button>
            ) : (
                <button onClick={() => setShowSidebar(!showSidebar)} className="fixed z-30 flex items-center cursor-pointer right-4 lg:right-20 top-6">
                        {/* STAGGERED BARS SVG */}
                    <svg className="w-10 h-10 text-indigo-500" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                    </svg>
                </button>
            )}

            <div
                className={`top-0 right-0 w-full sm:w-full md:w-1/2 lg:w-1/3 bg-black/40 backdrop-blur-lg p-10 pl-2 text-white fixed h-full z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <h3 className="mt-10 pb-5 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-cyan-400 flex justify-center">
                    I Ching
                </h3>

                
                <Link href="/" passHref={true}>
                    <div className="w-40">
                        <button
                        type="button"
                        className="text-gray-300 hover:bg-gray-700/40 hover:text-indigo-500 block px-3 py-4 rounded-md text-base font-medium"
                        >
                            {/* <FontAwesomeIcon style={{fontSize:"25px"}} icon={faHouse} /> Home */}
                            Home
                        </button>
                    </div>
                </Link>

                <div className="border-t border-white/40" />

                <Link href="/about" passHref={true}>
                    <button
                    type="button"
                    className="text-gray-300 hover:bg-gray-700/40 hover:text-indigo-500 block px-3 py-4 rounded-md text-base font-medium"
                    >
                        {/* <FontAwesomeIcon style={{fontSize:"25px"}} icon={faLaptopCode} /> Projects */}
                        About
                    </button>
                </Link>

                <div className="border-t border-white/40" />

                {/* <div className="absolute bottom-4 w-full flex justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-lime-400 to-teal-400">Made with <FontAwesomeIcon className="text-red-600" style={{fontSize:"15px"}} icon={faHeart} /> in NYC</p>
                </div> */}
                <div className="absolute bottom-4 w-full flex justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-red-500 to-teal-400">Made with ❤️ in NYC</p>
                </div>

            </div>
            
        </>
    )
    }
