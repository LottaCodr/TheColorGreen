'use client'
import BrandSection from "@/components/brands";
import EventSection from "@/components/event";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
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
        <section className="w-full mb-8">
          <Features />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
