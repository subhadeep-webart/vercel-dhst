import TreatmentCard from "../../common/TreatmentCard";

const TreatmentSection = ({ treatmentSteps }) => {
  console.log("treatmentSteps", treatmentSteps);
  return (
    <div className="flex gap-7 2xl:gap-9">
      {/* <TreatmentCard value="Identify Pain Points" title="Morem ipsum dolor sit amet, consectetur adipiscing ipsum dolo ." step={1} className={"max-w-[303px]"}/>
            <TreatmentCard value="Target Treatment" title="Morem ipsum dolor sit amet, consectetur adipiscing ipsum dolo ." className={"mt-16 max-w-[303px]"} step={2}/>
            <TreatmentCard value="Lasting Relief" title="Morem ipsum dolor sit amet, consectetur adipiscing ipsum dolo ." className={"mt-32 max-w-[303px]"} step={3}/>
            <TreatmentCard value="Prevent Future Issues" title="Morem ipsum dolor sit amet, consectetur adipiscing ipsum dolo ." className={"mt-48 max-w-[303px]"} step={4}/> */}
      {treatmentSteps.map((step, index) => (
        <TreatmentCard
          key={step?._id || index}
          value={step?.title}
          title={step?.description}
          step={index + 1}
          className={`min-w-[263px] max-w-[303px] mt-${index * 16}`}
        />
      ))}
    </div>
  );
};

export default TreatmentSection;
