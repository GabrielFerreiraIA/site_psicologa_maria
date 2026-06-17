/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Header from "./components/Header";
import HeroImmersive from "./components/HeroImmersive";
import PainPointsCards from "./components/PainPointsCards";
import AboutSection from "./components/AboutSection";
import ApproachReveal from "./components/ApproachReveal";
import ApproachTabSection from "./components/ApproachTabSection";
import ServicesBento from "./components/ServicesBento";
import EditorialTestimonials from "./components/EditorialTestimonials";
import BentoFooter from "./components/BentoFooter";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-sand text-espresso font-sans relative flex flex-col justify-between selection:bg-terracota selection:text-sand">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-terracota z-[9999] pointer-events-none"
      />
      {/* Background paper fine grain overlay */}
      <div className="grain-noise min-h-screen flex flex-col w-full relative">
        
        {/* Navigation bar */}
        <Header />

        {/* Hero split screen intro fold */}
        <HeroImmersive />

        {/* Empathy pain validate cards */}
        <PainPointsCards />

        {/* About section — who is Maria Soares */}
        <AboutSection />

        {/* Approach methods clinical step nodes */}
        <ApproachReveal />

        {/* Interactive thought restructurer tabs logic */}
        <ApproachTabSection />

        {/* Areas of action bento grid layout */}
        <ServicesBento />

        {/* Social trust editorial highlights citation marquee */}
        <EditorialTestimonials />

        {/* Logistics offices and GPS details map footer */}
        <BentoFooter />

        {/* Concierge pill WhatsApp click trigger */}
        <FloatingWhatsApp />

      </div>
    </div>
  );
}

