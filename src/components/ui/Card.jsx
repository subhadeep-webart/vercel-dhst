import { cn } from "@/lib/utils"


const Card = ({ children, className }) => {
    return (
        <div className={cn("relative py-4 flex gap-4 w-full", className)}>
            {children}
        </div>
    )
}

const CardHeader = ({ children, className }) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

const CardBody = ({ children, className }) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

const CardFooter = ({ children, className }) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card