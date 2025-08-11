import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
];

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center shadow-md p-6">
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <Image src="/next.svg" alt="Logo" width={60} height={60} />
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          My Application
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col md:flex-row items-center p-2 gap-20">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <h2 className="text-lg hover:scale-110 duration-150 transition hover:text-primary hover:font-medium">
              {item.label}
            </h2>
          </Link>
        ))}
      </div>

      {/* Button */}
      <Button className="w-full md:w-auto">Get Started</Button>
    </div>
  );
}

export default Header;
