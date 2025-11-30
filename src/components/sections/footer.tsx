import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Risca Agustine
            </span>
          </div>
          <div className="text-white/70 text-center max-w-md space-y-1">
            <p>Life & Health Business Unit – Jakarta</p>
            <p>Bagian dari Agency Network Manulife</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <p className="text-sm text-white/60 mb-2">
              © 2025 Risca Insurance Community.
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              Join community bisnis proteksi finansial yang tumbuh pesat. Belajar, berkembang, dan sukses bersama melalui mentorship & support system yang sudah terbukti.
            </p>
          </div>
          <div className="flex space-x-6">

          </div>
        </div>
      </div>
    </footer>
  );
}
