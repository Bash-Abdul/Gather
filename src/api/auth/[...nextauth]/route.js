// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // add OAuth providers later if you want (Google, GitHub)
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "database", // NextAuth will store sessions in DB via adapter
  },
  callbacks: {
    async session({ session, user }) {
      // attach useful fields to the client session object
      session.user.id = user.id;
      session.user.isAnonymous = user.isAnonymous;
      session.user.onboardingDone = user.onboardingDone;
      session.user.nickname = user.nickname ?? null;
      return session;
    },
  },
  pages: {
    // let the app handle sign-in UI; NextAuth will still send magic links
    signIn: "/auth", 
  },
  // events: { createUser: async ({ user }) => { /* optional event hook */ } },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
