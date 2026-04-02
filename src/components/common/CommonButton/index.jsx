
import { cn } from "@/lib/utils";
import Button from "../../ui/Button";
import styles from "./custombutton.module.css"

const CommonButton = ({ title, className,onClick }) => {
    return (
        // <Button className={cn(
        //     styles.common_btn,
        //     "h-16 w-64 2xl:w-72 text-soft-cream font-semibold bg-button-primary relative z-10",
        //     className
        // )} rounded="full">{title}</Button>
        <div className={cn(
            styles.common_btn,
            "w-64 2xl:w-72",
            className
        )}>
            <Button
                className={cn(
                    "h-16 w-64 2xl:w-72  text-soft-cream font-semibold bg-button-primary relative z-10 cursor-pointer",
                    className
                )}
                rounded="full"
                onClick={onClick}
            >
                {title}
            </Button>
        </div>
    )
};

export default CommonButton;