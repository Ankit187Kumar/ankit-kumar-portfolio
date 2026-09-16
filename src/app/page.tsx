"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Layout
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";

// Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import SelectedWork from "@/components/sections/SelectedWork";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import Skills from "@/components/sections/Skills";
import GithubLinkedIn from "@/components/sections/GithubLinkedIn";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="relative min-h-screen" style={{ background: "#f8fafc" }}>
          <CursorGlow />
          <ScrollProgress />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Capabilities />
            <SelectedWork />
            <Experience />
            <Certificates />
            <Skills />
            <GithubLinkedIn />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
