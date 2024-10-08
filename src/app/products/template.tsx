"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="flex gap-5 text-red-600">
        <Link
          className={pathname === "/products/sport" ? "text-blue-600" : ""}
          prefetch={false}
          scroll={false}
          href={"/products/sport"}
        >
          sport
        </Link>
        <Link
          className={pathname === "/products/fashion" ? "text-blue-600" : ""}
          replace={true}
          href={"/products/fashion"}
        >
          fashion
        </Link>
        <Link
          className={pathname === "/products/technology" ? "text-blue-600" : ""}
          href={"/products/technology"}
        >
          technology
        </Link>
      </ul>
      {children}
    </>
  );
}
