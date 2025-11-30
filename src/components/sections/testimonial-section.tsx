"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import Marquee from '@/components/magicui/marquee';

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  story: string;
  image: string;
  rating: number;
  income: string;
}

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative w-72 sm:w-80 mx-4 overflow-hidden bg-black/40 backdrop-blur-md border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 group hover:bg-black/50 rounded-2xl p-4 sm:p-6 flex-shrink-0">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-5 h-5 text-amber-400" strokeWidth={2} />
      </div>

      {/* Income Badge */}
      <div className="mb-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-400/30">
          <span className="text-xs font-semibold text-amber-400">💰 {testimonial.income}</span>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <div className="mb-4">
        <p className="text-sm font-medium text-white leading-tight">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Story */}
      <div className="text-white mb-6">
        <p className="text-xs text-white/80 leading-relaxed font-light">
          {testimonial.story.length > 120 ? testimonial.story.substring(0, 120) + '...' : testimonial.story}
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-amber-500/20">
          <img
            src={testimonial.image}
            alt={`${testimonial.name} profile picture`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient with initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center" style={{ display: 'none' }}>
            <span className="text-white font-semibold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{testimonial.name}</h3>
          <p className="text-xs text-white/70 font-light">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);

  React.useEffect(() => {
    const loadTestimonials = async () => {
      try {
        console.log('Loading testimonials...');
        const response = await fetch('/testimonial-infomration.json');
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Testimonials loaded:', data);
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      }
    };

    loadTestimonials();
  }, []);

  // Show loading state
  if (testimonials.length === 0) {
    return (
      <section className="relative w-full text-white overflow-hidden py-8 lg:py-16">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 text-sm font-medium text-amber-400 mb-4">
                <Quote className="w-4 h-4" />
                <span>Testimoni Nyata</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                <span className="text-amber-400">Income Real</span> dari Tim Kami
              </h2>
              <p className="text-white/80 text-sm">Memuat data income tim...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full text-white overflow-hidden pb-8 pt-4 lg:pb-16 lg:pt-8">
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 w-full">
        {/* Header Section */}
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-amber-400 mb-4">
              <Quote className="w-4 h-4" />
              <span>Testimoni Nyata</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              <span className="text-amber-400">Progress Real</span>, Bukan Janji
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Inilah kisah mereka yang memilih mencoba, tetap konsisten, dan akhirnya menemukan versi terbaik diri mereka.
            </p>
          </div>
        </div>

        {/* Infinite Scrolling Testimonial Cards */}
        <div className="relative overflow-hidden pl-4">
          <Marquee
            pauseOnHover={true}
            className="[--duration:80s] py-4"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;