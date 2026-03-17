import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">
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
              © 2026 Risca Insurance Community.
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              Join community bisnis proteksi finansial yang tumbuh pesat. Belajar, berkembang, dan sukses bersama melalui mentorship & support system yang sudah terbukti.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/risca.agustine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/6281260006303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-400 transition-colors"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
