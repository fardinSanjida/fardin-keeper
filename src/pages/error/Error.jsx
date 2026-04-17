import React from 'react';
import { Link, useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <section className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.16),_transparent_35%),#f5f7fb] px-4">
            <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white px-8 py-12 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
                <p className="text-7xl font-black tracking-tight text-slate-900 sm:text-8xl">404</p>
                <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
                    The page you were looking for is not here.
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                    The route may be invalid, removed, or waiting for a proper link. Let's get you back to the main dashboard.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/timeline"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700"
                    >
                        Open Timeline
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;
