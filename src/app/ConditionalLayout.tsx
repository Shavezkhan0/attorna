"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar/pages";
import Footer from "./Components/Footer/Footer";
import TitleUpdater from "./utils/PageTitle/TitleUpdater";
import ScrollToTopButton from "./utils/ScrollToTopButton/ScrollToTopButton";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Don't show Navbar/Footer on admin routes
  const isAdminRoute = pathname?.startsWith("/admin") || pathname?.startsWith("/api");
  
  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <TitleUpdater />
      <Navbar />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

