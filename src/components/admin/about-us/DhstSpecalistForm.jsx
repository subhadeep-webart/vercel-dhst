"use client"

import Label from "@/components/ui/admin/Label";
import { dhstSpecalistFormSchema } from "@/lib/formValidationSchema";
import { Controller, useForm } from "react-hook-form";
import CloudinaryUploader from "../common/CloudinaryUploader";
import InputField from "@/components/ui/admin/input/InputField";
import TextArea from "@/components/ui/admin/input/Textarea";
import Button from "@/components/ui/admin/Button";
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages";
import { useEffect } from "react";

const DhstSpecalistForm = ({ defaultValues = {} }) => {
    console.log("Default values===>",defaultValues);
    const { saveSection, loading: isAboutSectionSubmiting } = useAboutusSaveSection();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(dhstSpecalistFormSchema),
        defaultValues: {
            left_image_url: "",
            right_image_url: "",
            section_heading: "",
            section_highlight_text: "",
            section_description: "",
            left_section_text: "",
            right_section_text: "",
            button_text: "",
            button_url: "",
        }
    });

    console.log("Erros===>", errors);

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.dhst_specalist_section,
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
            <div className="w-full grid grid-cols-2 gap-6">
                <div>
                    <Label>Left Image</Label>
                    <Controller
                        name="left_image_url"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.left_image_url && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.left_image_url?.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label>Right Image</Label>
                    <Controller
                        name="right_image_url"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.right_image_url && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.right_image_url?.message}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <Label>Section heading</Label>
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
                <Label>Section Description</Label>
                <Controller
                    name="section_description"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.section_description} hint={errors.section_description?.message} />
                    )}
                />
            </div>
            <div>
                <Label>Left section text</Label>
                <Controller
                    name="left_section_text"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.left_section_text} hint={errors.left_section_text?.message} />
                    )}
                />
            </div>
            <div>
                <Label>Right section text</Label>
                <Controller
                    name="right_section_text"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.right_section_text} hint={errors.right_section_text?.message} />
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

export default DhstSpecalistForm