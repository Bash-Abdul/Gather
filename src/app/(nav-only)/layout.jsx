import Navigation from "../components/navigation";

export default function WithNavFooterLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
    </>
  );
}