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
          <p className="text-white/70 text-center max-w-md">
            MANULIFE Jakarta - Peluang Bisnis Asuransi
          </p>
        </div>

        <div className="border-t pt-8 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-4 text-center">
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.description}
          </span>
          <div className="flex space-x-6">

          </div>
        </div>
      </div>
    </footer>
  );
}
