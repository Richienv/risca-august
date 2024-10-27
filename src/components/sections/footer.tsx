import { siteConfig } from "@/lib/config";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <Image src="/alife_logo.png" alt="Alife Logo" width={80} height={80} className="w-auto h-16 mb-4" />
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
