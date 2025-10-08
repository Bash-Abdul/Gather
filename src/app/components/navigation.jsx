"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, User } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { useAuth } from "../providers";

function NavLink({ href, label, Icon }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");

  const base =
    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all";
  const activeClass = "bg-secondary text-secondary-foreground";
  const idleClass = "text-foreground/80 hover:bg-muted";

  return (
    <Link href={href} className={`${base} ${active ? activeClass : idleClass}`}>
      {Icon ? <Icon className="w-4 h-4 sm:mr-2" /> : null}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

export default function Navigation() {
  const { user, status } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
              <Calendar className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gather
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <NavLink href="/" label="Home" Icon={Home} />
            <NavLink href="/events" label="Events" Icon={Calendar} />
            <NavLink href="/onboarding" label="Onboarding" />

            {status === "authenticated" && user ? (
              <NavLink href="/profile" label="Profile" Icon={User} />
            ) : (
              <Link
                href="/auth"
                className="ml-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm
                         bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                Sign In
              </Link>
            )}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
