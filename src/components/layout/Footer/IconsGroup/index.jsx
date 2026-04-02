import { Icons } from "@/assets";


const IconsGroup = () => {
  const socialLinks = [
    {
      icon: <Icons.Facebook />,
      link: "https://facebook.com",
    },
    {
      icon: <Icons.Instagram />,
      link: "https://instagram.com",
    },
    {
      icon: <Icons.LinkedIn />,
      link: "https://linkedin.com",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 2xl:w-10 h-8 2xl:h-10 rounded-full border border-[#1B1302] text-[#1B1302] hover:bg-[#1B1302] hover:text-white transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default IconsGroup;