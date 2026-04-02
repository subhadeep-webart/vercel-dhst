import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { howDemorWorkFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import CloudinaryUploader from "../common/CloudinaryUploader"

const HowDemorWorkForm = ({ submitHandler, isLoading, defaultValues = {} }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(howDemorWorkFormSchema),
        defaultValues: {
            image_url: defaultValues?.image_url ?? "",
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
                        {errors.image_url?.message}
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

export default HowDemorWorkForm