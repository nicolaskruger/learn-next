// SearchBar is a Client Component

import { Logo } from "@/components/logo/logo";
import { SearchBar } from "@/components/search-bar/search-bar";

// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  );
}
