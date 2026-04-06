"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ComponentCard from "@/components/admin/common/ComponentCard";
import InsightForm from "@/components/admin/home/InsightForm";
import { useInsights } from "@/hooks/useInsights";

const EditInsight = () => {
  const { insight_id } = useParams();
  console.log("Insight ID=========>", insight_id);
  const { getInsightById, loading } = useInsights();

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const loadInsight = async () => {
      const data = await getInsightById(insight_id);
      setInitialData(data);
    };

    if (insight_id) loadInsight();
  }, [insight_id]);

  console.log("Initial Data=========>", initialData);

  return (
    <ComponentCard title={"Edit Insight"}>
      {loading && <p>Loading...</p>}

      {!loading && initialData && (
        <InsightForm defaultValues={initialData} mode="edit" />
      )}
    </ComponentCard>
  );
};

export default EditInsight;
