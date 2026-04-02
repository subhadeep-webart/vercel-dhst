
"use client"
import LogoContainer from "../Header/LogoContainer";
import IconsGroup from "./IconsGroup";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Icons, PUBLIC_IMAGES } from "@/assets";
import { HEADER_MENU } from "@/constants/constant";

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="bg-espresso-brown text-white relative">

            <div className="max-w-[564px] 2xl:max-w-[664px] w-full h-[73px] flex items-center justify-center mx-auto bg-vanilla-cream text-foreground absolute left-[30%] top-[-36px]">
                <ul className="flex gap-5 2xl:gap-9 items-center justify-center">
                    {HEADER_MENU?.map((menu, index) => {

                        const isActive = pathname === menu.href;

                        return (
                            <li
                                key={`nav-menu-${index + 1}`}
                                className={`text-sm xl:text-base  transition-colors ${isActive
                                        ? "text-button-primary font-bold"
                                        : "text-foreground"
                                    }`}
                            >
                                <Link href={menu.href}>{menu?.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <section className="container mx-auto w-full pt-12 flex flex-col gap-7 px-4">

                <div className="flex justify-between items-center">
                    <LogoContainer logo={PUBLIC_IMAGES.LogoWhite}/>
                    <IconsGroup />
                </div>

                <div className="bg-button-primary px-24 py-4 flex flex-col gap-7">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <p className="text-base 2xl:text-xl leading-7 2xl:leading-9 font-semibold ">About Us</p>
                        <p className="text-sm leading-5 2xl:leading-7 ">
                            The mission of DHST is to promote optimal recovery, wellness, and quality of life. We use
                            evidence-based, individualized approaches to improve fitness, athletic performance, and
                            nutrition.
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <label htmlFor="email" className="font-semibold text-white text-sm 2xl:text-base">
                            Subscribe Our Newsletter To Get Updates.
                        </label>
                        <div className="w-full max-w-[789px] relative ">

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter Email"
                                className="w-full rounded-full pl-9 bg-white/40 text-black h-14"
                            />
                            <button className="cursor-pointer absolute right-[10px] bottom-[-10px] 2xl:bottom-[-20px] transform -translate-y-1/2 bg-white text-black text-sm font-semibold rounded-full px-16 shadow-md h-10 2xl:h-12">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex gap-13 text-sm">
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-base 2xl:text-xl leading-5 2xl:leading-7">Phone</p>
                        <div className="flex items-center gap-2">
                            <Icons.PhoneCall />
                            <span>+1-905-320-6260</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-base 2xl:text-xl leading-5 2xl:leading-7">Email</p>
                        <div className="flex items-center gap-2">
                            <Icons.Mail />
                            <span>Info@demorsystem.com</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-base 2xl:text-xl leading-5 2xl:leading-7">Address</p>
                        <div className="flex items-center gap-2">
                            <Icons.MapPin />
                            <span>20281 SW Birch Street, Suite 200, Newport Beach, CA 92660</span>
                        </div>
                    </div>
                </div>



                <div className="text-center text-sm 2xl:text-base leading-5 2xl:leading-7 opacity-70 mb-5">
                    © {new Date().getFullYear()} DHST. All rights reserved.
                </div>
            </section>
        </footer>
    );
};

export default Footer;