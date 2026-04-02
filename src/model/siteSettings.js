import mongoose from "mongoose";

const siteSettingsSchema = new mongoose.Schema(
    {
        siteName: {
            type: String,
            default: "Demo RS System",
        },

        contact: {
            phone: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
        },

        address: {
            fullAddress: {
                type: String,
                required: true,
            },
        },

        socialLinks: {
            facebook: {
                type: String,
                default: "",
            },
            instagram: {
                type: String,
                default: "",
            },
            linkedin: {
                type: String,
                default: "",
            },
        },
    },
    { timestamps: true }
);

export default mongoose.models.SiteSettings ||
    mongoose.model("SiteSettings", siteSettingsSchema);