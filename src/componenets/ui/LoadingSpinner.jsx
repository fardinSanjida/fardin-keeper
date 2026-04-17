import React from 'react';

const LoadingSpinner = ({ label = 'Loading friends...' }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-emerald-600" />
            <p className="text-sm font-medium text-slate-500">{label}</p>
        </div>
    );
};

export default LoadingSpinner;
