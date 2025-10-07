// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <div className="bg-white w-full">
//         <div className="container mx-auto w-[90%] py-6">
//           <div className="flex items-center justify-between">

//             {/* LOGOG */}
//             <div className="text-xl font-bold text-purple-700">
//               <h1>Gather</h1>
//             </div>

//             {/* NAV AND CTA */}
//             <div>
//               <ul className="flex items-center gap-x-6 text-sm">
//                 <li>Home</li>
//                 <li>Events</li>
//                 <li>Onboarding</li>
//                 <li>Profile</li>
//                 <li className="text-white bg-purple-600 px-4 py-3 rounded-2xl font-semibold">Signin</li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import WhyChoose from "../components/HomePage/WhyChoose";
import Events from "../components/HomePage/Events";
import Hero_Image from '../../assets/hero-image.jpg'
import Image from "next/image";
import Hero_image from '@/assets/hero-image.jpg'

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      {/* HERO: image behind + gradient overlay */}
          {/* Hero Section */}
          <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Hero_image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/90 dark:from-background/95 dark:via-background/90 dark:to-background/85" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              {/* <Calendar className="w-4 h-4 text-primary" /> */}
              <span className="text-sm font-medium text-primary">Meaningful Connections</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Find Events That{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Fit Your Vibe
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Connect with like-minded people at small, thoughtfully curated gatherings. 
              No crowds. No pressure. Just genuine connections in a comfortable environment.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="shadow-lg" asChild>
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/auth">Create Account</Link>
              </Button>
            </div> */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Small Groups (5-15 people)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Verified Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Safe & Welcoming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <WhyChoose />

      {/* UPCOMING EVENTS */}
      <Events />
    </section>
  );
}

// export default function HomePage() {
//   return (
//     <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
//       <div className="rounded-2xl p-10 [background-image:var(--gradient-hero)] shadow-[var(--shadow-soft)]">
//         <h1 className="text-4xl sm:text-5xl font-semibold text-primary-foreground">
//           Find your people, at your pace
//         </h1>
//         <p className="mt-3 text-primary-foreground/90 max-w-2xl">
//           Join calm meetups, try new things, connect without the noise.
//         </p>

//         <div className="flex items-center gap-x-6 mt-5">
//           <button
//             className="inline-flex items-center gap-2 rounded-lg px-4 py-2
//                    bg-primary text-primary-foreground shadow-sm
//                    hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-ring
//                    transition-all"
//           >
//             Explore events {"->"}
//           </button>

//           <button
//             className="inline-flex items-center gap-2 rounded-lg px-4 py-2
//                    bg-primary text-primary-foreground shadow-sm
//                    hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-ring
//                    transition-all"
//           >
//             Create Account
//           </button>
//         </div>
//       </div>

//       {/* Features */}
//       <WhyChoose />

//       {/* UPCOMING EVENTS */}

//       <Events />

//       {/* <button
//         className="inline-flex items-center gap-2 rounded-lg px-4 py-2
//                    bg-primary text-primary-foreground shadow-sm
//                    hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-ring
//                    transition-all"
//       >
//         Create an event
//       </button> */}
//     </section>
//   );
// }
