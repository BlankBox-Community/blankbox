import { Footer } from "@/components/Footer";
import { Icons } from "@/components/Icons";
import { MainNav } from "@/components/MainNav";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40">
        <div className="flex h-20 items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link href={siteConfig.links.github} className={cn()}>
              <Icons.github />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
