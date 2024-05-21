import { Icon } from '@iconify/react';
import { useEffect } from 'react';

const mockData = [
  { name: 'bison', date: 'February 20, 2024', location: 'prairie' },
  { name: 'fox', date: 'March 01, 2024', location: 'spruce woods' },
  {
    name: 'Ruddy Duck',
    date: 'May 16, 2024',
    location: 'waterlogged fields',
  },
  { name: 'warbler', date: 'February 23, 2023', location: 'moist forests' },
  { name: 'coyote', date: 'January 01, 2024', location: 'prairie' },
  {
    name: 'Grizzly Bear',
    date: 'September 06, 2023',
    location: 'boreal forests',
  },
  { name: 'Chipmunk', date: 'October 10, 2023', location: 'grasslands' },
  {
    name: 'hummingbird',
    date: 'December 10, 2023',
    location: 'flower meadows',
  },
  { name: 'Caribou', date: 'April 18, 2023', location: 'tundra' },
];

export const EventsList = ({ event, setEvent }) => {
  useEffect(() => {
    setEvent(mockData[0].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {mockData.map(({ name, date, location }, idx) => {
        return (
          <li key={idx} className="mb-4">
            <h3
              className={`uppercase hover:underline cursor-pointer ${
                name === event ? 'underline' : ''
              }`}
              onClick={() => setEvent(name)}
            >
              {name}
            </h3>
            <div className="flex items-center text-xs text-gray-500">
              <p className="mr-2">{date}</p>
              <Icon icon="ep:location" />
              <p className="capitalize">{location}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
