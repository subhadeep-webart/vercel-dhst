import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const ComponentSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4,
        },
        type: {
            type: String,
            required: true,
        },
        order: {
            type: Number,
            required: true,
        },
        isVisible: {
            type: Boolean,
            default: true,
        },
        data: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    },
    { _id: false }
);

const PageSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        heading: {
            type: String,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        type: {
            type: String,
            default: "static",
        },
        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
            index: true,
        },
        components: {
            type: [ComponentSchema],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

PageSchema.index({ slug: 1, status: 1 });

export const Page =
    mongoose.models.Page || mongoose.model("Page", PageSchema);