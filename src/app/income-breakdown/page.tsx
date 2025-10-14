"use client";

import React from 'react';
import Link from 'next/link';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const IncomeBreakdownPage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>
      
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Header */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pt-24 pb-8">
        <Link href="/" className="text-white/70 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6" style={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 3s linear infinite'
          }}>
            Kalkulasi Penghasilan Real
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
            Sistem income duplication yang terbukti. Penghasilan dari personal production dan group performance dengan potensi unlimited income melalui tier system yang scalable.
          </p>
        </div>
      </section>

      {/* Personal Production Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              Personal Production Breakdown
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Base Production: 300 Units</h3>
                <p className="text-white/80 mb-4">Dengan sistem 1:4 ratio (1 Producer : 4 Builder), setiap producer menghasilkan output personal sebesar 300 units dengan conversion rate 25%.</p>
                <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-4">
                  <p className="text-white font-medium">Core Producer Output: 300 × 25% = 75 units</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">APE Conversion</h3>
                <p className="text-white/80 mb-4">Setiap project dikonversi menjadi APE (Active Production Equivalent) dengan rasio 1 project = 1.8 APE untuk maksimalisasi income calculation.</p>
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                  <p className="text-white font-medium">1 Project = 1.8 APE</p>
                </div>
              </div>
            </div>

            {/* Income Breakdown Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-black/20 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-white font-semibold">Item</th>
                    <th className="text-left p-4 text-white font-semibold">Description</th>
                    <th className="text-right p-4 text-white font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Personal Income</td>
                    <td className="p-4 text-white/80">Direct sales-based earnings</td>
                    <td className="p-4 text-white/90 font-bold text-right">75 jt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Bonus Production</td>
                    <td className="p-4 text-white/80">Tier-based bonus from performance</td>
                    <td className="p-4 text-white/90 font-bold text-right">22.5 jt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">PPD</td>
                    <td className="p-4 text-white/80">Performance Point Distribution</td>
                    <td className="p-4 text-white/90 font-bold text-right">5 jt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Mentorship Bonus</td>
                    <td className="p-4 text-white/80">Incentive for supporting new producers</td>
                    <td className="p-4 text-white/90 font-bold text-right">5 jt</td>
                  </tr>
                  <tr className="bg-pink-500/20">
                    <td className="p-4 text-white font-bold">Total Monthly</td>
                    <td className="p-4 text-white/80">Per cycle earnings</td>
                    <td className="p-4 text-white font-bold text-right text-lg">~27.5 jt</td>
                  </tr>
                  <tr className="bg-green-500/20">
                    <td className="p-4 text-white font-bold">Annual Projection</td>
                    <td className="p-4 text-white/80">27.5 jt × 12 months</td>
                    <td className="p-4 text-white font-bold text-right text-xl">306 jt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>

      {/* Group Production Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              Group Production System
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Team Structure</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>• Total Group Production: 1.26 billion (combined)</li>
                  <li>• Group Ratio: 4:1 (Producer to Builder)</li>
                  <li>• Bonus Case: 10 APE average per team</li>
                  <li>• Production Distribution: 75% to active agents</li>
                  <li>• Total Agents: ~20 per active cluster</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Agent Contribution</h3>
                <div className="space-y-4">
                  <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-4">
                    <p className="text-white font-medium">Each agent: ~250 APE</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-4">
                    <p className="text-white font-medium">250 × 25% × 20.5% = 12.81 jt per agent</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-4">
                    <p className="text-white font-bold">Group Value: 20 × 12.81 jt = 256.2 jt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>

      {/* Tier System Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              13-Level Tier System
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-black/20 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-white font-semibold">Tier</th>
                    <th className="text-left p-4 text-white font-semibold">Gain (%)</th>
                    <th className="text-left p-4 text-white font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">1-3</td>
                    <td className="p-4 text-green-400 font-bold">3-8%</td>
                    <td className="p-4 text-white/80">Entry-level productivity gain</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">4-10</td>
                    <td className="p-4 text-yellow-400 font-bold">10-20%</td>
                    <td className="p-4 text-white/80">Mid-level active producers</td>
                  </tr>
                  <tr className="bg-pink-500/20">
                    <td className="p-4 text-white font-bold">11-13</td>
                    <td className="p-4 text-pink-400 font-bold text-lg">20.5%</td>
                    <td className="p-4 text-white font-bold">Top-tier performers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Tier Gain Formula Example:</h4>
              <p className="text-white/90 text-lg">200 APE × 25% × 20.5% = <span className="font-bold text-pink-400">10.25 APE</span> (bonus added to total income)</p>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>

      {/* Combined Income Summary */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              Total Income Potential
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Personal Income</h3>
                <p className="text-3xl font-bold text-white">125 jt</p>
                <p className="text-white/80 text-sm">Individual sales & bonuses</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2">Group Income</h3>
                <p className="text-3xl font-bold text-white">151.5 jt</p>
                <p className="text-white/80 text-sm">Team & downline performance</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Total Annual</h3>
                <p className="text-4xl font-bold text-white">276.5 jt</p>
                <p className="text-white/80 text-sm">Scalable & recurring</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Implementation Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <ul className="text-white/90 space-y-2">
                  <li>• Average agent: 8-15 applications weekly</li>
                  <li>• Minimum group completion: 15 applications</li>
                  <li>• Constant training & coaching support</li>
                </ul>
                <ul className="text-white/90 space-y-2">
                  <li>• Realistic, incremental results focused</li>
                  <li>• Performance-based bonus system</li>
                  <li>• Unlimited income scaling potential</li>
                </ul>
              </div>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>
    </div>
  );
};

export default IncomeBreakdownPage;