import React from 'react';
import { FiBell } from 'react-icons/fi';
import { useAppContext } from '../../context/AppContext';

const ToastStack = () => {
    const { toasts } = useAppContext();

    return (
        <div className="pointer-events-none fixed right-4 top-20 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className="rounded-2xl border border-emerald-200 bg-white/95 px-4 py-3 text-sm text-slate-700 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur"
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <FiBell />
                        </span>
                        <p>{toast.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToastStack;
