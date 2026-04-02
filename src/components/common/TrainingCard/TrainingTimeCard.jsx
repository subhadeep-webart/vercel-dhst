const TrainingTimeCard = ({value,time}) => {
    return (
        <div className="max-w-[290px] 2xl:max-w-[333px] w-full h-auto rounded-xl bg-soft-ivory flex items-center justify-center border border-white">
            <p className="text-xs 2xl:text-sm leading-7 text-secondary py-2 2xl:py-3 px-7 2xl:px-9 whitespace-nowrap">{value}<span className="font-semibold text-foreground"> {time}</span></p>
        </div>
    )
};

export default TrainingTimeCard;