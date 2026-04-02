"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkTab = ({ tabs = [] }) => {
    const pathname = usePathname();

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex space-x-6">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href;
                    console.log("Is active===>",isActive);
                    return (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={`relative pb-3 text-sm font-medium transition-colors ${isActive
                                    ? "text-blue-600"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab.name}

                            {/* Active underline */}
                            {isActive && (
                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 rounded-full transition-all duration-300" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default LinkTab;