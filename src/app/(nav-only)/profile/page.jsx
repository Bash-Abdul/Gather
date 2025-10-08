// // import Navigation from "@/components/Navigation";
// // note: keep whichever Link you're using (react-router or next/link)
// // import { Link } from "react-router-dom";
// import Link from "next/link";
// import { Calendar, Edit2, LogOut } from "lucide-react";

// const Avatar = ({ src, initials, size = 80 }) => {
//   const sizePx = `${size}px`;
//   return (
//     <div
//       className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
//       style={{
//         width: sizePx,
//         height: sizePx,
//         borderWidth: "2px",
//         borderStyle: "solid",
//         borderColor: "var(--tw-ring-color, transparent)",
//       }}
//       aria-hidden
//     >
//       {src ? (
//         <img src={src} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//       ) : (
//         <div
//           className="flex items-center justify-center font-semibold"
//           style={{
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(135deg,var(--primary, #7c3aed),var(--accent, #ec4899))",
//             color: "white",
//           }}
//         >
//           <span style={{ fontSize: Math.round(size / 2.4) }}>{initials}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// const Card = ({ children, className = "" }) => (
//   <div
//     className={`bg-card border border-border rounded-lg shadow-sm ${className}`}
//     role="region"
//   >
//     {children}
//   </div>
// );

// const Profile = () => {
//   const user = {
//     name: "Alex Morgan",
//     email: "alex@example.com",
//     initials: "AM",
//     interests: ["Coffee", "Books", "Hiking", "Art"],
//     // avatarSrc: "/path/to/avatar.jpg" // optional
//   };

//   const joinedEvents = [
//     {
//       id: "1",
//       title: "Coffee & Conversation",
//       date: "Mar 15, 2025",
//       time: "10:00 AM",
//       status: "upcoming",
//     },
//     {
//       id: "2",
//       title: "Nature Photography Walk",
//       date: "Mar 18, 2025",
//       time: "3:00 PM",
//       status: "upcoming",
//     },
//     {
//       id: "4",
//       title: "Book Club Meeting",
//       date: "Feb 20, 2025",
//       time: "2:00 PM",
//       status: "past",
//     },
//   ];

//   const upcomingEvents = joinedEvents.filter((e) => e.status === "upcoming");
//   const pastEvents = joinedEvents.filter((e) => e.status === "past");

//   return (
//     <div className="min-h-screen bg-background">
//       {/* <Navigation /> */}

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         <div className="max-w-4xl mx-auto">
//           {/* Profile Header */}
//           <Card className="p-6 sm:p-8 mb-8">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
//               <div className="flex items-start sm:items-center gap-4">
//                 <Avatar initials={user.initials} /* src={user.avatarSrc} */ size={80} />
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl font-bold mb-1">{user.name}</h1>
//                   <p className="text-muted-foreground mb-3">{user.email}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {user.interests.map((interest) => (
//                       <span
//                         key={interest}
//                         className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-2 w-full sm:w-auto">
//                 <button
//                   type="button"
//                   className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 border border-border bg-white hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
//                 >
//                   <Edit2 className="w-4 h-4" />
//                   <span>Edit Profile</span>
//                 </button>

//                 <button
//                   type="button"
//                   className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-transparent hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   <span>Sign Out</span>
//                 </button>
//               </div>
//             </div>
//           </Card>

//           {/* Upcoming Events */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
//             {upcomingEvents.length > 0 ? (
//               <div className="space-y-3">
//                 {upcomingEvents.map((event) => (
//                   <div
//                     key={event.id}
//                     className="p-4 hover:shadow-md transition-shadow border border-border rounded-lg"
//                   >
//                     <Link href={`/events/${event.id}`} className="block">
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-start space-x-3">
//                           <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                             <Calendar className="w-6 h-6 text-primary" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
//                               {event.title}
//                             </h3>
//                             <p className="text-sm text-muted-foreground">
//                               {event.date} at {event.time}
//                             </p>
//                           </div>
//                         </div>
//                         <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]">
//                           Joined
//                         </span>
//                       </div>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="p-8 text-center border border-border rounded-lg">
//                 <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
//                 <p className="text-muted-foreground mb-4">No upcoming events yet</p>
//                 <div>
//                   <Link to="/events" className="inline-block">
//                     <button className="rounded-lg px-4 py-2 bg-primary text-primary-foreground">
//                       Explore Events
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Past Events */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Past Events</h2>
//             {pastEvents.length > 0 ? (
//               <div className="space-y-3">
//                 {pastEvents.map((event) => (
//                   <div key={event.id} className="p-4 opacity-75 border border-border rounded-lg">
//                     <div className="flex items-start space-x-3">
//                       <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                         <Calendar className="w-6 h-6 text-muted-foreground" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold mb-1">{event.title}</h3>
//                         <p className="text-sm text-muted-foreground">
//                           {event.date} at {event.time}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="p-8 text-center border border-border rounded-lg">
//                 <p className="text-muted-foreground">No past events</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import Navigation from "@/components/Navigation";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

'use client'

import { Calendar, Edit2, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/app/providers";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {

  const router = useRouter();

  const { signOut, status, user, loading, setLoading} = useAuth();

   // Redirect if unauthenticated
   useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth"); // redirect to sign-in page
    }
  }, [status, router]);

  // Show nothing (or loader) while checking session
  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Block rendering if user is null (shouldn't happen after redirect)
  if (!user) return null;


  const user_profile = {
    name: "Alex Morgan",
    email: "alex@example.com",
    initials: "AM",
    interests: ["Coffee", "Books", "Hiking", "Art"]
  };
  
  const joinedEvents = [
    {
      id: "1",
      title: "Coffee & Conversation",
      date: "Mar 15, 2025",
      time: "10:00 AM",
      status: "upcoming"
    },
    {
      id: "2",
      title: "Nature Photography Walk",
      date: "Mar 18, 2025",
      time: "3:00 PM",
      status: "upcoming"
    },
    {
      id: "4",
      title: "Book Club Meeting",
      date: "Feb 20, 2025",
      time: "2:00 PM",
      status: "past"
    }
  ];
  
  const upcomingEvents = joinedEvents.filter(e => e.status === "upcoming");
  const pastEvents = joinedEvents.filter(e => e.status === "past");

  const handleSignOut = async () => {
    setLoading(true)
    await signOut({ callbackUrl: '/'})
    router.push('/')
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="border border-border p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                {/* <Avatar className="w-20 h-20 border-2 border-primary">
                  <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    {user.initials}
                  </AvatarFallback>
                </Avatar> */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-1">{user_profile.name}</h1>
                  <p className="text-muted-foreground mb-3">{user_profile.email}</p>
                  <div className="flex flex-wrap gap-2">
                    {user_profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center border border-border cursor-pointer">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
                <button onClick={handleSignOut} className="flex-1 sm:flex-none flex items-center cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  {
                    loading ? 'Signing out...' : 'Sign out'
                  }
                </button>
              </div>
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-border p-4 hover:shadow-md transition-shadow">
                    <Link href={`/events/${event.id}`} className="block">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {event.date} at {event.time}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]">
                          Joined
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-border p-8 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-4">No upcoming events yet</p>
                <Button variant="default" asChild>
                  <Link to="/events">Explore Events</Link>
                </Button>
              </div>
            )}
          </div>
          
          {/* Past Events */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Past Events</h2>
            {pastEvents.length > 0 ? (
              <div className="space-y-3">
                {pastEvents.map((event) => (
                  <div key={event.id} className="border border-border p-4 opacity-75">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center border border-border">
                <p className="text-muted-foreground">No past events</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;