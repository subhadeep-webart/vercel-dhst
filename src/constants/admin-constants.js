const { Settings, Files, Home, Building2 } = require("lucide-react");

export const DASHBOARD_SIDEBAR_NAV_ITEMS = [
    {
        icon: <Home />,
        name: "Home",
        subItems: [{ name: "Banner", path: "/admin/home/banner" },
        { name: "Interactive 3d Model", path: '/admin/home/interactive-3d-model/section-heading' },
        {
            name: "Demor Hotspot Section", path: "/admin/home/demor-hotspot-treatment"
        },
        { name: "Specalize Treatment Training", path: "/admin/home/specalize-treatment-training/section-heading" },
        {
            name: "How Treatment Work", path: "/admin/home/how-treatment-work/section-heading"
        },
        // { name: "Specalize Treatment Training", path: "/admin/home/specalize-treatment-training/section-heading" },
        { name: "Testimonials", path: "/admin/home/testimonials/section-heading" },
        { name: "Expert Insight", path: "/admin/home/expert-insight/section-heading" },
        { name: "Healing Journey Section", path: "/admin/home/healing-journey-section" }
        ]
    },
    {
        icon: <Building2 />,
        name: "About us",
        subItems: [{ name: "Banner", path: "/admin/about-us/banner" }, { name: "Section one", path: "/admin/about-us/section-one" }, { name: "Section two", path: "/admin/about-us/section-two" }, { name: "Treatment procedures", path: "/admin/about-us/treatment-procedures" }, { name: "How demor work", path: "/admin/about-us/how-demor-work/section-heading" }, { name: "Demor hotspot therapy", path: "/admin/about-us/demor-hotspot-therapy" }, { name: "Mind behind the method section", path: "/admin/about-us/mind-behind-the-method/section-heading" }, {
            name: "DHST specalist section", path: "/admin/about-us/dhst-specalist"
        }],
    },
    {
        icon: <Files />,
        name: "Blogs",
        subItems: [{ name: "Banner", path: "/blogs/banner" }],
    },
    {
        icon: <Settings />,
        name: "Site Settings",
        path: "/admin/site-settings",
    },
];

export const HOW_TREATMENT_WORKS_TAB = [{
    name: "Section Heading", href: "/admin/home/how-treatment-work/section-heading"
}, {
    name: "Treatment Steps", href: "/admin/home/how-treatment-work/treatment-steps"
}]

export const SPECALIZE_TREATMENT_TRAINING_TAB = [{
    name: "Section Heading", href: "/admin/home/specalize-treatment-training/section-heading"
}, {
    name: "Trainings", href: "#"
}]

export const EXPERT_INSIGHT_TAB = [{
    name: "Section Heading", href: "/admin/home/expert-insight/section-heading"
}, {
    name: "Insights", href: "/admin/home/expert-insight/insights"
}]

export const TESTIMONIAL_TAB = [{
    name: "Section Heading", href: "/admin/home/testimonials/section-heading"
}, {
    name: "Testimonials", href: "/admin/home/testimonials"
}]


// about section tab
export const PRACTIONER_SECTION_TAB = [{
    name: "Section Heading", href: "/admin/about-us/mind-behind-the-method/section-heading"
}, {
    name: "Practioners", href: "/admin/about-us/mind-behind-the-method/practioners"
}]

export const HOW_DEMOR_WORK_TAB = [{
    name: "Section Heading", href: "/admin/about-us/how-demor-work/section-heading"
}, {
    name: "Workflow Steps", href: "/admin/about-us/how-demor-work/workflow-steps"
}]




// Table header

export const INSIGHT_TABLE_HEADER = [
    {
        id: 1,
        name: "#"
    },
    {
        id: 2,
        name: "Image"
    },
    {
        id: 3,
        name: "Heading"
    }, {
        id: 4,
        name: "Highlight text"
    }, {
        id: 5,
        name: "Description"
    }, {
        id: 6,
        name: "Action"
    }
]

export const TESTIMONIAL_TABLE_HEADER = [
    {
        id: 1,
        name: "#"
    },
    {
        id: 2,
        name: "Image"
    },
    {
        id: 3,
        name: "Name"
    }, {
        id: 4,
        name: "Position"
    }, {
        id: 5,
        name: "Feedback"
    }, {
        id: 6,
        name: "Action"
    }
]