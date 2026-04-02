"use client"
import { HEADER_MENU } from "@/constants/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMenu = () => {
    const pathname = usePathname();
    return (
        <ul className="flex w-full gap-3 xl:gap-5 2xl:gap-7">
             {HEADER_MENU?.map((menu, index) => {

                const isActive = pathname === menu.href;

                return (
                    <li
                        key={`nav-menu-${index + 1}`}
                        className={`text-sm xl:text-base  transition-colors ${
                            isActive
                                ? "text-button-primary font-bold"
                                : "text-foreground"
                        }`}
                    >
                        <Link href={menu.href}>{menu?.name}</Link>
                    </li>
                );
            })}
        </ul>
    )
};

export default NavbarMenu;