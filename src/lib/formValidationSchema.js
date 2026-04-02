import { z } from "zod";
import { facebookRegex, instagramRegex, linkedinRegex } from "./regex";

const optionalUrl = (regex, message) =>
    z
        .string()
        .optional()
        .or(z.literal(""))
        .refine((val) => !val || regex.test(val), {
            message,
        });

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email format"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});

export const siteSettingsFormSchema = z.object({
    siteName: z.string().min(2, "Site name is required"),
    contact: z.object({
        email: z.string().email("Invalid email"),
        phone: z.string().min(8, "Phone is required"),
    }),

    address: z.object({
        fullAddress: z.string().min(5, "Address is required"),
    }),

    socialLinks: z.object({
        facebook: optionalUrl(
            facebookRegex,
            "Enter a valid Facebook URL"
        ),

        instagram: optionalUrl(
            instagramRegex,
            "Enter a valid Instagram URL"
        ),

        linkedin: optionalUrl(
            linkedinRegex,
            "Enter a valid LinkedIn URL"
        ),
    }),
});


export const bannerContentFormSchema = z.object({
    image_url: z.string().min(1, "Image url required"),
    banner_text: z.string().min(1, "Banner text is required"),
    banner_highlight_text: z.string(),
    banner_description: z.string().min(10, "At least 10 character required")
})

export const sectionHeadingFormSchema = z.object({
    section_title: z.string().min(1, "Banner text is required"),
    section_highlight_text: z.string(),
    section_description: z.string().min(10, "At least 10 character required")
})

export const insightFormSchema = z.object({
    title: z.string().min(1, "Insight title is required"),
    highlight_text: z.string(),
    description: z.string().min(10, "At least 10 character required"),
    image_url: z.string().min(1, "Image url required"),
    button_text: z.string().min(1, "Button text required"),
    button_url: z
        .string()
        .min(1, "Button URL is required")
        .url("Please enter a valid URL"),
})

export const healingJourneyFormSchema = z.object({
    title: z.string().min(1, "Insight title is required"),
    highlight_text: z.string(),
    description: z.string().min(10, "At least 10 character required"),
    image_url: z.string().min(1, "Image url required"),
    button_text: z.string().min(1, "Button text required"),
    button_url: z
        .string()
        .min(1, "Button URL is required")
        .url("Please enter a valid URL"),
})

export const testimonialFormSchema = z.object({
    name: z.string().min(1, "Testimonial is required"),
    position: z.string(),
    feedback: z.string().min(10, "At least 10 character required"),
    image_url: z.string().min(1, "Image url required")
})

//Home page banner content form validation

// export const homeBannerContentSchema = z.object({
//     image_url: z.string().min(1, "Image url required"),
//     card_image_url_1: z.string().min(1, "Card image 1 is required"),
//     card_image_url_2: z.string().min(1, "Card image 2 is required"),
//     card_image_url_3: z.string().min(1, "Card image 3 is required"),
//     banner_text: z.string().min(1, "Banner text is required"),
//     banner_highlight_text: z.string(),
//     banner_description: z.string().min(10, "At least 10 character required"),
//     banner_button_text: z.string().min(1, "Banner button text is required"),
//     banner_button_url: z
//         .string()
//         .min(1, "Button URL is required")
//         .url("Please enter a valid URL"),
// })
export const homeBannerContentSchema = z.object({
    image_url: z.string().min(1, "Banner image is required"),

    banner_text: z.string().min(1, "Banner text is required"),
    banner_highlight_text: z.string().optional(),
    banner_description: z.string().min(10, "Minimum 10 characters"),
    banner_button_text: z.string().min(1, "Button text required"),
    banner_button_url: z.string().url("Enter valid URL"),

    card_images: z.array(
        z.object({
            url: z.string().min(1, "Card image required"),
        })
    ),

    banner_info: z.array(
        z.object({
            icon: z.string().min(1, "Icon required"),
            title: z.string().min(1, "Title required"),
            description: z.string().min(1, "Description required"),
        })
    ),
});

export const howTreatmentWorksValidationSchema = z.object({
    treatment_steps: z.array(
        z.object({
            icon: z.string().min(1, "Icon required"),
            title: z.string().min(1, "Title required"),
            description: z.string().min(1, "Description required"),
        })
    ),
})

export const demorHotspotFormValidationSchema = z.object({
    image_url: z.string().min(1, "Base image is required"),

    section_image_1: z.string().min(1, "Section image 1 is required"),
    section_image_2: z.string().min(1, "Section image 2 is required"),

    section_heading: z
        .string()
        .min(1, "Section heading is required"),

    section_highlight_text: z.string().optional(),

    section_button_text: z
        .string()
        .min(1, "Button text is required"),

    section_button_url: z
        .string()
        .min(1, "Button URL is required")
        .url("Enter a valid URL"),

    demor_hotspot_treatment_title: z
        .string()
        .min(1, "Treatment title is required"),

    hotspot_treatment_description: z
        .string()
        .min(10, "Minimum 10 characters required"),
});

// About us page content form validation

export const aboutusSectionOneFormSchema = z.object({
    image_url_1: z.string().min(1, "Content image one is required"),
    image_url_2: z.string().min(1, "Content image two is required"),
    title: z.string().min(1, "Title is required"),
    highlight_text: z.string(),
    description: z.string().min(10, "At least 10 character required"),
    sub_description: z.string(),
    treatment_info_title: z.string().min(1, "Treatment info title required"),
    treatment_info_description: z.string().min(10, "At least 10 character required"),
    button_text: z.string().min(1, "Button text is required"),
    button_url: z
        .string()
        .min(1, "Button URL is required")
        .url("Please enter a valid URL"),
})

export const addTreatmentProcedureFormSchema = z.object({
    icon: z.string().min(1, "Treatment procedure icon is required"),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Treatment description is required")
})

export const howDemorWorkFormSchema = z.object({
    image_url: z.string().min(1, "Image is required"),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Treatment description is required")
})

export const practitionerSaysFormSchema = z.object({
    image_url: z
        .string()
        .min(1, "Image is required"),

    practitioner_name: z
        .string()
        .min(1, "Practitioner name is required"),

    practitioner_position: z
        .string()
        .min(1, "Position is required"),

    practitioner_details: z
        .string()
        .min(10, "Details must be at least 10 characters"),
});

export const dhstHotspotTherapyFormSchema = z.object({
    base_image_url: z.string().min(1, "Base image is required"),
    secondary_image_url: z.string().min(1, "Right image two is required"),
    section_heading: z.string().min(1, "Section heading is required"),
    section_highlight_text: z.string(),
    description: z.string().min(10, "At least 10 character required"),
    button_text: z.string().min(1, "Button text is required"),
    button_url: z
        .string()
        .min(1, "Button URL is required")
        .url("Please enter a valid URL"),
})

export const dhstSpecalistFormSchema = z.object({
    left_image_url: z.string().min(1, "Left image is required"),
    right_image_url: z.string().min(1, "Right image two is required"),
    section_heading: z.string().min(1, "Section heading is required"),
    section_highlight_text: z.string(),
    section_description: z.string().min(10, "At least 10 character required"),
    left_section_text: z.string().min(1, "Left section title required"),
    right_section_text: z.string().min(10, "Right section title required"),
    button_text: z.string().min(1, "Button text is required"),
    button_url: z
        .string()
        .min(1, "Button URL is required")
        .url("Please enter a valid URL"),
})
