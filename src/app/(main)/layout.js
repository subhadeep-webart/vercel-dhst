import Header from "@/components/layout/Header";
import "../globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "DHST",
    description: "DHST Website",
};

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
