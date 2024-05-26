import { Widget } from "components/elements/Widget";

export const EventsPage = () => {
  const cardsData = [
    {
      imgSrc: "https://res.cloudinary.com/dvloxectq/image/upload/v1696781885/samples/dessert-on-a-plate.jpg",
      date: "27",
      month: "March",
      title: "Best View in Newyork City",
      description: "The city that never sleeps",
      time: "6 mins ago"
    },
    {
      imgSrc: "https://res.cloudinary.com/dvloxectq/image/upload/v1696781883/samples/man-on-a-street.jpg",
      date: "20",
      month: "March",
      title: "Best Pizza in Town",
      description: "The collection of best pizza images in Newyork city",
      time: "3 mins read"
    },
    {
      imgSrc: "https://res.cloudinary.com/dvloxectq/image/upload/v1696781883/samples/outdoor-woman.jpg",
      date: "15",
      month: "April",
      title: "Best Salad Images ever",
      description: "The collection of best salads of town in pictures",
      time: "6 mins read"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {cardsData.map((card, index) => (
          <Widget
            key={index}
            imgSrc={card.imgSrc}
            date={card.date}
            month={card.month}
            title={card.title}
            description={card.description}
            time={card.time}
          />
        ))}
      </div>
    </div>
  );
};
