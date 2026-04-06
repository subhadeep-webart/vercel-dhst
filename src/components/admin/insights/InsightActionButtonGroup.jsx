import { Edit, Eye, Trash } from "lucide-react";
import WaringModal from "../common/WaringModal";
import { useRouter } from "next/navigation";

const InsightActionButtonGroup = ({ insight = {}, loading, deleteInsight }) => {
  const router = useRouter();
  const handleDeleteInsight = async () => {
    await deleteInsight(insight?.id);
  };
  return (
    <div className="w-full flex gap-4">
      <button
        className="cursor-pointer"
        onClick={() =>
          router.push(`/admin/home/expert-insight/insights/${insight?.id}/view`)
        }
      >
        <Eye size={20} />
      </button>
      <button
        className="cursor-pointer"
        onClick={() =>
          router.push(`/admin/home/expert-insight/insights/${insight?.id}/edit`)
        }
      >
        <Edit size={20} />
      </button>
      <WaringModal submitHandler={handleDeleteInsight} isProcessing={loading}>
        <Trash className="text-red-500" size={20} />
      </WaringModal>
    </div>
  );
};

export default InsightActionButtonGroup;
