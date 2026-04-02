"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/admin/Button";
import InputField from "@/components/ui/admin/input/InputField";
import TextArea from "@/components/ui/admin/input/Textarea";
import Label from "@/components/ui/admin/Label";
import { siteSettingsFormSchema } from "@/lib/formValidationSchema";
import { useUpdateSiteSettings } from "@/hooks/useUpdateSiteSettings";
import toast from "react-hot-toast";

const SiteSettingsForm = ({ siteSettingsData = {} }) => {
    const { updateSettings, loading: isLoading, error } = useUpdateSiteSettings();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(siteSettingsFormSchema),
        defaultValues: {
            siteName: siteSettingsData?.siteName ?? "",
            contact: {
                email: siteSettingsData?.contact?.email ?? "",
                phone: siteSettingsData?.contact?.phone ?? "",
            },
            address: {
                fullAddress: siteSettingsData?.address?.fullAddress ?? "",
            },
            socialLinks: {
                facebook: siteSettingsData?.socialLinks?.facebook ?? "",
                instagram: siteSettingsData?.socialLinks?.instagram ?? "",
                linkedin: siteSettingsData?.socialLinks?.linkedin ?? "",
            },
            description: siteSettingsData?.description ?? "",
        },
    });

    const onSubmit = async (data) => {
        const response = await updateSettings(data)
        console.log("Response======>", response);
        if (response?.success) {
            toast.success(response?.message ?? "Site settings updated successfully");
        } else {
            toast.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <Label>Site Name</Label>
                <div className="relative">
                    <Controller
                        name="siteName"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="Enter site name"
                                error={errors.siteName}
                                hint={errors.siteName?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Email</Label>
                <div className="relative">
                    <Controller
                        name="contact.email"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="info@gmail.com"
                                error={errors.contact?.email}
                                hint={errors.contact?.email?.message}
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Label>Phone</Label>
                <div className="relative">
                    <Controller
                        name="contact.phone"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="+1 2253354451"
                                error={errors.contact?.phone}
                                hint={errors.contact?.phone?.message}
                            />
                        )}
                    />
                </div>
            </div>

            {/* Address */}
            <div>
                <Label>Address</Label>
                <Controller
                    name="address.fullAddress"
                    control={control}
                    render={({ field }) => (
                        <TextArea rows={3} {...field} error={errors.address?.fullAddress} hint={errors.address?.fullAddress?.message} />
                    )}
                />
            </div>

            {/* Facebook */}
            {/* Facebook */}
            <div>
                <Label>Facebook Link</Label>
                <div className="relative">
                    <Controller
                        name="socialLinks.facebook"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="https://facebook.com/your-page"
                                error={errors.socialLinks?.facebook}
                                hint={errors.socialLinks?.facebook?.message}
                                type="url"
                            />
                        )}
                    />
                </div>
            </div>

            {/* Instagram */}
            <div>
                <Label>Instagram Link</Label>
                <div className="relative">
                    <Controller
                        name="socialLinks.instagram"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="https://instagram.com/your-profile"
                                error={errors.socialLinks?.instagram}
                                hint={errors.socialLinks?.instagram?.message}
                                type="url"
                            />
                        )}
                    />
                </div>
            </div>

            {/* LinkedIn */}
            <div>
                <Label>LinkedIn Link</Label>
                <div className="relative">
                    <Controller
                        name="socialLinks.linkedin"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder="https://linkedin.com/in/your-profile"
                                error={errors.socialLinks?.linkedin}
                                hint={errors.socialLinks?.linkedin?.message}
                                type="url"
                            />
                        )}
                    />
                </div>
            </div>
            <div>
                <Button type="submit" className="w-full" size="sm">
                    {isLoading ? "Saving..." : "Save Settings"}
                </Button>
            </div>
        </form>
    );
};

export default SiteSettingsForm;