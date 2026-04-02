import { cn } from "@/lib/utils";


const CommonCircle = ({ className, innerClassName }) => {
    return (
        <div
            className={cn(
                "border border-button-primary w-[300px] 2xl:w-[340px] h-[295px] 2xl:h-[335px] rounded-full flex items-end justify-center",
                className
            )}
        >
            <div
                className={cn(
                    "bg-peach-beige w-[190px] 2xl:w-[215px] h-[190px] 2xl:h-[215px] rounded-full",
                    innerClassName
                )}
            />
        </div>
    );
};

export default CommonCircle;