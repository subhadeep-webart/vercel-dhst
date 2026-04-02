import Button from "@/components/ui/Button";

const AuthButtons = () => {
    return (

        <div className="relative w-1/5 hidden lg:block">

            <Button
                className="h-10 xl:h-11 2xl:h-13 max-w-28 2xl:max-w-32 w-full mb-3 ml-[32px] cursor-pointer"
                variant="bordered"
                rounded="full"
            >
                Log In
            </Button>

            <Button
                className="h-10 xl:h-11 2xl:h-13 max-w-28 2xl:max-w-32 w-full absolute bottom-[0px] right-[0px] !bg-white cursor-pointer"
                rounded="full"
                variant="bordered"
            >
                Register
            </Button>
        </div>
    )
};

export default AuthButtons;