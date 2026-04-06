"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ComponentCard from "@/components/admin/common/ComponentCard";
import { useInsights } from "@/hooks/useInsights";
import InsightForm from "@/components/admin/home/InsightForm";

const ViewInsight = () => {
  const { insight_id } = useParams();
  const { getInsightById, loading } = useInsights();

  const [insight, setInsight] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getInsightById(insight_id);
      setInsight(data);
    };

    if (insight_id) load();
  }, [insight_id]);

  return (
    <ComponentCard title={"View Insight"}>
      {loading && <p>Loading...</p>}

      {!loading && insight && (
        <InsightForm defaultValues={insight} mode="view" />
      )}
    </ComponentCard>
  );
};

export default ViewInsight;
