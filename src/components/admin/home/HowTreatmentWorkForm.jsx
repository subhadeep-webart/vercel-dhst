"use client"

import InputField from "@/components/ui/admin/input/InputField"
import Label from "@/components/ui/admin/Label"
import { howTreatmentWorksValidationSchema } from "@/lib/formValidationSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import Button from "@/components/ui/admin/Button"
import CloudinaryUploader from "../common/CloudinaryUploader"
import Card from "@/components/ui/admin/card/Card"
import { useEffect } from "react"

const getFormattedSteps = (steps = []) => {
    return Array.from({ length: 4 }).map((_, index) => ({
        icon: steps[index]?.icon || "",
        title: steps[index]?.title || "",
        description: steps[index]?.description || "",
    }));
};

const HowTreatmentWorkForm = ({ submitHandler, isLoading, defaultValues = {} }) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(howTreatmentWorksValidationSchema),
        defaultValues: {
            treatment_steps: defaultValues?.treatment_steps ?? [
                { icon: "", title: "", description: "" },
                { icon: "", title: "", description: "" },
                { icon: "", title: "", description: "" },
                { icon: "", title: "", description: "" },
            ],
        }
    });

    const onSubmit = async (data) => {
        console.log("FINAL DATA 🚀", data);
        await submitHandler(data);
    };

    useEffect(() => {
        if (defaultValues?.treatment_steps) {
            reset({
                treatment_steps: getFormattedSteps(defaultValues.treatment_steps),
            });
        }
    }, [defaultValues, reset]);

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full grid grid-cols-2 gap-4">

                {Array.from({ length: 4 }).map((_, index) => (
                    <Card key={index} className="space-y-6">

                        <h3 className="font-semibold">
                            Treatment Step {index + 1}
                        </h3>

                        {/* ICON */}
                        <div>
                            <Label>Icon</Label>
                            <Controller
                                name={`treatment_steps.${index}.icon`}
                                control={control}
                                render={({ field }) => (
                                    <CloudinaryUploader
                                        value={field.value}
                                        onUpload={field.onChange}
                                    />
                                )}
                            />

                            {errors?.treatment_steps?.[index]?.icon && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.treatment_steps[index].icon.message}
                                </p>
                            )}
                        </div>

                        {/* TITLE */}
                        <div>
                            <Label>Title</Label>
                            <Controller
                                name={`treatment_steps.${index}.title`}
                                control={control}
                                render={({ field }) => (
                                    <InputField
                                        {...field}
                                        error={errors?.treatment_steps?.[index]?.title}
                                        hint={
                                            errors?.treatment_steps?.[index]?.title?.message
                                        }
                                    />
                                )}
                            />
                        </div>

                        {/* DESCRIPTION */}
                        <div>
                            <Label>Description</Label>
                            <Controller
                                name={`treatment_steps.${index}.description`}
                                control={control}
                                render={({ field }) => (
                                    <InputField
                                        {...field}
                                        error={errors?.treatment_steps?.[index]?.description}
                                        hint={
                                            errors?.treatment_steps?.[index]?.description?.message
                                        }
                                    />
                                )}
                            />
                        </div>

                    </Card>
                ))}

            </div>

            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save Steps"}
                </Button>
            </div>
        </form>
    );
};

export default HowTreatmentWorkForm;