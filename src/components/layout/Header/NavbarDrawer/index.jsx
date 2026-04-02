"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icons } from "@/assets";
import { HEADER_MENU } from "@/constants/constant";
import Button from "@/components/ui/Button";


const NavbarDrawer = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>

            <button onClick={() => setOpen(true)}>
                <Icons.Menu color="#F04A24" />
            </button>

            {open && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}


            <div
                className={`fixed top-0 right-0 h-full w-[300px] sm:w-[340px] bg-white z-50 
        shadow-2xl transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >

                <div className="flex items-center justify-between p-5 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-xl font-bold"
                    >
                        ✕
                    </button>
                </div>


                <div className="flex flex-col justify-between h-[calc(100%-80px)]">

                    <ul className="flex flex-col gap-5 p-6">
                        {HEADER_MENU?.map((menu, index) => {
                            const isActive = pathname === menu.href;

                            return (
                                <li key={`nav-menu-${index + 1}`}>
                                    <Link
                                        href={menu.href}
                                        onClick={() => setOpen(false)}
                                        className={`text-base transition-colors ${isActive
                                                ? "text-button-primary font-semibold"
                                                : "text-foreground"
                                            }`}
                                    >
                                        {menu?.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>


                    <div className="p-6 border-t flex flex-col gap-4">
                        <Button
                            className="w-full h-12"
                            rounded="full"
                        >
                            Go To ATSDHST
                        </Button>

                        <div className="flex gap-3">
                            <Button
                                className="flex-1 h-11"
                                variant="bordered"
                                rounded="full"
                            >
                                Log In
                            </Button>

                            <Button
                                className="flex-1 h-11"
                                variant="bordered"
                                rounded="full"
                            >
                                Register
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarDrawer;