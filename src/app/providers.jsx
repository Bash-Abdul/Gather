// "use client";

// import { ThemeProvider } from "next-themes";
// import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
// import React, { createContext, useContext, useMemo } from "react";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// function AuthProviderInner({ children }) {
//   const { data: session, status } = useSession();

//   const value = useMemo(() => {
//     return {
//       user: session?.user ?? null,
//       status, // "loading" | "authenticated" | "unauthenticated"
//       signIn: (opts) => signIn("credentials", opts),
//       signOut: () => signOut(),
//     };
//   }, [session, status]);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export default function Providers({ children }) {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       {/* {children} */}
//       <SessionProvider>
//         <AuthProviderInner>{children}</AuthProviderInner>
//       </SessionProvider>
//     </ThemeProvider>
//   );
// }


"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider, useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import React, { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProviderInner({ children }) {
  const { data: session, status } = useSession();

  // Global error/loading state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    // Production: block UI if session is loading
    // if (status === "loading") return <div>Loading...</div>;

      // Memoize user and functions separately
  const signIn = (opts = {}) => nextAuthSignIn("credentials", { redirect: false, ...opts });
  const signOut = (opts = {}) => nextAuthSignOut({ redirect: false, ...opts });


  const value = useMemo(() => {
    return {
      user: session?.user ?? null,
      status, // "loading" | "authenticated" | "unauthenticated"
      error,
      setError,
      loading,
      setLoading,
      // wrapper so UI can do error handling and routing without forced redirect
      signIn,
      signOut,
    };
  }, [session, status, error, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        <AuthProviderInner>{children}</AuthProviderInner>
      </SessionProvider>
    </ThemeProvider>
  );
}
