import React from 'react';

const statusStyles = {
    overdue: 'bg-rose-500 text-white',
    'almost due': 'bg-amber-400 text-white',
    'on-track': 'bg-emerald-500 text-white',
};

const StatusBadge = ({ status }) => {
    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold capitalize ${statusStyles[status] ?? 'bg-slate-100 text-slate-600'}`}
        >
            {status}
        </span>
    );
};

export default StatusBadge;
