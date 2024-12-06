import React from 'react';

export function BusinessHours({ hours }) {
  const today = new Date().getDay();
  const todayHours = hours[today === 0 ? 6 : today - 1];

  return (
    <div className="text-sm">
      <p className="text-gray-600 dark:text-gray-300">
        {todayHours.isClosed ? (
          <span className="text-red-500">Closed Today</span>
        ) : (
          <>
            <span className="font-medium">Today:</span>{' '}
            {todayHours.open} - {todayHours.close}
          </>
        )}
      </p>
    </div>
  );
}