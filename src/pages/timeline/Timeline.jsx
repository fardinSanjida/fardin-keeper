import React, { useMemo, useState } from 'react';
import { FiCalendar, FiPhoneCall, FiSearch, FiVideo } from 'react-icons/fi';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { FaHandshake } from 'react-icons/fa6';
import { useAppContext } from '../../context/AppContext';

const filterOptions = [
    { value: 'all', label: 'All activities' },
    { value: 'call', label: 'Call' },
    { value: 'text', label: 'Text' },
    { value: 'video', label: 'Video' },
    { value: 'meet-up', label: 'Meet-up' },
];

const activityConfig = {
    call: { icon: FiPhoneCall, iconClass: 'text-emerald-700 bg-emerald-100' },
    text: { icon: HiOutlineChatBubbleOvalLeftEllipsis, iconClass: 'text-sky-700 bg-sky-100' },
    video: { icon: FiVideo, iconClass: 'text-violet-700 bg-violet-100' },
    'meet-up': { icon: FaHandshake, iconClass: 'text-amber-700 bg-amber-100' },
};

const formatDate = (dateString) =>
    new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(dateString));

const Timeline = () => {
    const { timelineEntries } = useAppContext();
    const [selectedType, setSelectedType] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');

    const visibleEntries = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        const filteredEntries = timelineEntries.filter((entry) => {
            const matchesType = selectedType === 'all' || entry.type === selectedType;
            const matchesSearch =
                normalizedSearch.length === 0 ||
                entry.title.toLowerCase().includes(normalizedSearch) ||
                entry.friendName.toLowerCase().includes(normalizedSearch) ||
                entry.type.toLowerCase().includes(normalizedSearch);

            return matchesType && matchesSearch;
        });

        return [...filteredEntries].sort((a, b) =>
            sortOrder === 'newest'
                ? new Date(b.date).getTime() - new Date(a.date).getTime()
                : new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    }, [searchTerm, selectedType, sortOrder, timelineEntries]);

    return (
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900">
                    Timeline
                </h1>
               
                <div className="mt-8 grid gap-3 md:grid-cols-[1.2fr_0.7fr_0.7fr]">
                 

                    <select
                        value={selectedType}
                        onChange={(event) => setSelectedType(event.target.value)}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none"
                    >
                        {filterOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none"
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                    </select>
                </div>
            </div>

            <div className="mt-5 space-y-3">
                {visibleEntries.map((entry) => {
                    const { icon: Icon, iconClass } = activityConfig[entry.type];

                    return (
                        <article
                            key={entry.id}
                            className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center sm:px-6"
                        >
                            <div className="flex items-center gap-4">
                                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg ${iconClass}`}>
                                    <Icon />
                                </span>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">{entry.title}</h2>
                                    <p className="mt-1 text-sm capitalize text-slate-500">{entry.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 sm:justify-end">
                                <FiCalendar />
                                <span>{formatDate(entry.date)}</span>
                            </div>
                        </article>
                    );
                })}

                {visibleEntries.length === 0 && (
                    <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500 shadow-sm">
                        No timeline entries match your current filter.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Timeline;
