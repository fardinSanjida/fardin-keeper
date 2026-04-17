import React from 'react';
import { Link, useParams } from 'react-router';
import { FiArchive, FiClock, FiEdit3, FiPhoneCall, FiTrash2, FiVideo } from "react-icons/fi";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { useAppContext } from '../../context/AppContext';
import StatusBadge from '../../componenets/ui/StatusBadge';
import LoadingSpinner from '../../componenets/ui/LoadingSpinner';

const statCardConfig = [
    { key: 'days_since_contact', label: 'Days Since Contact' },
    { key: 'goal', label: 'Goal (Days)' },
    { key: 'next_due_date', label: 'Next Due' },
];

const actionButtons = [
    { label: 'Snooze 2 Weeks', icon: FiClock, className: 'text-slate-700' },
    { label: 'Archive', icon: FiArchive, className: 'text-slate-700' },
    { label: 'Delete', icon: FiTrash2, className: 'text-rose-500' },
];

const quickActions = [
    { type: 'call', label: 'Call', icon: FiPhoneCall },
    { type: 'text', label: 'Text', icon: HiOutlineChatBubbleOvalLeftEllipsis },
    { type: 'video', label: 'Video', icon: FiVideo },
];

const formatShortDate = (dateString) =>
    new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(dateString));

const FriendDetails = () => {
    const { id } = useParams();
    const { friends, loadingFriends, addInteraction } = useAppContext();
    const friend = friends.find((currentFriend) => currentFriend.id === Number(id));

    if (loadingFriends) {
        return (
            <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                <LoadingSpinner label="Loading friend details..." />
            </section>
        );
    }

    if (!friend) {
        return (
            <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
                <div className="rounded-md border border-slate-200 bg-white px-6 py-12 shadow-sm">
                    <h1 className="text-3xl font-bold text-slate-900">Friend not found</h1>
                    <p className="mt-4 text-slate-500">
                        The profile you tried to open is missing or no longer available.
                    </p>
                    <Link
                        to="/"
                        className="mt-8 inline-flex rounded-sm bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.4fr]">
                <div className="space-y-2">
                    <aside className="rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="mx-auto h-16 w-16 rounded-full object-cover"
                        />
                        <h1 className="mt-4 text-2xl font-semibold text-slate-800">{friend.name}</h1>
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <StatusBadge status={friend.status} />
                        </div>
                        <div className="mt-2">
                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase text-emerald-800">
                                {friend.tags[0]}
                            </span>
                        </div>
                        <p className="mt-4 text-sm italic text-slate-500">"{friend.bio}"</p>
                        <p className="mt-1 text-xs text-slate-400">Preferred: email</p>
                    </aside>

                    {actionButtons.map(({ label, icon, className }) => (
                        <button
                            key={label}
                            type="button"
                            className={`flex w-full items-center justify-center gap-2 rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-medium transition hover:bg-slate-50 ${className}`}
                        >
                            {React.createElement(icon, { className: 'text-sm' })}
                            <span>{label}</span>
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-3">
                        {statCardConfig.map(({ key, label }) => (
                            <article
                                key={key}
                                className="rounded-md border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
                            >
                                <h2 className="text-2xl font-semibold text-emerald-800">
                                    {key === 'next_due_date' ? formatShortDate(friend[key]) : friend[key]}
                                </h2>
                                <p className="mt-2 text-sm text-slate-500">{label}</p>
                            </article>
                        ))}
                    </div>

                    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-800">Relationship Goal</h2>
                                <p className="mt-4 text-sm text-slate-500">
                                    Connect every <span className="font-bold text-slate-700">{friend.goal} days</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                className="inline-flex items-center gap-1 rounded-sm border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                                <FiEdit3 className="text-xs" />
                                <span>Edit</span>
                            </button>
                        </div>
                    </article>

                    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-800">Quick Check-In</h2>
                        <div className="mt-4 grid gap-3 md:grid-cols-3">
                            {quickActions.map(({ type, label, icon }) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => addInteraction(friend, type)}
                                    className="flex flex-col items-center justify-center gap-2 rounded-sm border border-slate-200 bg-slate-50 px-4 py-5 text-slate-700 transition hover:bg-white"
                                >
                                    {React.createElement(icon, { className: 'text-lg' })}
                                    <span className="text-sm font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default FriendDetails;
