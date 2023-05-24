"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Icons } from "@/components/Icons";
import { MobileNav } from "./MobileNav";
import { useState } from "react";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
        <span
          aria-hidden="true"
          className="hidden md:block md:h-6 md:w-px md:bg-gray-100"
        ></span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, idx) => (
            <Link
              href={item.disabled ? "#" : item.href}
              key={idx}
              className={cn(
                "flex items-center text-lg font-semibold text-slate-600 sm:text-sm",
                item.href.startsWith(`/${segment}`) && "text-slate-900",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">
          {/* <Icons.menu /> */}
          BlankBox
        </span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
