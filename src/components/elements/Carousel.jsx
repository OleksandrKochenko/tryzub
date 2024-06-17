import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchMainEvents } from '../../redux/events/operations_';
import { getEvents } from '../../redux/selectors';

// fake data, will be replaced by actual current data
const carouselData = [
  {
    img: 'https://res.cloudinary.com/dvloxectq/image/upload/v1716174195/samples/afisha_fk62y9.webp',
    alt: 'Iryna Fedyshyn Brandon, MB announce',
    title: 'Iryna Fedyshyn',
    description:
      'June 1 2024. Keystone Centre Amphitheater, 1775 18th St., Brandon, MB. Supporting by UCA "Tryzub"',
  },
  {
    img: 'https://res.cloudinary.com/dvloxectq/image/upload/v1696781881/samples/balloons.jpg',
    alt: 'balloons',
    title: 'Title #1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cupiditate nostrum provident minima sequi blanditiis?',
  },
  {
    img: 'https://res.cloudinary.com/dvloxectq/image/upload/v1696781882/samples/breakfast.jpg',
    alt: 'breackfast',
    title: 'Title #2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad facilis corrupti.',
  },
  {
    img: 'https://res.cloudinary.com/dvloxectq/image/upload/v1696781884/samples/chair-and-coffee-table.jpg',
    alt: 'cactus',
    title: 'Title #3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, alias. Placeat, eius asperiores?',
  },
];

export const CarouselElement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { events_ } = useSelector(getEvents);
  console.log('events', events_);
  return (
    <div className="w-[80%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        transitionTime={1000}
        autoPlay={true}
        stopOnHover={false}
        interval={10000}
      >
        {carouselData.map(({ img, alt, title, description }, idx) => {
          return (
            <div key={idx} className="relative">
              <img src={img} alt={alt} className="h-[85vh] object-cover" />
              <div className="absolute bottom-10 w-full font-semibold backdrop-blur-sm [text-shadow:_1px_1px_2px_#000]">
                <h2 className="text-white text-[38px]">{title}</h2>
                <p className="text-white text-[20px]">{description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
