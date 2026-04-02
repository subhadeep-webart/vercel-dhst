"use client"

import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { demorHotspotFormValidationSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import CloudinaryUploader from "../common/CloudinaryUploader"
import { useEffect } from "react"

const DemorHotspotForm = ({ submitHandler, isLoading, defaultValues = {} }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(demorHotspotFormValidationSchema),
        defaultValues: {
            image_url: defaultValues?.image_url ?? "",

            section_image_1: defaultValues?.section_image_1 ?? "",
            section_image_2: defaultValues?.section_image_2 ?? "",

            section_heading: defaultValues?.section_heading ?? "",
            section_highlight_text: defaultValues?.section_highlight_text ?? "",

            section_button_text: defaultValues?.section_button_text ?? "",
            section_button_url: defaultValues?.section_button_url ?? "",

            demor_hotspot_treatment_title:
                defaultValues?.demor_hotspot_treatment_title ?? "",

            hotspot_treatment_description:
                defaultValues?.hotspot_treatment_description ?? "",
        },
    })

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        await submitHandler(data)
    }

    useEffect(()=>{
        if(reset){
            reset(defaultValues);
        }
    },[defaultValues])

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Label>Upload Base Image</Label>
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
            <div className="w-full grid grid-cols-2 gap-4">
                <div>
                    <Label>Upload Section Image 1</Label>
                    <Controller
                        name="section_image_1"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.section_image_1 && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.section_image_1?.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label>Upload Section Image 2</Label>
                    <Controller
                        name="section_image_2"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.section_image_2 && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.section_image_2?.message}
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
                                placeholder="Enter Section Highlight Text"
                                error={errors.section_highlight_text}
                                hint={errors.section_highlight_text?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <Label>Section Button Text</Label>
                <div className="relative">
                    <Controller
                        name="section_button_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Section Highlight Text"
                                error={errors.section_button_text}
                                hint={errors.section_button_text?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <Label>Section Button Url</Label>
                <div className="relative">
                    <Controller
                        name="section_button_url"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter section button url"
                                error={errors.section_button_url}
                                hint={errors.section_button_url?.message}
                            />
                        )}
                    />
                </div>
            </div>

            {/* Address */}
            <div>
                <Label>Demor hotspot treatment title</Label>
                <div className="relative">
                    <Controller
                        name="demor_hotspot_treatment_title"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter demor hotspot treatment title"
                                error={errors.demor_hotspot_treatment_title}
                                hint={errors.demor_hotspot_treatment_title?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Demon hotspot treatment description</Label>
                <Controller
                    name="hotspot_treatment_description"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.hotspot_treatment_description} hint={errors.hotspot_treatment_description?.message} />
                    )}
                />
            </div>
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save section"}
                </Button>
            </div>
        </form>
    )
}

export default DemorHotspotForm