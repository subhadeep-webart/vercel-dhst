import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { addTreatmentProcedureFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import CloudinaryUploader from "../common/CloudinaryUploader"

const AddTreatmentProcedureForm = ({ submitHandler, isLoading, defaultValues = {} }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(addTreatmentProcedureFormSchema),
        defaultValues: {
            icon: defaultValues?.icon ?? "",
            title: defaultValues?.title ?? "",
            description: defaultValues?.description ?? "",
        }
    });

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        await submitHandler(data)
    }
    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Label>Upload Icon</Label>
                <Controller
                    name="icon"
                    control={control}
                    render={({ field }) => (
                        <CloudinaryUploader
                            value={field.value}
                            onUpload={field.onChange}
                            wrapperClass="h-[200px]"
                        />
                    )}
                />

                {errors.icon && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.icon?.message}
                    </p>
                )}
            </div>
            <div>
                <Label>Title</Label>
                <div className="relative">
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Title"
                                error={errors.title}
                                hint={errors.title?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Description</Label>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.description} hint={errors.description?.message} />
                    )}
                />
            </div>
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save treatment procedure"}
                </Button>
            </div>
        </form>
    )
}

export default AddTreatmentProcedureForm