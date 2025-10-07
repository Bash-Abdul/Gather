// app/(nav-footer)/layout.jsx
// import Navigation from "../components/navigation";
// import Footer from "../components/Footer";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";

export default function WithNavFooterLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
