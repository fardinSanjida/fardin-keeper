/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppContext = createContext(null);

const FRIENDS_STORAGE_KEY = 'keenkeeper-friends';
const TIMELINE_STORAGE_KEY = 'keenkeeper-timeline';
const STORAGE_VERSION_KEY = 'keenkeeper-storage-version';
const STORAGE_VERSION = '2';

const seedTimelineEntries = [
    {
        id: 1,
        friendId: 3,
        friendName: 'Nadia Rahman',
        type: 'meet-up',
        title: 'Meet-up with Nadia Rahman',
        date: '2026-04-12T16:00:00.000Z',
    },
    {
        id: 2,
        friendId: 1,
        friendName: 'Alex Johnson',
        type: 'text',
        title: 'Text with Alex Johnson',
        date: '2026-04-10T12:30:00.000Z',
    },
    {
        id: 3,
        friendId: 4,
        friendName: 'Olivia Martinez',
        type: 'video',
        title: 'Video with Olivia Martinez',
        date: '2026-04-07T19:00:00.000Z',
    },
    {
        id: 4,
        friendId: 2,
        friendName: 'Sarah Chen',
        type: 'call',
        title: 'Call with Sarah Chen',
        date: '2026-04-05T09:15:00.000Z',
    },
    {
        id: 5,
        friendId: 6,
        friendName: 'Marcus Rivera',
        type: 'meet-up',
        title: 'Meet-up with Marcus Rivera',
        date: '2026-04-02T14:00:00.000Z',
    },
    {
        id: 6,
        friendId: 7,
        friendName: 'Lisa Nakamura',
        type: 'text',
        title: 'Text with Lisa Nakamura',
        date: '2026-03-30T11:45:00.000Z',
    },
    {
        id: 7,
        friendId: 5,
        friendName: 'Tom Baker',
        type: 'call',
        title: 'Call with Tom Baker',
        date: '2026-03-28T18:10:00.000Z',
    },
    {
        id: 8,
        friendId: 8,
        friendName: 'Aisha Patel',
        type: 'video',
        title: 'Video with Aisha Patel',
        date: '2026-03-25T20:00:00.000Z',
    },
];

const getStoredValue = (key) => {
    if (typeof window === 'undefined') {
        return null;
    }

    const storedValue = window.localStorage.getItem(key);
    if (!storedValue) {
        return null;
    }

    try {
        return JSON.parse(storedValue);
    } catch {
        return null;
    }
};

const resetLegacyStorage = () => {
    if (typeof window === 'undefined') {
        return;
    }

    const currentVersion = window.localStorage.getItem(STORAGE_VERSION_KEY);

    if (currentVersion === STORAGE_VERSION) {
        return;
    }

    window.localStorage.removeItem(FRIENDS_STORAGE_KEY);
    window.localStorage.removeItem(TIMELINE_STORAGE_KEY);
    window.localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
};

const getStatusFromDays = (daysSinceContact, goal) => {
    if (daysSinceContact > goal) {
        return 'overdue';
    }

    if (daysSinceContact >= goal - 2) {
        return 'almost due';
    }

    return 'on-track';
};

const addDays = (date, days) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate.toISOString();
};

const normalizeFriend = (friend) => ({
    ...friend,
    status: getStatusFromDays(Number(friend.days_since_contact), Number(friend.goal)),
});

export const AppProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [timelineEntries, setTimelineEntries] = useState([]);
    const [loadingFriends, setLoadingFriends] = useState(true);
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const loadFriends = async () => {
            try {
                resetLegacyStorage();

                // Fetch friends data from public/friends.json
                const response = await fetch('./friends.json');
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                const storedFriends = getStoredValue(FRIENDS_STORAGE_KEY);
                const storedTimeline = getStoredValue(TIMELINE_STORAGE_KEY);

                if (!isMounted) {
                    return;
                }

                // Use stored friends if available, otherwise use data from friends.json
                // We check for length to ensure we don't use an empty stored array if data exists
                const initialFriends = (storedFriends && storedFriends.length > 0) ? storedFriends : data;
                const normalizedFriends = initialFriends.map(normalizeFriend);

                setFriends(normalizedFriends);
                setTimelineEntries(storedTimeline ?? seedTimelineEntries);
            } catch (error) {
                if (!isMounted) {
                    return;
                }

                console.error('Failed to load friends data, falling back to empty list', error);
                setFriends([]);
                setTimelineEntries(seedTimelineEntries);
            } finally {
                if (isMounted) {
                    setLoadingFriends(false);
                }
            }
        };

        loadFriends();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (!loadingFriends && typeof window !== 'undefined') {
            window.localStorage.setItem(FRIENDS_STORAGE_KEY, JSON.stringify(friends));
        }
    }, [friends, loadingFriends]);

    useEffect(() => {
        if (!loadingFriends && typeof window !== 'undefined') {
            window.localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(timelineEntries));
        }
    }, [timelineEntries, loadingFriends]);

    const addToast = (message) => {
        const toastId = Date.now() + Math.random();
        setToasts((currentToasts) => [...currentToasts, { id: toastId, message }]);

        window.setTimeout(() => {
            setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== toastId));
        }, 2800);
    };

    const addInteraction = (friend, type) => {
        const normalizedType = type.toLowerCase();
        const actionLabel =
            normalizedType === 'video'
                ? 'Video'
                : normalizedType.charAt(0).toUpperCase() + normalizedType.slice(1);

        const interactionDate = new Date();

        const newEntry = {
            id: Date.now(),
            friendId: friend.id,
            friendName: friend.name,
            type: normalizedType,
            title: `${actionLabel} with ${friend.name}`,
            date: interactionDate.toISOString(),
        };

        setTimelineEntries((currentEntries) => [newEntry, ...currentEntries]);
        setFriends((currentFriends) =>
            currentFriends.map((currentFriend) =>
                currentFriend.id === friend.id
                    ? {
                        ...currentFriend,
                        days_since_contact: 0,
                        status: 'on-track',
                        next_due_date: addDays(interactionDate, currentFriend.goal).split('T')[0],
                    }
                    : currentFriend
            )
        );
        addToast(`${actionLabel} logged for ${friend.name}.`);
    };

    const summary = useMemo(() => {
        const onTrackCount = friends.filter((friend) => friend.status === 'on-track').length;
        const almostDueCount = friends.filter((friend) => friend.status === 'almost due').length;
        const overdueCount = friends.filter((friend) => friend.status === 'overdue').length;
        const activeMonth = new Date().getMonth();
        const activeYear = new Date().getFullYear();
        const monthlyInteractions = timelineEntries.filter((entry) => {
            const entryDate = new Date(entry.date);
            return entryDate.getMonth() === activeMonth && entryDate.getFullYear() === activeYear;
        }).length;

        return {
            totalFriends: friends.length,
            onTrackCount,
            almostDueCount,
            overdueCount,
            monthlyInteractions,
        };
    }, [friends, timelineEntries]);

    const interactionCounts = useMemo(
        () => ({
            call: timelineEntries.filter((entry) => entry.type === 'call').length,
            text: timelineEntries.filter((entry) => entry.type === 'text').length,
            video: timelineEntries.filter((entry) => entry.type === 'video').length,
        }),
        [timelineEntries]
    );

    const value = {
        friends,
        setFriends,
        timelineEntries,
        loadingFriends,
        addInteraction,
        addToast,
        toasts,
        summary,
        interactionCounts,
        getStatusFromDays,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};
