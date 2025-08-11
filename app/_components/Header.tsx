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
    <div className="flex justify-between items-center bg-gray-200 shadow-md p-4">
      <div className="flex gap-4 items-center p-4 ">
        <Image src="/next.svg" alt="Logo" width={50} height={50} />
        <h1 className="text-2xl font-bold ml-4">My Application</h1>
      </div>
      <div className="flex items-center p-4 gap-8">
        {menuItems.map((item) => (
          <Link href={item.href}>
            <h2 className="text-lg hover:scale-110 duration-150 transition mx-2">
              {item.label}
            </h2>
          </Link>
        ))}
      </div>

      <Button className="bg text-white">Get Started</Button>
    </div>
  );
}

export default Header;
