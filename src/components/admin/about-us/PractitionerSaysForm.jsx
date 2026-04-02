import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { howDemorWorkFormSchema, practitionerSaysFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import CloudinaryUploader from "../common/CloudinaryUploader"

const PractitionerSaysForm = ({ submitHandler, isLoading, defaultValues = {} }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(practitionerSaysFormSchema),
        defaultValues: {
            image_url: defaultValues?.image_url ?? "",
            practitioner_name: defaultValues?.practitioner_name ?? "",
            practitioner_position: defaultValues?.practitioner_position,
            practitioner_details: defaultValues?.description ?? "",
        }
    });

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        await submitHandler(data)
    }
    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            {/* Image Upload */}
            <div>
                <Label>Upload Image</Label>
                <Controller
                    name="image_url"
                    control={control}
                    render={({ field }) => (
                        <CloudinaryUploader
                            value={field.value}
                            onUpload={field.onChange}
                            wrapperClass="h-[200px]"
                        />
                    )}
                />
                {errors.image_url && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.image_url.message}
                    </p>
                )}
            </div>

            {/* Practitioner Name */}
            <div>
                <Label>Practitioner Name</Label>
                <Controller
                    name="practitioner_name"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            placeholder="Enter practitioner name"
                            error={errors.practitioner_name}
                            hint={errors.practitioner_name?.message}
                        />
                    )}
                />
            </div>

            {/* Practitioner Position */}
            <div>
                <Label>Position</Label>
                <Controller
                    name="practitioner_position"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            placeholder="Enter position (e.g. Senior Doctor)"
                            error={errors.practitioner_position}
                            hint={errors.practitioner_position?.message}
                        />
                    )}
                />
            </div>

            {/* Practitioner Details */}
            <div>
                <Label>Details</Label>
                <Controller
                    name="practitioner_details"
                    control={control}
                    render={({ field }) => (
                        <TextArea
                            rows={4}
                            {...field}
                            placeholder="Enter practitioner details"
                            error={errors.practitioner_details}
                            hint={errors.practitioner_details?.message}
                        />
                    )}
                />
            </div>

            {/* Submit */}
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save Practitioner Says"}
                </Button>
            </div>
        </form>
    )
}

export default PractitionerSaysForm