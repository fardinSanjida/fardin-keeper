import React from 'react';
import { FiPlus } from "react-icons/fi";
import { useAppContext } from '../../context/AppContext';

const summaryCardConfig = [
    {
        key: 'totalFriends',
        label: 'Total Friends',
    },
    {
        key: 'onTrackCount',
        label: 'On Track',
    },
    {
        key: 'overdueCount',
        label: 'Need Attention',
    },
    {
        key: 'monthlyInteractions',
        label: 'Interactions This Month',
    },
];

const Banner = () => {
    const { summary, loadingFriends } = useAppContext();

    return (
        <section className="px-4 pb-4 pt-10 sm:px-8">
            <div className="bg-transparent px-4 py-10 sm:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
                        Friends to keep close in your life
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="mt-5 inline-flex items-center gap-2 rounded-sm bg-emerald-800 px-4 py-2 text-xs font-semibold text-white">
                        <FiPlus className="text-sm" />
                        <span>Add a Friend</span>
                    </button>
                </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-4">
                {summaryCardConfig.map(({ key, label }) => (
                    <article
                        key={key}
                        className="rounded-md border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
                    >
                        <h2 className="text-4xl font-semibold text-emerald-800">
                            {loadingFriends ? '--' : summary[key]}
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">{label}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Banner;
