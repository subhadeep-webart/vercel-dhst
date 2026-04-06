"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ComponentCard from "@/components/admin/common/ComponentCard";
import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialForm from "@/components/admin/home/TestimonialForm";

const EditTestimonial = () => {
  const { testimonial_id } = useParams();
  console.log("Testimonial ID=========>", testimonial_id);
  const { getTestimonialById, loading } = useTestimonials();

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const loadInsight = async () => {
      const data = await getTestimonialById(testimonial_id);
      setInitialData(data);
    };

    if (testimonial_id) loadInsight();
  }, [testimonial_id]);

  console.log("Initial Data=========>", initialData);

  return (
    <ComponentCard title={"Edit Testimonial"}>
      {loading && <p>Loading...</p>}

      {!loading && initialData && (
        <TestimonialForm defaultValues={initialData} mode="edit" />
      )}
    </ComponentCard>
  );
};

export default EditTestimonial;
