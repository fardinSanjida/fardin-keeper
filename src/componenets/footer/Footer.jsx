import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-green-900 text-slate-200">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
                <div className=" text-center gap-8 lg:flex-row lg:items-end">
                    <div className="py-6">
                        <p className="text-5xl font-bold text-white">KeenKeeper</p>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>

                    <div className="flex w-[16%] mx-auto justify-between items-center gap-3 text-lg">
                        {[FaFacebookF, FaInstagram, FaXTwitter,].map((Icon, index) => (
                            <span
                                key={index}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-white text-black"
                            >
                                <Icon />
                            </span>
                        ))}
                    </div>
                </div>

                <hr className="text-geen-800"></hr>

                <div className="flex flex-col gap-4  text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
                    <p>(c) 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
