// // app/api/auth/[...nextauth]/route.js
// import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/lib/prisma";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     EmailProvider({
//       server: process.env.EMAIL_SERVER,
//       from: process.env.EMAIL_FROM,
//     }),
//     // add OAuth providers later if you want (Google, GitHub)
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "database", // NextAuth will store sessions in DB via adapter
//   },
//   callbacks: {
//     async session({ session, user }) {
//       // attach useful fields to the client session object
//       session.user.id = user.id;
//       session.user.isAnonymous = user.isAnonymous;
//       session.user.onboardingDone = user.onboardingDone;
//       session.user.nickname = user.nickname ?? null;
//       return session;
//     },
//   },
//   pages: {
//     // let the app handle sign-in UI; NextAuth will still send magic links
//     signIn: "/auth",
//   },
//   // events: { createUser: async ({ user }) => { /* optional event hook */ } },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// src/app/api/auth/[...nextauth]/route.js
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// // import prisma from "../../../../lib/prisma";
// // import prisma from '@/lib/prisma'
// import prisma from '../../../../lib/prisma'
// import bcrypt from "bcryptjs";

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         if (!credentials?.email || !credentials?.password) return null;

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email }
//         });

//         // no user or no password set (for social login) => reject
//         if (!user || !user.passwordHash) return null;

//         const valid = bcrypt.compareSync(credentials.password, user.passwordHash);
//         if (!valid) return null;

//         // NextAuth expects an object with at least an id
//         return { id: user.id, name: user.name ?? user.nickname ?? null, email: user.email };
//       }
//     })
//   ],
//   session: {
//     strategy: "jwt"
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       // first time jwt callback runs, user object is available
//       if (user) {
//         token.userId = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // attach userId to session.client
//       if (token?.userId) session.user.id = token.userId;
//       return session;
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     // optional: you can specify custom signIn page like '/auth/signin'
//   }
// });

// export { handler as GET, handler as POST };

// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client'
// import prisma from "../../../lib/prisma"; // keep if you have prisma; else remove
import prisma from "@/lib/prisma";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // If you have prisma + users, fetch and compare:
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          if (!user) throw new Error("No user found with this email");
          const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");
          // if (!user || !user.password) return null;
          // const ok = bcrypt.compareSync(
          //   credentials.password,
          //   user.passwordHash
          // );
          // if (!ok) return null;
          return { id: user.id, name: user.name ?? null, email: user.email };
        } catch (err) {
          // if prisma import or db fails, bubble a controlled error
          console.error("authorize error:", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth", // optional: where your login/signup form lives
  },
  session: { strategy: "jwt" },
  callbacks: {
    // async jwt({ token, user }) {
    //   if (user) token.userId = user.id;
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (token?.userId) session.user.id = token.userId;
    //   return session;
    // },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// App Router requires explicit exports for GET and POST
export { handler as GET, handler as POST };
