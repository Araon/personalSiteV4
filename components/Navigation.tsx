"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";

import NavLink from "./ui/NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

const links = [
  { label: "Stories/Notes", href: "/blog" },
  { label: "Work", href: "/projects" },
  { label: "Photographs", href: "/photos" },
  { label: "Music", href: "/music" },
  { label: "Me?", href: "/about" },

  // { label: "Stats", href: "/mediakit" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const { theme } = useTheme();

  return (
    <header className={clsx("relative top-0 z-20 bg-primary md:sticky")}>
      <nav
        className="lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="shrink-0 text-primary" aria-label="Home">
          <Image height={30} width={30} src="/crown.svg" alt="Araon's logo" />
        </Link>
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Popover className="relative ml-auto md:hidden">
          {({ open }: { open: boolean }) => (
            <>
              <Popover.Button
                className="flex items-center gap-1 rounded-lg border-2 border-[#0a76a8] p-1.5 text-secondary focus:ring-0 focus-visible:outline-none"
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                {open ? "Close" : "Menu"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d={
                      open
                        ? "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                        : "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                    }
                  />
                </svg>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className="absolute right-0 z-10 mt-2  w-40 origin-top-right overflow-auto rounded-xl border-2 border-[#0a76a8] bg-white p-2 text-base shadow-lg focus:outline-none dark:bg-black sm:text-sm"
                  style={theme === "terminal" ? { background: "#040605" } : {}}
                >
                  <div className="grid">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={clsx(
                          "rounded-md px-4 py-2 transition-colors hover:text-primary",
                          pathname === link.href
                            ? "bg-tertiary font-medium"
                            : "font-normal",
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
