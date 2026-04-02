
import NavbarMenu from "./NavbarMenu";
import GoToATSDHSTButton from "./GoToATSDHSTButton";

const NavbarContainer = () => {
    return (
        <div className="lg:flex gap-3 xl:gap-5 2xl:gap-7 2xl:max-w-[694px] items-center justify-start hidden">
            <NavbarMenu />
            <GoToATSDHSTButton />
        </div>
    )
};

export default NavbarContainer;