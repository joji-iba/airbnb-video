"use client";

import Image from "next/image";
// Next.js13以降useRouterのimport元はnext/navigation
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  )
}
