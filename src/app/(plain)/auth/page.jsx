// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Calendar, ArrowLeft } from "lucide-react";

// export default function AuthPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState("login"); // "login" or "signup"
//   // const [selectedInterests, setSelectedInterests] = useState([]);

//   // const interestsList = ["Coffee", "Books", "Hiking", "Art", "Music", "Movies"];

//   // const toggleInterest = (interest) => {
//   //   setSelectedInterests((prev) =>
//   //     prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
//   //   );
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // collect form data depending on active tab
//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const payload = Object.fromEntries(formData.entries());

//     if (activeTab === "signup") {
//       payload.interests = selectedInterests;
//     }

//     // placeholder for real auth logic (replace with fetch/supabase/etc)
//     console.log("submit", activeTab, payload);

//     // fake delay to simulate network
//     setTimeout(() => {
//       setIsLoading(false);
//       // you might want to redirect using next/navigation here:
//       // const router = useRouter(); router.push("/dashboard");
//     }, 800);
//   };

//   return (
//     <div className="w-screen h-screen bg-background flex items-center justify-center p-4 fixed top-0 left-0 z-[1000]">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <Link href="/" className="inline-flex items-center space-x-2 group mb-6">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
//               <Calendar className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Gather
//             </span>
//           </Link>
//           <h1 className="text-3xl font-bold mb-2">Welcome</h1>
//           <p className="text-muted-foreground">Join a community that gets you</p>
//         </div>

//         {/* Card */}
//         <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
//           {/* Tabs */}
//           <div className="mb-6">
//             <div role="tablist" aria-label="Authentication tabs" className="grid grid-cols-2 gap-2">
//               <button
//                 role="tab"
//                 aria-selected={activeTab === "login"}
//                 onClick={() => setActiveTab("login")}
//                 className={`py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 ${
//                   activeTab === "login"
//                     ? "bg-primary text-primary-foreground shadow"
//                     : "bg-card text-muted-foreground border border-border"
//                 }`}
//                 type="button"
//               >
//                 Sign In
//               </button>

//               <button
//                 role="tab"
//                 aria-selected={activeTab === "signup"}
//                 onClick={() => setActiveTab("signup")}
//                 className={`py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 ${
//                   activeTab === "signup"
//                     ? "bg-primary text-primary-foreground shadow"
//                     : "bg-card text-muted-foreground border border-border"
//                 }`}
//                 type="button"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>

//           {/* Tab panels */}
//           {activeTab === "login" && (
//             <div role="tabpanel" aria-labelledby="signin-tab">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-1">
//                   <label htmlFor="login-email" className="block text-sm font-medium text-muted-foreground">
//                     Email
//                   </label>
//                   <input
//                     id="login-email"
//                     name="email"
//                     type="email"
//                     required
//                     placeholder="you@example.com"
//                     className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <label htmlFor="login-password" className="block text-sm font-medium text-muted-foreground">
//                     Password
//                   </label>
//                   <input
//                     id="login-password"
//                     name="password"
//                     type="password"
//                     required
//                     className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full h-11 rounded-md bg-primary text-primary-foreground font-medium disabled:opacity-60 disabled:cursor-not-allowed"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Signing in..." : "Sign In"}
//                 </button>

