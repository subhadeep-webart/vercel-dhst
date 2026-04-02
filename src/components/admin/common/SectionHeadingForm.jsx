"use client"
import Button from "@/components/ui/admin/Button"
import InputField from "@/components/ui/admin/input/InputField"
import TextArea from "@/components/ui/admin/input/Textarea"
import Label from "@/components/ui/admin/Label"
import { sectionHeadingFormSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

const SectionHeadingForm = ({ handler, isUpdating, defaultValues = {} }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(sectionHeadingFormSchema),
        defaultValues: {
            section_title: defaultValues?.section_title ?? "",
            section_highlight_text: defaultValues?.section_highlight_text ?? "",
            section_description: defaultValues?.section_description ?? "",
        }
    });

    const onSubmit = async (data) => {
        await handler(data);
    }

    useEffect(() => {
        if (reset) {
            reset(defaultValues);
        }
    }, [defaultValues])

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Label>Section Title</Label>
                <div className="relative">
                    <Controller
                        name="section_title"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter Banner Text"
                                error={errors.section_title}
                                hint={errors.section_title?.message}
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
                                placeholder="Enter Banner Text"
                                error={errors.section_highlight_text}
                                hint={errors.section_highlight_text?.message}
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
                <Button type="submit" className="w-full" size="sm">
                    {isUpdating ? "Saving..." : "Save Section Heading"}
                </Button>
            </div>
        </form>
    )
}

export default SectionHeadingForm