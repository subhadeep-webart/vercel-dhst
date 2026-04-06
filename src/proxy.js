// import { NextResponse } from "next/server";
// import { verifyToken } from "./lib/jwt";

// export function middleware(req) {
//     const token = req.cookies.get("adminToken")?.value;
//     const { pathname } = req.nextUrl;

//     const isLoginPage = pathname === "/admin/login";

//     if (isLoginPage && token) {
//         const decoded = verifyToken(token);
//         console.log("Decoded====>", decoded);
//         if (decoded) {
//             return NextResponse.redirect(new URL("/admin/home/banner", req.url));
//         }
//     }

//     if (pathname.startsWith("/admin") && !isLoginPage) {
//         if (!token) {
//             return NextResponse.redirect(new URL("/admin/login", req.url));
//         }

//         const decoded = verifyToken(token);

//         if (!decoded || decoded.role !== "admin") {
//             return NextResponse.redirect(new URL("/admin/login", req.url));
//         }
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/admin/:path*"],
// };

import { NextResponse } from "next/server";

export function proxy(req) {
    const token = req.cookies.get("adminToken")?.value;
    const { pathname } = req.nextUrl;

    const isLoginPage = pathname === "/admin/login";

    // If already logged in → redirect from login page
    if (isLoginPage && token) {
        return NextResponse.redirect(
            new URL("/admin/home/banner", req.url)
        );
    }

    // Protect admin routes
    if (pathname.startsWith("/admin") && !isLoginPage) {
        if (!token) {
            return NextResponse.redirect(
                new URL("/admin/login", req.url)
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};