"use client"
import Button from "@/components/ui/admin/Button"
import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { healingJourneyFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import CloudinaryUploader from "../common/CloudinaryUploader"
import { useEffect } from "react"

const HealingJourneyForm = ({ defaultValues = {} }) => {
    const { saveSection, loading } = useHomeSaveSection();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(healingJourneyFormSchema),
        defaultValues: {
            title: defaultValues?.title ?? "",
            highlight_text: defaultValues?.highlight_text ?? "",
            description: defaultValues?.description ?? "",
            image_url: defaultValues?.image_url ?? "",
            button_text: defaultValues?.button_text ?? "",
            button_url: defaultValues?.button_url ?? ""
        }
    });

    const onSubmit = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.start_healing_journey,
            data: {
                section_details: {
                    ...data
                }
            },
        }
        await saveSection(payload);
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
                <Label>Button Text</Label>
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
                    {loading ? "Saving..." : "Save healing details"}
                </Button>
            </div>
        </form>
    )
}

export default HealingJourneyForm