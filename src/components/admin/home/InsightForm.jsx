"use client"
import Button from "@/components/ui/admin/Button"
import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { insightFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import CloudinaryUploader from "../common/CloudinaryUploader"
import { useInsights } from "@/hooks/useInsights"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const InsightForm = ({ defaultValues = {} }) => {
    const router = useRouter();
    const { addInsight, loading } = useInsights();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(insightFormSchema),
        defaultValues: {
            title: defaultValues?.title ?? "",
            highlight_text: defaultValues?.highlight_text ?? "",
            description: defaultValues?.description ?? "",
            button_text: defaultValues?.button_text ?? "",
            button_url: defaultValues?.button_url ?? "",
            image_url: defaultValues?.image_url ?? "",
        }
    });

    const onSubmit = async (data) => {
        console.log("Data=========>", data);
        await addInsight(data);
        router.push("/admin/home/expert-insight/insights")
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
                <Label>Title</Label>
                <div className="relative">
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter insight title"
                                error={errors.title}
                                hint={errors.title?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Highlight Text</Label>
                <div className="relative">
                    <Controller
                        name="highlight_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter highlight text"
                                error={errors.highlight_text}
                                hint={errors.highlight_text?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Button text</Label>
                <div className="relative">
                    <Controller
                        name="button_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter button text"
                                error={errors.button_text}
                                hint={errors.button_text?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Button url</Label>
                <div className="relative">
                    <Controller
                        name="button_url"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter button url"
                                error={errors.button_url}
                                hint={errors.button_url?.message}
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
                    {loading ? "Saving..." : "Save insight"}
                </Button>
            </div>
        </form>
    )
}

export default InsightForm