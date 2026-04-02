"use client"
import ComponentCard from "@/components/admin/common/ComponentCard";
import SiteSettingsForm from "@/components/admin/site-settings/SiteSettingsFrom";
import { useGetSiteSettings } from "@/hooks/useGetSiteSettings"

const SiteSettingsPage = () => {
    const { data:siteSettingsData, loading, error } = useGetSiteSettings();

    console.log("Site settings======>", siteSettingsData);
    return (
        <ComponentCard title={"Site Settings Content"}>
            <SiteSettingsForm siteSettingsData={siteSettingsData}/>
        </ComponentCard>
    )
}

export default SiteSettingsPage