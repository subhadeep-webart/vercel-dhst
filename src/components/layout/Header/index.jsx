"use client"
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import LogoContainer from "./LogoContainer";
import NavbarContainer from "./NavbarContainer";
import ButtonGroup from "./ButtonGroup";
import { PUBLIC_IMAGES } from "@/assets";
import NavbarDrawer from "./NavbarDrawer";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <header className={`${styles.header_section} ${isSticky ? styles.sticky : ""}`}>
            <section className={`container flex items-center justify-between lg:gap-2 bg-white py-2 px-2 lg:py-4 lg:px-4 2xl:px-12 transition-[width] delay-1000 ${isSticky ? "rounded-none shadow-none" : "rounded-full shadow-lg"}`}>
                <LogoContainer logo={PUBLIC_IMAGES.Logo} />
                <NavbarContainer />

                <div className="lg:hidden">
                    <NavbarDrawer />
                </div>
                <ButtonGroup />
            </section>
        </header>
    )
};

export default Header;