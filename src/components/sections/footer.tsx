import { siteConfig } from "@/lib/config";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            title={siteConfig.name}
            className="relative flex items-center space-x-2"
          >
            <Image src="/alife_logo.png" alt="Alife Logo" width={80} height={80} className="w-auto h-12" />
          </Link>
          {siteConfig.socials && (
            <div className="flex space-x-6">
              {siteConfig.socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {siteConfig.footer.map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.text}
                      <ChevronRight className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.description}
          </span>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
