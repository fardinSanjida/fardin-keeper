import React, { useState } from 'react';
import {
    FaHandshake,
    FaPhoneAlt,
    FaRegCommentDots,
    FaVideo
} from 'react-icons/fa';
import Footer from '../../componenets/footer/Footer';

const timelineEntries = [
    { id: 1, type: 'meet-up', label: 'Meetup', friend: 'Tom Baker', date: 'March 29, 2026' },
    { id: 2, type: 'text', label: 'Text', friend: 'Sarah Chen', date: 'March 28, 2026' },
    { id: 3, type: 'meet-up', label: 'Meetup', friend: 'Olivia Martinez', date: 'March 26, 2026' },
    { id: 4, type: 'video call', label: 'Video', friend: 'Aisha Patel', date: 'March 23, 2026' },
    { id: 5, type: 'meet-up', label: 'Meetup', friend: 'Sarah Chen', date: 'March 21, 2026' },
    { id: 6, type: 'call', label: 'Call', friend: 'Marcus Johnson', date: 'March 19, 2026' },
    { id: 7, type: 'meet-up', label: 'Meetup', friend: 'Aisha Patel', date: 'March 17, 2026' },
    { id: 8, type: 'text', label: 'Text', friend: 'Olivia Martinez', date: 'March 13, 2026' },
    { id: 9, type: 'call', label: 'Call', friend: 'Lisa Nakamura', date: 'March 11, 2026' }
];

const activityConfig = {
    'meet-up': {
        icon: FaHandshake,
        iconClass: 'text-amber-500',
    },
    text: {
        icon: FaRegCommentDots,
        iconClass: 'text-slate-500',
    },
    call: {
        icon: FaPhoneAlt,
        iconClass: 'text-slate-700',
    },
    'video call': {
        icon: FaVideo,
        iconClass: 'text-slate-700',
    },
};

const filterOptions = [
    { value: 'all', label: 'Filter timeline' },
    { value: 'meet-up', label: 'Meetups' },
    { value: 'text', label: 'Texts' },
    { value: 'call', label: 'Calls' },
    { value: 'video call', label: 'Video calls' },
];

const TimelineCard = ({ entry }) => {
    const { icon: Icon, iconClass } = activityConfig[entry.type];

    return (
        <article className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-center gap-3 rounded-sm border border-dashed border-sky-400 bg-white px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.7)] sm:px-6">
            <div className="flex items-center gap-3 text-slate-800">
                <Icon className={`shrink-0 text-xl ${iconClass}`} />
                <span className="text-sm font-medium sm:text-base">{entry.label}</span>
            </div>
            <div className="text-center text-xs text-slate-500 sm:text-sm">
                <p>with {entry.friend}</p>
                <p className="mt-1">{entry.date}</p>
            </div>
        </article>
    );
};

const Timeline = () => {
    const [selectedType, setSelectedType] = useState('all');

    const visibleEntries =
        selectedType === 'all'
            ? timelineEntries
            : timelineEntries.filter((entry) => entry.type === selectedType);

    return (
        <div className="min-h-screen bg-[#f3f4f6] pt-10">
            <section className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="rounded-sm border border-dashed border-sky-400 bg-[#f6f7fb] px-4 py-8 sm:px-10">
                    <h1 className="text-center text-4xl font-bold tracking-tight text-slate-800">
                        Timeline
                    </h1>

                    <div className="mt-8">
                        <select
                            value={selectedType}
                            onChange={(event) => setSelectedType(event.target.value)}
                            className="w-full max-w-xs rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 outline-none transition focus:border-sky-400"
                        >
                            {filterOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4 space-y-3">
                    {visibleEntries.map((entry) => (
                        <TimelineCard key={entry.id} entry={entry} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Timeline;
