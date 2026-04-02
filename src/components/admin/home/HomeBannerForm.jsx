"use client"

import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { homeBannerContentSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import CloudinaryUploader from "../common/CloudinaryUploader"
import Card from "@/components/ui/admin/card/Card"
import { useEffect } from "react"

const HomeBannerForm = ({ submitHandler, isLoading, defaultValues = {} }) => {
    console.log("Default values=====>", defaultValues)
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(homeBannerContentSchema),
        defaultValues: {
            image_url: defaultValues?.image_url ?? "",

            banner_text: defaultValues?.banner_text ?? "",
            banner_highlight_text: defaultValues?.banner_highlight_text ?? "",
            banner_description: defaultValues?.banner_description ?? "",
            banner_button_text: defaultValues?.banner_button_text ?? "",
            banner_button_url: defaultValues?.banner_button_url ?? "",

            // ✅ ARRAY STRUCTURE
            card_images: defaultValues?.card_images ?? [
                { url: "" },
                { url: "" },
                { url: "" },
            ],

            banner_info: defaultValues?.banner_info ?? [
                { icon: "", title: "", description: "" },
                { icon: "", title: "", description: "" },
                { icon: "", title: "", description: "" },
            ],
        }
    });

    const onSubmit = async (data) => {
        console.log("Got the data=======>", data);
        await submitHandler(data)
    }

    useEffect(() => {
        if (reset) {
            reset(defaultValues);
        }
    }, [defaultValues])
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
            <div className="w-full grid grid-cols-3 gap-4">
                {[0, 1, 2].map((index) => (
                    <div key={index}>
                        <Label>Upload Card Image {index + 1}</Label>

                        <Controller
                            name={`card_images.${index}.url`}
                            control={control}
                            render={({ field }) => (
                                <CloudinaryUploader
                                    value={field.value}
                                    onUpload={field.onChange}
                                />
                            )}
                        />

                        {errors?.card_images?.[index]?.url && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.card_images[index].url.message}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <Label>Banner Text</Label>
                <div className="relative">
                    <Controller
                        name="banner_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Banner Text"
                                error={errors.banner_text}
                                hint={errors.banner_text?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <Label>Banner Highlight Text</Label>
                <div className="relative">
                    <Controller
                        name="banner_highlight_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Banner Highlight Text"
                                error={errors.banner_highlight_text}
                                hint={errors.banner_highlight_text?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <Label>Banner Button Text</Label>
                <div className="relative">
                    <Controller
                        name="banner_button_text"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Banner Highlight Text"
                                error={errors.banner_button_text}
                                hint={errors.banner_button_text?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <Label>Banner Button Url</Label>
                <div className="relative">
                    <Controller
                        name="banner_button_url"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter banner button url"
                                error={errors.banner_button_url}
                                hint={errors.banner_button_url?.message}
                            />
                        )}
                    />
                </div>
            </div>

            {/* Address */}
            <div>
                <Label>Banner Description</Label>
                <Controller
                    name="banner_description"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.banner_description} hint={errors.banner_description?.message} />
                    )}
                />
            </div>
            <Card>
                <h3 className="w-full py-4">Banner Info</h3>

                <div className="w-full grid grid-cols-3 gap-4">
                    {[0, 1, 2].map((index) => (
                        <div key={index} className="w-full space-y-4">
                            <h3>Banner Info {index + 1}</h3>

                            {/* ICON */}
                            <div>
                                <Label>Icon</Label>
                                <Controller
                                    name={`banner_info.${index}.icon`}
                                    control={control}
                                    render={({ field }) => (
                                        <CloudinaryUploader
                                            value={field.value}
                                            onUpload={field.onChange}
                                        />
                                    )}
                                />

                                {errors?.banner_info?.[index]?.icon && (
                                    <p className="text-red-500 text-sm">
                                        {errors.banner_info[index].icon.message}
                                    </p>
                                )}
                            </div>

                            {/* TITLE */}
                            <div>
                                <Label>Title</Label>
                                <Controller
                                    name={`banner_info.${index}.title`}
                                    control={control}
                                    render={({ field }) => (
                                        <InputField {...field} error={errors?.banner_info?.[index]?.title}
                                            hint={errors.banner_info?.[index]?.title.message} />
                                    )}
                                />
                            </div>

                            {/* DESCRIPTION */}
                            <div>
                                <Label>Description</Label>
                                <Controller
                                    name={`banner_info.${index}.description`}
                                    control={control}
                                    render={({ field }) => (
                                        <InputField {...field} error={errors?.banner_info?.[index]?.description} hint={errors.banner_info?.[index].description.message} />
                                    )}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save banner"}
                </Button>
            </div>
        </form>
    )
}

export default HomeBannerForm