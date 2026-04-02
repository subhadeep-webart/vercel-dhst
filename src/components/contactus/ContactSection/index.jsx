import { Icons } from "@/assets";
import ContactDetailsCard from "../../common/ContactDetailsCard";
import ContactForm from "./ContactForm";
import GradientWrapper from "../../wrapper/GradientWrapper";
import styles from "../../wrapper/GradientWrapper/gradientwrapper.module.css"

const ContactSection = () => {
    return (
        <GradientWrapper id="gradient_center_2" className={styles.gradient_wrapper_container_2}>
            <section className="pt-20 pb-32">
                <div className="container w-full h-auto">
                    <div className="grid grid-cols-12 relative">
                        <div className="flex flex-col gap-13 pb-20 col-span-6">
                            <div className="flex flex-col gap-5 max-w-[500px] 2xl:max-w-[562px] w-full">
                                <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Get in Touch
                                    <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "} With Us</span></h2>
                                <p className="text-base 2xl:text-lg leading-6 2xl:leading-8 text-secondary ">Horem ipsum dolor sit amet, consecteturet condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus endum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                                <p className="text-base 2xl:text-lg leading-6 2xl:leading-8 text-secondary ">Whether you have questions about our treatments, training programs, or booking process, our team is ready to assist you. Reach out to learn more about DHST, schedule a session, or get guidance on the right program for your needs.</p>
                            </div>
                            <div className="w-full h-auto max-w-[700px] 2xl:max-w-[789px] border border-button-primary rounded-xl py-10 2xl:py-12 px-16 2xl:px-20 flex flex-col gap-4 2xl:gap-6">
                                <ContactDetailsCard
                                    icon={Icons.PhoneCall}
                                    title="Phone Number"
                                    value="+1-905-320-6260"
                                />

                                <ContactDetailsCard
                                    icon={Icons.Mail}
                                    title="E-Mail"
                                    value="Info@demorsystem.com"
                                />

                                <ContactDetailsCard
                                    icon={Icons.MapPin}
                                    title="Address"
                                    value="20281 SW Birch Street, Suite 200,Newport Beach, CA 92660"
                                />
                            </div>
                        </div>
                        <div className=" col-span-6 relative z-10 ml-[-11px]">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </GradientWrapper>
    )
};

export default ContactSection;