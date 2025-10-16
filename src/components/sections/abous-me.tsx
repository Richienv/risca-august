"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Users, Shield, Heart } from 'lucide-react';
import { AnimatedFeatureSpotlight } from '@/components/ui/feature-spotlight';

const AboutMeSection = () => {
  return (
    <section className="relative w-full text-white overflow-hidden py-8 lg:py-16">
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          {/* Feature Spotlight Component */}
          <div className="mb-16">
            <AnimatedFeatureSpotlight
              preheaderIcon={<Shield className="w-4 h-4 text-amber-400" />}
              preheaderText="Perlindungan Terbaik untuk Keluarga"
              heading={
                <span>
                  Asuransi <span className="text-amber-400">Terpercaya</span>
                  <br />
                  untuk Masa Depan
                </span>
              }
              description="Dapatkan perlindungan kesehatan terbaik dengan coverage lengkap, proses klaim mudah, dan jaringan rumah sakit terluas di Seluruh DUNIA. Investasi terbaik untuk keamanan keluarga Anda."
              buttonText="Konsultasi Gratis"
              buttonProps={{
                className: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold",
                onClick: () => {
                  window.location.href = '/reason-join';
                }
              }}
              imageUrl="/images/woman.png"
              imageAlt="Professional woman representing insurance services"
              className="bg-transparent border border-amber-500/30 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;