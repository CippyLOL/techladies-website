"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import {
  FacebookIcon,
  HeartFilledIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/Icons";

export const Header = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1 text-lime-400"
            href="/"
          >
            <p className="font-bold text-inherit">TechLadies</p>
          </Link>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map(
            (item, index) =>
              index !== 0 && (
                <NavbarItem key={item.href}>
                  <Link
                    className={item.href === pathname ? "font-bold" : ""}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </NavbarItem>
              )
          )}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden flex sm:flex basis-1/5 sm:basis-full justify-center items-center"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.facebook}
            aria-label="Facebook"
          >
            <FacebookIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.instagram}
            aria-label="Instagram"
          >
            <InstagramIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.navItems[3].href} // /volunteer
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Volunteer
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
          <LinkedInIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.facebook} aria-label="Facebook">
          <FacebookIcon className="text-default-500" />
        </Link>
        <Link
          isExternal
          href={siteConfig.links.instagram}
          aria-label="Instagram"
        >
          <InstagramIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href}>
                <Link
                  className={item.href === pathname ? "font-bold" : ""}
                  color={"foreground"}
                  size="lg"
                >
                  {item.label}
                </Link>
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
