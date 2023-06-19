import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavItem({ navKey }) {
  const { name, svg, path } = navKey;
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-l-lg";
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link
      className={pathname === path ? activeLink : inactiveLink}
      href={`/${path}`}
      key={name}
    >
      {svg}
      {name}
    </Link>
  );
}

export default NavItem;
