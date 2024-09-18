export const formatTimeAndDate = (start, end, lang) => {
  const dateFormat = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Winnipeg',
  };

  const timeFormat = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Winnipeg',
  };

  const startDate = new Date(start).toLocaleDateString(
    `${lang}-${lang.toUpperCase()}`,
    dateFormat
  );

  const startTime = new Date(start).toLocaleTimeString(
    `${lang}-${lang.toUpperCase()}`,
    timeFormat
  );

  const endDate = new Date(end).toLocaleDateString(
    `${lang}-${lang.toUpperCase()}`,
    dateFormat
  );

  const endTime = new Date(end).toLocaleTimeString(
    `${lang}-${lang.toUpperCase()}`,
    timeFormat
  );

  return end
    ? `${startDate}, ${startTime} - ${
        end - start > 24 * 60 * 60 * 1000 ? endDate + ', ' : ''
      } ${endTime}`
    : `${startDate}, ${startTime}`;
};
