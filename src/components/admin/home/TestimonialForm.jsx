"use client"
import Button from "@/components/ui/admin/Button"
import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { testimonialFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import CloudinaryUploader from "../common/CloudinaryUploader"
import { useTestimonials } from "@/hooks/useTestimonials"
import { useEffect } from "react"

const TestimonialForm = ({ defaultValues = {} }) => {
    const { addTestimonial, loading } = useTestimonials();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(testimonialFormSchema),
        defaultValues: {
            name: defaultValues?.name ?? "",
            position: defaultValues?.position ?? "",
            feedback: defaultValues?.feedback ?? "",
            image_url: defaultValues?.image_url ?? ""
        }
    });

    const onSubmit = async (data) => {
        await addTestimonial(data);
    }

    useEffect(() => {
        if (reset) {
            reset(defaultValues);
        }
    }, [defaultValues])

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
                <Label>Name</Label>
                <div className="relative">
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter name"
                                error={errors.name}
                                hint={errors.name?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Position</Label>
                <div className="relative">
                    <Controller
                        name="position"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter position"
                                error={errors.position}
                                hint={errors.position?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Feedback</Label>
                <Controller
                    name="feedback"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.feedback} hint={errors.feedback?.message} />
                    )}
                />
            </div>
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {loading ? "Saving..." : "Save testimonial"}
                </Button>
            </div>
        </form>
    )
}

export default TestimonialForm