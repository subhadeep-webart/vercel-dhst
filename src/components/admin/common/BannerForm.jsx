"use client"

import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { bannerContentFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import CloudinaryUploader from "./CloudinaryUploader"
import Button from "@/components/ui/admin/Button"
import { useEffect } from "react"

const BannerForm = ({ submitHandler, isLoading, defaultValues = {} }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(bannerContentFormSchema),
        defaultValues: {
            image_url: "",
            banner_text: "",
            banner_highlight_text: "",
            banner_description: ""
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
    }, [defaultValues]);

    console.log("Default values",defaultValues);

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
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save banner"}
                </Button>
            </div>
        </form>
    )
}

export default BannerForm