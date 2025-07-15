import BrandSection from "@/components/brands";
import EventSection from "@/components/event";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { useEffect, useRef } from "react";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to top on mount for better UX
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 flex flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-1 flex flex-col items-center px-4 md:px-0">
        <section className="w-full max-w-5xl mb-8">
          <Hero />
        </section>
        <section className="w-full max-w-5xl mb-8">
          <BrandSection />
        </section>
        <section className="w-full max-w-5xl mb-8">
          <EventSection />
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
