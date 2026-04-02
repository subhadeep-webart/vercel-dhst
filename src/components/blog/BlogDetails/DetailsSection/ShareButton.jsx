import { Icons } from "@/assets";
import Button from "@/components/ui/Button";


const ShareButton = () => {
    return (

        <Button

            className="cursor-pointer h-9 2xl:h-11 w-36 rounded-full flex items-center justify-center bg-white border border-button-primary text-button-primary"
        >
            <Icons.Share />{" "} Share
        </Button>

    )
};

export default ShareButton;

// "use client"

// import { useState, useRef, useEffect } from "react";
// import { Icons } from "@/app/assets";
// import Button from "@/app/components/ui/Button";
// import {
//     FacebookShareButton,
//     WhatsappShareButton,
//     LinkedinShareButton,
//     WhatsappIcon,
//     FacebookIcon,
//     LinkedinIcon
// } from "react-share";

// const ShareButton = () => {
//     const [open, setOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const shareUrl = typeof window !== "undefined" ? window.location.href : "";
//     const title = "Check this out!";

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div className="relative inline-block" ref={dropdownRef}>
//             {/* Main Share Button */}
//             <Button
//                 className="cursor-pointer h-9 2xl:h-11 w-36 rounded-full flex items-center justify-center bg-white border border-button-primary text-button-primary"
//                 onClick={() => setOpen(!open)}
//             >
//                 <Icons.Share /> Share
//             </Button>

//             {/* Dropdown */}
//             {open && (
//                 <div className="absolute top-full mt-2 right-0 w-40 bg-white border border-gray-200 rounded shadow-lg flex flex-col z-50">
//                     <FacebookShareButton
//                         url={shareUrl}
//                         quote={title}
//                         className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
//                     >
//                         <FacebookIcon size={32} round />
//                     </FacebookShareButton>

//                     <WhatsappShareButton
//                         url={shareUrl}
//                         title={title}
//                         className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
//                     >
//                         <WhatsappIcon size={32} round />
//                     </WhatsappShareButton>

//                     <LinkedinShareButton
//                         url={shareUrl}
//                         title={title}
//                         className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
//                     >
//                         <LinkedinIcon size={32} round />
//                     </LinkedinShareButton>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ShareButton;