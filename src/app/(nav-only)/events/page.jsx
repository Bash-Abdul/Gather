'use client'

import React from 'react'
import Link from 'next/link';
import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import Navigation from '../components/navigation';
import Navigation from '@/app/components/navigation';
// import EventCard from "@/components/EventCard";
// import EventCard from '../components/EventCard';
import EventCard from '@/app/components/EventCard';
// import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
// import { Input } from "@/components/ui/input";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Coffee", "Movies", "Hiking", "Books", "Art", "Music"];
  
  const allEvents = [
    {
      id: "1",
      title: "Coffee & Conversation",
      date: "Mar 15, 2025",
      time: "10:00 AM",
      location: "Cozy Corner Cafe",
      description: "Small group coffee meetup for meaningful conversations in a quiet setting.",
      attendees: 5,
      category: "Coffee"
    },
    {
      id: "2",
      title: "Nature Photography Walk",
      date: "Mar 18, 2025",
      time: "3:00 PM",
      location: "City Botanical Gardens",
      description: "Peaceful walk through the gardens. Bring your camera and enjoy the quiet beauty.",
      attendees: 8,
      category: "Hiking"
    },
    {
      id: "3",
      title: "Indie Film Screening",
      date: "Mar 20, 2025",
      time: "7:00 PM",
      location: "The Quiet Cinema",
      description: "Watch and discuss a thoughtful indie film in an intimate theater setting.",
      attendees: 12,
      category: "Movies"
    },
    {
      id: "4",
      title: "Book Club: Quiet Reads",
      date: "Mar 22, 2025",
      time: "2:00 PM",
      location: "Central Library",
      description: "Monthly book club discussion in a calm library setting. This month: contemporary fiction.",
      attendees: 6,
      category: "Books"
    },
    {
      id: "5",
      title: "Watercolor Workshop",
      date: "Mar 25, 2025",
      time: "11:00 AM",
      location: "Art Studio Loft",
      description: "Beginner-friendly watercolor class in a peaceful studio. All materials provided.",
      attendees: 10,
      category: "Art"
    },
    {
      id: "6",
      title: "Acoustic Evening",
      date: "Mar 27, 2025",
      time: "6:30 PM",
      location: "The Listening Room",
      description: "Intimate acoustic performance in a cozy venue. Limited seating for the best experience.",
      attendees: 15,
      category: "Music"
    }
  ];
  
  const filteredEvents = activeCategory === "All" 
    ? allEvents 
    : allEvents.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Discover Events</h1>
            <p className="text-lg text-muted-foreground">
              Find your next meaningful gathering
            </p>
          </div>
          {/* <Button asChild>
            <Link to="/create-event">
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Link>
          </Button> */}
          <button className='rounded-lg px-4 py-2
                   bg-primary text-primary-foreground shadow-sm
                   hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-ring
                   transition-all'>
            <Link href="/create-event" className='flex items-center'>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Link>
          </button>
        </div>
        
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 h-12 bg-card border-border"
            />
          </div>
        </div>
        
        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                // variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className='py-2 px-3 border border-border rounded-lg hover:bg-primary text-primary-foreground text-sm'
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No events found in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;