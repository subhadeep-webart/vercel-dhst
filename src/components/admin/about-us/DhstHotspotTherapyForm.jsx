"use client"

import Label from "@/components/ui/admin/Label";
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages";
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection";
import { dhstHotspotTherapyFormSchema } from "@/lib/formValidationSchema";
import { Controller, useForm } from "react-hook-form";
import CloudinaryUploader from "../common/CloudinaryUploader";
import InputField from "@/components/ui/admin/input/InputField";
import TextArea from "@/components/ui/admin/input/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/admin/Button";
import { useEffect } from "react";

const DemorHotspotTherapyForm = ({ defaultValues = {} }) => {
    const { saveSection, loading: isAboutSectionSubmiting } = useAboutusSaveSection();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(dhstHotspotTherapyFormSchema),
        defaultValues: {
            base_image_url: "",
            secondary_image_url: "",
            section_heading: "",
            section_highlight_text: "",
            description: "",
            button_text: "",
            button_url: "",
        }
    });

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.dhst_theraphy_hotspot,
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
    }, [defaultValues]);
    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full grid grid-cols-2 gap-6">
                <div>
                    <Label>Base Image</Label>
                    <Controller
                        name="base_image_url"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.base_image_url && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.base_image_url?.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label>Secondary Image</Label>
                    <Controller
                        name="secondary_image_url"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.secondary_image_url && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.secondary_image_url?.message}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <Label>Section Heading</Label>
                <div className="relative">
                    <Controller
                        name="section_heading"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Banner Text"
                                error={errors.section_heading}
                                hint={errors.section_heading?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <Label>Section Highlight Text</Label>
                <div className="relative">
                    <Controller
                        name="section_highlight_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Highlight Text"
                                error={errors.section_highlight_text}
                                hint={errors.section_highlight_text?.message}
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
                                placeholder="Enter Button Text"
                                error={errors.button_text}
                                hint={errors.button_text?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Button Url</Label>
                <div className="relative">
                    <Controller
                        name="button_url"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                type="url"
                                placeholder="Enter Button Url"
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
                    {isAboutSectionSubmiting ? "Saving..." : "Save section"}
                </Button>
            </div>
        </form>
    )
}

export default DemorHotspotTherapyForm