import InnerPageBanner from "@/components/banner/InnerPageBanner";
import ContactSection from "@/components/contactus/ContactSection";


const ContactUsPage = () => {
    return (
        <>
            <InnerPageBanner value1="Contact" value2="Us" description="Specialized in holistic treatment to identify and treat the root cause
                    of your distress, discomfort, and pain with targeted bodywork techniques."/>
            <ContactSection />
        </>
    )
};

export default ContactUsPage;