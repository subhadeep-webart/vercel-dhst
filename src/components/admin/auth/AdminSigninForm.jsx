"use client";

import { useState } from "react";
import Label from "@/components/ui/admin/Label";
import Button from "@/components/ui/admin/Button";
import InputField from "@/components/ui/admin/input/InputField";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { loginSchema } from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginHandler } from "@/hooks/useLoginHandler";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const AdminSigninForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { handleLoginFormSubmit, isSubmitting, errorMessage, successMessage } =
        useLoginHandler();

    const onSubmit = async (data) => {
        const result = await handleLoginFormSubmit(data);

        if (result.success) {
            toast.success(successMessage || "Login successfully");
            router.push("/admin/home/banner");
        } else {
            toast.error(errorMessage || "Login Failed");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
                {/* Email */}
                <div>
                    <Label>
                        Email <span className="text-error-500">*</span>
                    </Label>

                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="info@gmail.com"
                                type="email"
                                error={errors?.email}
                                hint={errors?.email?.message}
                            />
                        )}
                    />
                </div>

                {/* Password */}
                <div>
                    <Label>
                        Password <span className="text-error-500">*</span>
                    </Label>

                    <div className="relative">
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <InputField
                                    {...field}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    error={errors?.password}
                                    hint={errors?.password?.message}
                                />
                            )}
                        />

                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                        >
                            {showPassword ? <Eye /> : <EyeOff />}
                        </span>
                    </div>
                </div>

                <div>
                    <Button type="submit" className="w-full" size="sm">
                        {isSubmitting ? "Signing in..." : "Sign in"}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default AdminSigninForm;