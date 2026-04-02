const KnowledgePoints = ({ value }) => {
    return (
        <div className="flex gap-5 justify-center items-center">
            <div className="flex items-center justify-center">
                <div className="w-7 2xl:w-9 h-7 2xl:h-9 rounded-full border border-button-primary flex items-center justify-center">
                    <div className="bg-button-primary rounded-full w-5 2xl:w-7 h-5 2xl:h-7">

                    </div>
                </div>
                <div className="border border-dashed border-button-primary w-48 h-0"></div>
            </div>
            <h4 className="text-xl 2xl:text-3xl leading-8 2xl:leading-10 text-foreground">{value}</h4>
        </div>
    );
};

export default KnowledgePoints;