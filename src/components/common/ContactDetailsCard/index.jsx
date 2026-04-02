
const ContactDetailsCard = ({ icon: Icon, title, value }) => {
    return (
        <div className="flex">
            <div className="w-16 2xl:w-20 h-16 2xl:h-20 rounded-full bg-button-primary flex items-center justify-center">
                  {Icon && <Icon color="#fff" />}
            </div>
            <div className="flex flex-col pl-2 2xl:pl-4 max-w-[349px] w-full">
                <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-midnight-blue">{title}</p>
                <span className="text-base 2xl:text-xl leading-7 2xl:leading-9 font-semibold text-midnight-blue">{value}</span>
            </div>
        </div>
    )
};

export default ContactDetailsCard;