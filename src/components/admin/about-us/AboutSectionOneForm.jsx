"use client"

import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { aboutusSectionOneFormSchema, bannerContentFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages"
import CloudinaryUploader from "../common/CloudinaryUploader"
import { useEffect } from "react"

const AboutSectionOneForm = ({ defaultValues = {} }) => {
    const { saveSection, loading: isAboutSectionSubmiting } = useAboutusSaveSection();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(aboutusSectionOneFormSchema),
        defaultValues: {
            image_url_1: "",
            image_url_2: "",
            title:  "",
            highlight_text: "",
            description: "",
            sub_description:  "",
            treatment_info_title:  "",
            treatment_info_description:  "",
            button_text: "",
            button_url: "",

        }
    });

    console.log("Errors====>", errors);

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.section_one,
            data: {
                section_one: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    useEffect(()=>{
        if(reset){
            reset(defaultValues);
        }
    },[defaultValues])

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full grid grid-cols-2 gap-6">
                <div>
                    <Label>Upload Image 1</Label>
                    <Controller
                        name="image_url_1"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.image_url_1 && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.image_url_1?.message}
                        </p>
                    )}
                </div>
                <div>
                    <Label>Upload Image 2</Label>
                    <Controller
                        name="image_url_2"
                        control={control}
                        render={({ field }) => (
                            <CloudinaryUploader
                                value={field.value}
                                onUpload={field.onChange}
                            />
                        )}
                    />

                    {errors.image_url_2 && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.image_url_2?.message}
                        </p>
                    )}
                </div>
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
                                placeholder="Enter Banner Text"
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
                                placeholder="Enter Highlight Text"
                                error={errors.highlight_text}
                                hint={errors.highlight_text?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Treatment info title</Label>
                <div className="relative">
                    <Controller
                        name="treatment_info_title"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Button Text"
                                error={errors.treatment_info_title}
                                hint={errors.treatment_info_title?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Treatment info description</Label>
                <Controller
                    name="treatment_info_description"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.treatment_info_description} hint={errors.treatment_info_description?.message} />
                    )}
                />
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
                <Label>Sub description</Label>
                <Controller
                    name="sub_description"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.sub_description} hint={errors.sub_description?.message} />
                    )}
                />
            </div>
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isAboutSectionSubmiting ? "Saving..." : "Save about us section one"}
                </Button>
            </div>
        </form>
    )
}

export default AboutSectionOneForm