/// <reference types="C:/Users/Maria Emoc/Documents/my-portfolio/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { ref, computed } from 'vue';
import { ArrowLeft, Eye, ExternalLink, Download, FolderOpen, X, Code, Database, FileText, Image, Brain, BarChart3, Globe, Play, Github, Shield, Palette } from 'lucide-vue-next';
const activeFilter = ref('all');
const showModal = ref(false);
const selectedProject = ref(null);
// Your portfolio data
const portfolioData = {
    personal: {
        name: "Maria Sheena Shield P. Emocling"
    }
};
// Updated projects data with the requested changes
const allProjects = [
    {
        id: 'wealth-index-mapping',
        title: 'Wealth Index Mapping using Predictive Models',
        description: 'Comprehensive thesis project analyzing wealth index patterns using advanced machine learning algorithms and predictive modeling techniques.',
        category: 'Data Science',
        technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
        status: 'Completed',
        isThesis: true,
        thumbnail: null,
        showFiles: true,
        features: ['Data preprocessing', 'Predictive modeling', 'Statistical analysis', 'Interactive visualizations', 'Economic pattern recognition'],
        files: [
            { name: 'Thesis Document', type: 'pdf', size: '2.5 MB', path: '/files/projects/wealth-index-mapping/thesis.pdf' },
            { name: 'Complete Project Files', type: 'source', size: '25 MB', path: '/files/projects/wealth-index-mapping/project-files.zip' }
        ],
        liveUrl: null,
        githubUrl: null
    },
    {
        id: 'rice-disease',
        title: 'Rice Leaf Disease Diagnosis',
        description: 'AI-powered application for diagnosing rice leaf diseases using computer vision and Convolutional Neural Networks with real-time processing capabilities.',
        category: 'AI/Machine Learning',
        technologies: ['Python', 'Keras', 'TensorFlow', 'Streamlit', 'OpenCV', 'Computer Vision'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: true,
        features: ['CNN-based classification', 'Real-time detection', 'Web interface', 'Treatment recommendations', 'Image preprocessing'],
        files: [
            { name: 'Rice Leaf Data sets', type: 'excel', size: '45 MB', path: '/files/projects/rice-disease/Rice Leaf Data sets.zip' }
        ],
        liveUrl: 'https://shieldrice.streamlit.app/',
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'sentiment-analysis',
        title: 'Social Media Sentiment Analysis',
        description: 'Comprehensive NLP project for extracting and analyzing sentiments from social media data using advanced text processing and machine learning techniques.',
        category: 'Data Science',
        technologies: ['Python', 'NLP', 'Pandas', 'NLTK', 'TextBlob', 'Scikit-learn'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: true,
        features: ['Sentiment extraction', 'Association rule mining', 'Predictive analytics', 'Data visualization', 'Text preprocessing'],
        files: [
            { name: 'R&D-Sentiment Analysis', type: 'pdf', size: '1.8 MB', path: 'public/files/projects/sentiment-analysis/R&D-Sentiment Analysis.pdf' },
            { name: 'Dataset', type: 'excel', size: '12 MB', path: '/files/projects/sentiment-analysis/sentiment-data.xlsx' }
        ],
        liveUrl: null,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'portfolio-website',
        title: 'Personal Portfolio Website',
        description: 'Modern, responsive portfolio website built with Vue.js and Tailwind CSS featuring dynamic project galleries and interactive components.',
        category: 'Web Development',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vue Router'],
        status: 'In Progress',
        isThesis: false,
        thumbnail: null,
        showFiles: false,
        features: ['Responsive design', 'Dynamic routing', 'File management', 'Interactive UI', 'Modern animations'],
        files: [],
        liveUrl: null,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'encryption-suite',
        title: 'AES/DES/RSA Encryption & Decryption Suite',
        description: 'A Java-based application for secure encryption and decryption using AES, DES, and RSA algorithms.',
        category: 'Information Security',
        technologies: ['Java', 'Streamlit'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: false,
        features: ['AES, DES, RSA encryption', 'User input encryption/decryption', 'Java Stream-based UI', 'Secure key management'],
        files: [],
        liveUrl: null,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'chat-word-game',
        title: 'Chat and Word Game Application',
        description: 'A desktop application supporting multiplayer chat and word games built using distributed systems concepts.',
        category: 'Software Development',
        technologies: ['Java', 'XML', 'JSON', 'RMI', 'CORBA', 'DOM'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: false,
        features: ['Multiplayer chat', 'Word puzzle game', 'Uses CORBA and RMI', 'Real-time synchronization'],
        files: [],
        liveUrl: null,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'attendance-system',
        title: 'QR-Based Attendance System',
        description: 'A back-end system for managing attendance using QR code scanning and admin panel with SQL integration.',
        category: 'Web Development',
        technologies: ['SQL', 'NodeJs', 'PHP', 'Web APIs'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: false,
        features: ['QR Code integration', 'Admin dashboard', 'Attendance logs and reports', 'User management'],
        files: [],
        liveUrl: null,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'tryouts-system',
        title: 'Tryouts System Database Backend',
        description: 'A back-end database system developed to handle sports tryouts data and admin management.',
        category: 'Database Systems',
        technologies: ['SQL'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: false,
        features: ['Database administration', 'Tryout records tracking', 'SQL-backed system', 'Player evaluation management'],
        files: [],
        liveUrl: null,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git'
    },
    {
        id: 'carbon-tracker',
        title: 'Carbon Emission Tracker (UI/UX Design)',
        description: 'UI/UX design project for tracking carbon emissions using Figma.',
        category: 'UI/UX Design',
        technologies: ['Figma'],
        status: 'Completed',
        isThesis: false,
        thumbnail: null,
        showFiles: false,
        features: ['Clean UI mockups', 'Carbon footprint tracking design', 'Figma prototyping', 'Data visualization components'],
        files: [],
        liveUrl: null,
        githubUrl: 'https://www.figma.com/proto/gPl5QuCDMEJ3Wd9erQ2qbI?node-id=255-1638&t=MJGMgsUTOYTxj9RK-6'
    }
];
// Computed properties and methods
const categories = computed(() => {
    const cats = [...new Set(allProjects.map(p => p.category))];
    return cats;
});
const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') {
        return allProjects;
    }
    return allProjects.filter(project => project.category === activeFilter.value);
});
const getProjectsByCategory = (category) => {
    return allProjects.filter(project => project.category === category);
};
const getCategoryIcon = (category) => {
    const iconMap = {
        'Web Development': Globe,
        'AI/Machine Learning': Brain,
        'Data Science': BarChart3,
        'Software Development': Code,
        'Information Security': Shield,
        'Database Systems': Database,
        'UI/UX Design': Palette
    };
    return iconMap[category] || Code;
};
const getFileIcon = (type) => {
    const iconMap = {
        'pdf': FileText,
        'excel': BarChart3,
        'source': Code,
        'image': Image,
        'video': Play
    };
    return iconMap[type] || FileText;
};
const getFileColor = (type) => {
    const colorMap = {
        'pdf': 'bg-red-500',
        'excel': 'bg-green-500',
        'source': 'bg-blue-500',
        'image': 'bg-purple-500',
        'video': 'bg-yellow-500'
    };
    return colorMap[type] || 'bg-gray-500';
};
const showDownloadModal = (project) => {
    selectedProject.value = project;
    showModal.value = true;
};
const downloadFile = (file) => {
    // Implementation for file download
    const link = document.createElement('a');
    link.href = file.path;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "min-h-screen bg-gray-50" },
});
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "fixed top-0 w-full bg-white shadow-lg z-50" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container mx-auto px-6 py-4" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex justify-between items-center" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
    ...{ class: "text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors" },
}));
const __VLS_2 = __VLS_1({
    to: "/",
    ...{ class: "text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
(__VLS_ctx.portfolioData.personal.name);
// @ts-ignore
[portfolioData,];
var __VLS_3;
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: "/",
    ...{ class: "flex items-center text-gray-600 hover:text-blue-600 transition-colors" },
}));
const __VLS_7 = __VLS_6({
    to: "/",
    ...{ class: "flex items-center text-gray-600 hover:text-blue-600 transition-colors" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
const __VLS_10 = {}.ArrowLeft;
/** @type {[typeof __VLS_components.ArrowLeft, ]} */ ;
// @ts-ignore
ArrowLeft;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    ...{ class: "w-5 h-5 mr-2" },
}));
const __VLS_12 = __VLS_11({
    ...{ class: "w-5 h-5 mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
var __VLS_8;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "pt-24 pb-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container mx-auto px-6 text-center" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-4xl md:text-5xl font-bold mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-xl opacity-90 max-w-2xl mx-auto" },
});
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "py-6 bg-white border-b" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container mx-auto px-6" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-wrap justify-center gap-4" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.activeFilter = 'all';
            // @ts-ignore
            [activeFilter,];
        } },
    ...{ class: (['px-6 py-2 rounded-full transition-colors',
            __VLS_ctx.activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']) },
});
// @ts-ignore
[activeFilter,];
(__VLS_ctx.allProjects.length);
// @ts-ignore
[allProjects,];
for (const [category] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
    // @ts-ignore
    [categories,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeFilter = category;
                // @ts-ignore
                [activeFilter,];
            } },
        key: (category),
        ...{ class: (['px-6 py-2 rounded-full transition-colors',
                __VLS_ctx.activeFilter === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']) },
    });
    // @ts-ignore
    [activeFilter,];
    (category);
    (__VLS_ctx.getProjectsByCategory(category).length);
    // @ts-ignore
    [getProjectsByCategory,];
}
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "py-12" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container mx-auto px-6" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" },
});
for (const [project] of __VLS_getVForSourceType((__VLS_ctx.filteredProjects))) {
    // @ts-ignore
    [filteredProjects,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (project.id),
        ...{ class: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden" },
    });
    if (project.thumbnail) {
        __VLS_asFunctionalElement(__VLS_elements.img)({
            src: (project.thumbnail),
            alt: (project.title),
            ...{ class: "w-full h-full object-cover" },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "flex items-center justify-center h-full" },
        });
        const __VLS_15 = ((__VLS_ctx.getCategoryIcon(project.category)));
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
            ...{ class: "w-16 h-16 text-white opacity-50" },
        }));
        const __VLS_17 = __VLS_16({
            ...{ class: "w-16 h-16 text-white opacity-50" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        // @ts-ignore
        [getCategoryIcon,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "absolute top-4 right-4" },
    });
    if (project.isThesis) {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold" },
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: (['px-2 py-1 rounded-full text-xs font-semibold',
                    project.status === 'Completed' ? 'bg-green-500 text-white' :
                        project.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-white']) },
        });
        (project.status);
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "p-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "text-xl font-bold text-gray-800 mb-2" },
    });
    (project.title);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-gray-600 mb-4 line-clamp-3" },
    });
    (project.description);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex flex-wrap gap-2" },
    });
    for (const [tech] of __VLS_getVForSourceType((project.technologies.slice(0, 3)))) {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            key: (tech),
            ...{ class: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs" },
        });
        (tech);
    }
    if (project.technologies.length > 3) {
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "text-xs text-gray-500" },
        });
        (project.technologies.length - 3);
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
        ...{ class: "text-sm font-semibold text-gray-700 mb-2" },
    });
    __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
        ...{ class: "text-sm text-gray-600 space-y-1" },
    });
    for (const [feature] of __VLS_getVForSourceType((project.features.slice(0, 2)))) {
        __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
            key: (feature),
            ...{ class: "flex items-center" },
        });
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" },
        });
        (feature);
    }
    if (project.features.length > 2) {
        __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
            ...{ class: "text-xs text-blue-600" },
        });
        (project.features.length - 2);
    }
    if (project.showFiles && project.files.length > 0) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
            ...{ class: "text-sm font-semibold text-gray-700 mb-2" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "flex flex-wrap gap-1" },
        });
        for (const [file] of __VLS_getVForSourceType((project.files.slice(0, 2)))) {
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                key: (file.name),
                ...{ class: "text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded flex items-center" },
            });
            const __VLS_20 = ((__VLS_ctx.getFileIcon(file.type)));
            // @ts-ignore
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
                ...{ class: "w-3 h-3 mr-1" },
            }));
            const __VLS_22 = __VLS_21({
                ...{ class: "w-3 h-3 mr-1" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            // @ts-ignore
            [getFileIcon,];
            (file.name);
        }
        if (project.files.length > 2) {
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                ...{ class: "text-xs text-blue-600" },
            });
            (project.files.length - 2);
        }
    }
    else if (!project.showFiles && project.githubUrl) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded" },
        });
        if (!project.githubUrl.includes('figma')) {
            const __VLS_25 = {}.Github;
            /** @type {[typeof __VLS_components.Github, ]} */ ;
            // @ts-ignore
            Github;
            // @ts-ignore
            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
                ...{ class: "w-3 h-3 mr-2" },
            }));
            const __VLS_27 = __VLS_26({
                ...{ class: "w-3 h-3 mr-2" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        }
        if (project.githubUrl.includes('figma')) {
            const __VLS_30 = {}.Palette;
            /** @type {[typeof __VLS_components.Palette, ]} */ ;
            // @ts-ignore
            Palette;
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
                ...{ class: "w-3 h-3 mr-2" },
            }));
            const __VLS_32 = __VLS_31({
                ...{ class: "w-3 h-3 mr-2" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        }
        if (!project.githubUrl.includes('figma')) {
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
        }
        if (project.githubUrl.includes('figma')) {
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
        }
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex space-x-2" },
    });
    const __VLS_35 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
        to: (`/project/${project.id}`),
        ...{ class: "flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors" },
    }));
    const __VLS_37 = __VLS_36({
        to: (`/project/${project.id}`),
        ...{ class: "flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    const { default: __VLS_39 } = __VLS_38.slots;
    const __VLS_40 = {}.Eye;
    /** @type {[typeof __VLS_components.Eye, ]} */ ;
    // @ts-ignore
    Eye;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        ...{ class: "w-4 h-4" },
    }));
    const __VLS_42 = __VLS_41({
        ...{ class: "w-4 h-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    var __VLS_38;
    if (project.liveUrl) {
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            href: (project.liveUrl),
            target: "_blank",
            ...{ class: "flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors" },
        });
        const __VLS_45 = {}.ExternalLink;
        /** @type {[typeof __VLS_components.ExternalLink, ]} */ ;
        // @ts-ignore
        ExternalLink;
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
            ...{ class: "w-4 h-4" },
        }));
        const __VLS_47 = __VLS_46({
            ...{ class: "w-4 h-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    }
    if (project.githubUrl) {
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            href: (project.githubUrl),
            target: "_blank",
            ...{ class: "flex items-center justify-center bg-gray-800 text-white px-3 py-2 rounded text-sm hover:bg-gray-900 transition-colors" },
        });
        if (!project.githubUrl.includes('figma')) {
            const __VLS_50 = {}.Github;
            /** @type {[typeof __VLS_components.Github, ]} */ ;
            // @ts-ignore
            Github;
            // @ts-ignore
            const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
                ...{ class: "w-4 h-4" },
            }));
            const __VLS_52 = __VLS_51({
                ...{ class: "w-4 h-4" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        }
        if (project.githubUrl.includes('figma')) {
            const __VLS_55 = {}.Palette;
            /** @type {[typeof __VLS_components.Palette, ]} */ ;
            // @ts-ignore
            Palette;
            // @ts-ignore
            const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
                ...{ class: "w-4 h-4" },
            }));
            const __VLS_57 = __VLS_56({
                ...{ class: "w-4 h-4" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        }
    }
    if (project.showFiles && project.files.length > 0) {
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(project.showFiles && project.files.length > 0))
                        return;
                    __VLS_ctx.showDownloadModal(project);
                    // @ts-ignore
                    [showDownloadModal,];
                } },
            ...{ class: "flex items-center justify-center bg-indigo-600 text-white px-3 py-2 rounded text-sm hover:bg-indigo-700 transition-colors" },
        });
        const __VLS_60 = {}.Download;
        /** @type {[typeof __VLS_components.Download, ]} */ ;
        // @ts-ignore
        Download;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
            ...{ class: "w-4 h-4" },
        }));
        const __VLS_62 = __VLS_61({
            ...{ class: "w-4 h-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    }
}
if (__VLS_ctx.filteredProjects.length === 0) {
    // @ts-ignore
    [filteredProjects,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "text-center py-12" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "text-gray-400 mb-4" },
    });
    const __VLS_65 = {}.FolderOpen;
    /** @type {[typeof __VLS_components.FolderOpen, ]} */ ;
    // @ts-ignore
    FolderOpen;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
        ...{ class: "w-16 h-16 mx-auto mb-4" },
    }));
    const __VLS_67 = __VLS_66({
        ...{ class: "w-16 h-16 mx-auto mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "text-xl font-semibold" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
if (__VLS_ctx.showModal) {
    // @ts-ignore
    [showModal,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "bg-white rounded-lg max-w-md w-full" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "p-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex justify-between items-center mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "text-xl font-bold text-gray-800" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.showModal))
                    return;
                __VLS_ctx.showModal = false;
                // @ts-ignore
                [showModal,];
            } },
        ...{ class: "text-gray-400 hover:text-gray-600" },
    });
    const __VLS_70 = {}.X;
    /** @type {[typeof __VLS_components.X, ]} */ ;
    // @ts-ignore
    X;
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({
        ...{ class: "w-6 h-6" },
    }));
    const __VLS_72 = __VLS_71({
        ...{ class: "w-6 h-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_71));
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "space-y-3" },
    });
    for (const [file] of __VLS_getVForSourceType((__VLS_ctx.selectedProject?.files))) {
        // @ts-ignore
        [selectedProject,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (file.name),
            ...{ class: "flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "flex items-center space-x-3" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: (['p-2 rounded', __VLS_ctx.getFileColor(file.type)]) },
        });
        // @ts-ignore
        [getFileColor,];
        const __VLS_75 = ((__VLS_ctx.getFileIcon(file.type)));
        // @ts-ignore
        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({
            ...{ class: "w-4 h-4 text-white" },
        }));
        const __VLS_77 = __VLS_76({
            ...{ class: "w-4 h-4 text-white" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_76));
        // @ts-ignore
        [getFileIcon,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "font-medium text-gray-800" },
        });
        (file.name);
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "text-sm text-gray-500" },
        });
        (file.size);
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.showModal))
                        return;
                    __VLS_ctx.downloadFile(file);
                    // @ts-ignore
                    [downloadFile,];
                } },
            ...{ class: "text-blue-600 hover:text-blue-800" },
        });
        const __VLS_80 = {}.Download;
        /** @type {[typeof __VLS_components.Download, ]} */ ;
        // @ts-ignore
        Download;
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
            ...{ class: "w-5 h-5" },
        }));
        const __VLS_82 = __VLS_81({
            ...{ class: "w-5 h-5" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    }
}
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-24']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-br']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['to-purple-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-90']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:-translate-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['h-48']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-br']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['to-purple-600']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['line-clamp-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-1']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ArrowLeft: ArrowLeft,
            Eye: Eye,
            ExternalLink: ExternalLink,
            Download: Download,
            FolderOpen: FolderOpen,
            X: X,
            Github: Github,
            Palette: Palette,
            activeFilter: activeFilter,
            showModal: showModal,
            selectedProject: selectedProject,
            portfolioData: portfolioData,
            allProjects: allProjects,
            categories: categories,
            filteredProjects: filteredProjects,
            getProjectsByCategory: getProjectsByCategory,
            getCategoryIcon: getCategoryIcon,
            getFileIcon: getFileIcon,
            getFileColor: getFileColor,
            showDownloadModal: showDownloadModal,
            downloadFile: downloadFile,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
