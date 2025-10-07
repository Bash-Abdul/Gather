// import React from "react";
// import Link from "next/link";
// import { Calendar, MapPin, Users } from "lucide-react";

// const featuredEvents = [
//   {
//     id: "1",
//     title: "Coffee & Conversation",
//     date: "Mar 15, 2025",
//     time: "10:00 AM",
//     location: "Cozy Corner Cafe",
//     description:
//       "Small group coffee meetup for meaningful conversations in a quiet setting.",
//     attendees: 5,
//     category: "Coffee",
//   },
//   {
//     id: "2",
//     title: "Nature Photography Walk",
//     date: "Mar 18, 2025",
//     time: "3:00 PM",
//     location: "City Botanical Gardens",
//     description:
//       "Peaceful walk through the gardens. Bring your camera and enjoy the quiet beauty.",
//     attendees: 8,
//     category: "Hiking",
//   },
//   {
//     id: "3",
//     title: "Indie Film Screening",
//     date: "Mar 20, 2025",
//     time: "7:00 PM",
//     location: "The Quiet Cinema",
//     description:
//       "Watch and discuss a thoughtful indie film in an intimate theater setting.",
//     attendees: 12,
//     category: "Movies",
//   },
// ];

// const Events = () => {
//   return (
//     <section className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)] p-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-foreground">
//           Upcoming events
//         </h2>
//         {/* <p className="text-sm text-muted-foreground">Nothing here yet, soon.</p> */}
//         <Link className="text-sm text-muted-foreground" href={"/event"}>
//           See al events
//         </Link>
//       </div>

//       <div className="my-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {featuredEvents.map((event, index) => (
//             <div key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-border bg-card">
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-3">
//                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
//                     {event.category}
//                   </span>
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Users className="w-4 h-4 mr-1" />
//                     <span>{event.attendees} joined</span>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
//                   {event.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {event.description}
//                 </p>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center text-sm text-foreground">
//                     <Calendar className="w-4 h-4 mr-2 text-primary" />
//                     <span>
//                       {event.date} at {event.time}
//                     </span>
//                   </div>
//                   <div className="flex items-center text-sm text-foreground">
//                     <MapPin className="w-4 h-4 mr-2 text-accent" />
//                     <span>{event.location}</span>
//                   </div>
//                 </div>

//                 {/* <Button 
//                   variant="default" 
//                   className="w-full"
//                   asChild
//                 >
//                   <Link to={`/event/${id}`}>View Details</Link>
//                 </Button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;


import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";

const featuredEvents = [
  {
    id: "1",
    title: "Coffee & Conversation",
    date: "Mar 15, 2025",
    time: "10:00 AM",
    location: "Cozy Corner Cafe",
    description:
      "Small group coffee meetup for meaningful conversations in a quiet setting.",
    attendees: 5,
    category: "Coffee",
  },
  {
    id: "2",
    title: "Nature Photography Walk",
    date: "Mar 18, 2025",
    time: "3:00 PM",
    location: "City Botanical Gardens",
    description:
      "Peaceful walk through the gardens. Bring your camera and enjoy the quiet beauty.",
    attendees: 8,
    category: "Hiking",
  },
  {
    id: "3",
    title: "Indie Film Screening",
    date: "Mar 20, 2025",
    time: "7:00 PM",
    location: "The Quiet Cinema",
    description:
      "Watch and discuss a thoughtful indie film in an intimate theater setting.",
    attendees: 12,
    category: "Movies",
  },
];

const Events = () => {
  return (
    <section className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Upcoming events</h2>
        <Link className="text-sm text-muted-foreground" href="/events">
          See all events
        </Link>
      </div>

      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg border border-border bg-card rounded-lg"
            >
              {/* Placeholder "image" */}
              <div
                role="img"
                aria-label={`${event.title} cover placeholder`}
                className="w-full bg-blue-300/60"
              >
                {/* 16:9 aspect box */}
                <div className="aspect-[16/9]" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {event.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{event.attendees} joined</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Future CTA spot */}
                {/* <Link className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90" href={`/event/${event.id}`}>
                  View details
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

