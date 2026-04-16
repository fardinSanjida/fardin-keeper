import React from 'react';
import {  useRouteError } from 'react-router';
import { Link } from 'react-router';


const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="max-w-md text-center">
                <div className="relative group">
                    <h1 className="text-9xl font-extrabold text-green-900 animate-pulse select-none">
                        404
                    </h1>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-[200px] font-bold">?</span>
                    </div>
                </div>
                
                <h2 className="mt-4 text-3xl font-bold text-base-content sm:text-4xl">
                    Oops! Page not found.
                </h2>
                
                <p className="mt-4 text-base-content/70 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, 
                    or is temporarily unavailable.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/" 
                        className="btn bg-green-800 text-white border-0 btn-wide shadow-lg hover:shadow-green-800/30 transition-all"
                    >
                        Back to Home
                    </Link>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="btn btn-outline btn-wide"
                    >
                        Try Again
                    </button>
                </div>

               
            </div>
        </div>
    );
};

export default Error;
