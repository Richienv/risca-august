"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "relative sticky top-0 z-50 py-4 bg-background/60 backdrop-blur w-full"
      }
    >
      <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          title="brand-logo"
          className="relative flex items-center space-x-2"
        >
          <Image src="/alife_logo.png" alt="Alife Logo" width={80} height={80} className="w-auto h-12" />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Contact
          </Link>
          <div className="lg:hidden">
            <Drawer>
              <DrawerTrigger>
                <IoMenuSharp className="text-3xl" />
              </DrawerTrigger>
              <DrawerContent>
                <div className="px-6 py-6">
                  <Link
                    href="/"
                    title="brand-logo"
                    className="relative flex items-center space-x-2 mb-6"
                  >
                    <Image src="/alife_logo.png" alt="Alife Logo" width={80} height={80} className="w-auto h-12" />
                  </Link>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className={buttonVariants({ variant: "default", size: "lg", className: "w-full" })}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
      <hr
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
