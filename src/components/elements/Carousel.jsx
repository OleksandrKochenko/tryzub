import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// fake data, will be replaced by actual current data
const carouselData = [
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
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        transitionTime={1000}
        autoPlay={true}
        stopOnHover={false}
        interval={10000}
        width={'fit'}
      >
        {carouselData.map(({ img, alt, title, description }) => {
          return (
            <div className="relative">
              <img src={img} alt={alt} className="h-[80vh] object-cover" />
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
