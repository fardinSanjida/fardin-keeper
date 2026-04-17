import React from 'react';
import { Link } from 'react-router';
import StatusBadge from './StatusBadge';

const FriendCart = ({ friend }) => {
    return (
        <Link
            to={`/friends/${friend.id}`}
            className="flex h-full flex-col items-center rounded-md border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition hover:shadow-md"
        >
            <img
                src={friend.picture}
                alt={friend.name}
                className="h-16 w-16 rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-800">{friend.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{friend.days_since_contact}d ago</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
                {friend.tags.slice(0, 2).map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase text-emerald-800"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-4">
                <StatusBadge status={friend.status} />
            </div>
        </Link>
    );
};

export default FriendCart;
