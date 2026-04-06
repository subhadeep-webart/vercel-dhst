import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 📥 GET INSIGHTS
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await fetch(END_POINTS.testimonials);
      const json = await res.json();

      if (!json.success) throw new Error(json.message);

      setTestimonials(json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ➕ ADD INSIGHT
  const addTestimonial = async (data) => {
    try {
      setLoading(true);

      const res = await fetch(END_POINTS.testimonials, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.message);

      setTestimonials((prev) => [...prev, json.data]);
      toast.success(json?.message ?? "Testimonial added successfully");
      return json.data;
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✏️ UPDATE INSIGHT
  const updateTestimonial = async (id, data) => {
    try {
      setLoading(true);

      const res = await fetch(END_POINTS.testimonials, {
        method: "PUT",
        body: JSON.stringify({ id, ...data }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.message);

      // ⚡ Update locally
      setTestimonials((prev) =>
        prev.map((item) => (item.id === id ? json.data : item)),
      );
      toast.success(json?.message ?? "Testimonial updated successfully");
      return json.data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ❌ DELETE INSIGHT
  const deleteTestimonial = async (id) => {
    try {
      setLoading(true);

      const res = await fetch(`${END_POINTS.testimonials}?id=${id}`, {
        method: "DELETE",
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.message);

      // ⚡ Remove locally
      setTestimonials((prev) => prev?.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 📥 GET TESTIMONIAL BY ID
  const getTestimonialById = async (id) => {
    try {
      if (!id) throw new Error("Testimonial ID is required");

      setLoading(true);

      const res = await fetch(`${END_POINTS.testimonials}/${id}`);
      const json = await res.json();

      if (!json.success) throw new Error(json.message);

      return json.data;
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // 🔄 AUTO FETCH
  useEffect(() => {
    fetchTestimonials();
  }, []);

  return {
    testimonials,
    loading,
    error,
    fetchTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    getTestimonialById,
  };
};
