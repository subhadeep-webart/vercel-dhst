"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ComponentCard from "@/components/admin/common/ComponentCard";
import TestimonialForm from "@/components/admin/home/TestimonialForm";
import { useTestimonials } from "@/hooks/useTestimonials";

const ViewTestimonial = () => {
  const { testimonial_id } = useParams();
  const { getTestimonialById, loading } = useTestimonials();

  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getTestimonialById(testimonial_id);
      setTestimonial(data);
    };

    if (testimonial_id) load();
  }, [testimonial_id]);

  return (
    <ComponentCard title={"View Testimonial"}>
      {loading && <p>Loading...</p>}

      {!loading && testimonial && (
        <TestimonialForm defaultValues={testimonial} mode="view" />
      )}
    </ComponentCard>
  );
};

export default ViewTestimonial;
