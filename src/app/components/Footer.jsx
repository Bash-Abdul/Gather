import React from 'react'
import Link from "next/link";
import { Calendar, Home, User } from "lucide-react";

const Footer = () => {
  return (
    <section className='flex items-center justify-between py-7 border-t border-border bg-card/50 backdrop-blur-sm container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
              <Calendar className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gather
            </span>
          </Link>


          <span className='text-sm text-muted-foreground'>© 2025 Gather. All rights reserved.</span>
    </section>
  )
}

export default Footer