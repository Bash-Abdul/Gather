import React from 'react'
import { Calendar, MapPin, Users } from "lucide-react";
import Link from 'next/link';

const EventCard = ({ id, title, date, time, location, description, attendees, category }) => {
  return (
    <div
    key={id}
    className="group overflow-hidden transition-all duration-300 hover:shadow-lg border border-border bg-card rounded-lg"
  >
    {/* Placeholder "image" */}
    <div
      role="img"
      aria-label={`${title} cover placeholder`}
      className="w-full bg-blue-300/60"
    >
      {/* 16:9 aspect box */}
      <div className="aspect-[16/9]" />
    </div>

    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
          {category}
        </span>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="w-4 h-4 mr-1" />
          <span>{attendees} joined</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-foreground">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span>
            {date} at {time}
          </span>
        </div>
        <div className="flex items-center text-sm text-foreground">
          <MapPin className="w-4 h-4 mr-2 text-accent" />
          <span>{location}</span>
        </div>
      </div>

      {/* Future CTA spot */}
      <Link className="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90" href={`/events/${id}`}>
        View details
      </Link>
    </div>
  </div>
  )
}

export default EventCard