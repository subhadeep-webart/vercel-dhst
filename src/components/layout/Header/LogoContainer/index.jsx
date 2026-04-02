
import Image from "next/image";
import Link from "next/link";

const LogoContainer = ({logo}) => {
  return (
    <Link
      href="/"
      className="relative h-5 sm:h-10 md:h-12 lg:h-16 aspect-[197/50] w-full max-w-52"
    >
      <Image
        src={logo}
        alt="Website Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  )
};

export default LogoContainer;