//                 <div className="text-center">
//                   <button type="button" className="text-sm text-primary hover:underline">
//                     Forgot password?
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {activeTab === "signup" && (
//             <div role="tabpanel" aria-labelledby="signup-tab">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-1">
//                   <label htmlFor="signup-name" className="block text-sm font-medium text-muted-foreground">
//                     Full Name
//                   </label>
//                   <input
//                     id="signup-name"
//                     name="name"
//                     type="text"
//                     required
//                     placeholder="Alex Morgan"
//                     className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <label htmlFor="signup-email" className="block text-sm font-medium text-muted-foreground">
//                     Email
//                   </label>
//                   <input
//                     id="signup-email"
//                     name="email"
//                     type="email"
//                     required
//                     placeholder="you@example.com"
//                     className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <label htmlFor="signup-password" className="block text-sm font-medium text-muted-foreground">
//                     Password
//                   </label>
//                   <input
//                     id="signup-password"
//                     name="password"
//                     type="password"
//                     required
//                     className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
//                   />
//                 </div>

//                 {/* <div className="space-y-1">
//                   <label className="block text-sm font-medium text-muted-foreground">Interests (optional)</label>
//                   <div className="flex flex-wrap gap-2">
//                     {interestsList.map((interest) => {
//                       const active = selectedInterests.includes(interest);
//                       return (
//                         <button
//                           key={interest}
//                           type="button"
//                           aria-pressed={active}
//                           onClick={() => toggleInterest(interest)}
//                           className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors focus:outline-none focus:ring-2 ${
//                             active
//                               ? "bg-primary text-primary-foreground border-transparent"
//                               : "bg-card text-muted-foreground border border-border hover:bg-primary/10"
//                           }`}
//                         >
//                           {interest}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div> */}

//                 <button
//                   type="submit"
//                   className="w-full h-11 rounded-md bg-primary text-primary-foreground font-medium disabled:opacity-60 disabled:cursor-not-allowed"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Creating account..." : "Create Account"}
//                 </button>

//                 <p className="text-xs text-center text-muted-foreground">
//                   By signing up, you agree to our Terms and Privacy Policy
//                 </p>
//               </form>
//             </div>
//           )}
//         </div>

//         <div className="text-center mt-6">
//           <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
//             <ArrowLeft className="w-4 h-4 mr-1" />
//             Back to home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { signIn } from "next-auth/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // "login" or "signup"
  const [error, setError] = useState(null);

  // If you want interests later, uncomment these and rewire payload
  // const [selectedInterests, setSelectedInterests] = useState([]);
  // const interestsList = ["Coffee", "Books", "Hiking", "Art", "Music", "Movies"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      if (activeTab === "signup") {
        // client-side sanity checks
        const { name, email, password, confirmPassword } = payload;
        if (!name || !email || !password || !confirmPassword) {
          toast.error('Please fill all fields..');
          throw new Error("Please fill all fields.");
        }
        if (password !== confirmPassword) {
          toast.error('Passwords do not match..');
          throw new Error("Passwords do not match.");
        }

        const res = await axios.post("/api/auth/signup", {
          name,
          email,
          password,
          confirmPassword,
        });

        // call your signup API
        // const res = await fetch("/api/auth/signup", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ name, email, password, confirmPassword }),
        // });

        const data = res.data;

        if (data?.error) {
          toast.error(data.error || "Signup Failed");
          throw new Error(data.error || "Signup Failed");
        }

        // if (!res.ok) {
        //   toast.error(json?.error || 'Signup Failed');
        //   throw new Error(json?.error || "Signup failed");
        // }
        toast.success(data?.message || "Account successfully created");

        // auto sign-in using NextAuth (credentials)
        const signInResult = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (signInResult?.error) {
          toast.error(signInResult.error || "Sign in after signup failed");
          throw new Error(signInResult.error || "Sign in after signup failed");
        }

        // success
        router.push("/");
        console.log("logged in after signing up");
      } else {
        // login flow (email + password)
        const { email, password } = payload;
        if (!email || !password){
          toast.error("Please enter email and password");
          throw new Error("Please enter email and password.");
        }

        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (res?.error) {
          toast.error(res.error || "Invalid credentials");
          throw new Error(res.error || "Invalid credentials");
        }
        toast.success("Signed in successfully!");

        router.push("/");
        console.log("Logged in");
      }
    } catch (err) {
      setError(err?.message ?? "Something went wrong");
      toast.error(
        err.response?.data?.error || err.message || "Signup failed"
      );
      throw err
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-background flex items-center justify-center p-4 fixed top-0 left-0 z-[1000]">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 group mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gather
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <p className="text-muted-foreground">
            Join a community that gets you
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          {/* Tabs */}
          <div className="mb-6">
            <div
              role="tablist"
              aria-label="Authentication tabs"
              className="grid grid-cols-2 gap-2"
            >
              <button
                role="tab"
                aria-selected={activeTab === "login"}
                onClick={() => {
                  setActiveTab("login");
                  setError(null);
                }}
                className={`py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  activeTab === "login"
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-card text-muted-foreground border border-border"
                }`}
                type="button"
              >
                Sign In
              </button>

              <button
                role="tab"
                aria-selected={activeTab === "signup"}
                onClick={() => {
                  setActiveTab("signup");
                  setError(null);
                }}
                className={`py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  activeTab === "signup"
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-card text-muted-foreground border border-border"
                }`}
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

          {/* Tab panels */}
          {activeTab === "login" && (
            <div role="tabpanel" aria-labelledby="signin-tab">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label
                    htmlFor="login-email"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                    className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full h-11 rounded-md bg-primary text-primary-foreground font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "signup" && (
            <div role="tabpanel" aria-labelledby="signup-tab">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label
                    htmlFor="signup-name"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="signup-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="signup-email"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="signup-password"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="signup-confirm"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="signup-confirm"
                    name="confirmPassword"
                    type="password"
                    required
                    className="w-full h-11 px-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* If you want interests later, reintroduce the UI and add them to payload */}
                <button
                  type="submit"
                  className="cursor-pointer w-full h-11 rounded-md bg-primary text-primary-foreground font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  By signing up, you agree to our Terms and Privacy Policy
                </p>
              </form>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
