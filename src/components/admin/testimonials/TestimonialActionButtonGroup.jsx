import { Edit, Eye, Trash } from "lucide-react";
import WaringModal from "../common/WaringModal";
import { useRouter } from "next/navigation";

const TestimonialActionButtonGroup = ({
  testimonial = {},
  loading,
  deleteTestimonial,
}) => {
  const router = useRouter();
  const handleDeleteTestimonial = async () => {
    await deleteTestimonial(testimonial?.id);
  };
  return (
    <div className="w-full flex gap-4">
      <button
        className="cursor-pointer"
        onClick={() =>
          router.push(`/admin/home/testimonials/${testimonial?.id}/view`)
        }
      >
        <Eye size={20} />
      </button>
      <button
        className="cursor-pointer"
        onClick={() =>
          router.push(`/admin/home/testimonials/${testimonial?.id}/edit`)
        }
      >
        <Edit size={20} />
      </button>
      <WaringModal
        submitHandler={handleDeleteTestimonial}
        isProcessing={loading}
      >
        <Trash className="text-red-500" size={20} />
      </WaringModal>
    </div>
  );
};

export default TestimonialActionButtonGroup;
