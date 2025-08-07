/// <reference types="C:/Users/Maria Emoc/Documents/my-portfolio/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowLeft, ExternalLink, Github, Target, CheckCircle, Star, Calendar, FolderOpen, Users, Download, Code, Database, FileText, Image as ImageIcon, AlertTriangle, Lightbulb, Play } from 'lucide-vue-next';
const route = useRoute();
const router = useRouter();
const loading = ref(true);
const error = ref(null);
const project = ref(null);
const showImageModal = ref(false);
const selectedImage = ref('');
// Updated projects data with the requested changes
const projectsData = {
    'wealth-index-mapping': {
        id: 'wealth-index-mapping',
        title: 'Wealth Index Mapping using Predictive Models',
        description: 'Thesis project analyzing wealth index patterns using ML and predictive modeling techniques.',
        fullDescription: 'This comprehensive thesis project explores wealth index patterns across different demographics and geographic regions. Using advanced machine learning algorithms and predictive modeling techniques, the project identifies key indicators of wealth distribution and creates models to assess economic patterns.',
        category: 'Data Science',
        technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NumPy'],
        status: 'Completed',
        isThesis: true,
        duration: '8 months (2024)',
        team: 'Individual Project',
        showFiles: true,
        showMediaGallery: true,
        // Added the images for wealth index mapping project
        images: [
            '/files/projects/wealth-index-mapping/default-date-ph-processed-GradientBoosting-map_pred_rwi_scaled.png',
            '/files/projects/wealth-index-mapping/default-date-ph-processed-LightGBM-map_pred_rwi_scaled.png',
            '/files/projects/wealth-index-mapping/default-date-ph-processed-RandomForest-map_pred_rwi_scaled.png',
            '/files/projects/wealth-index-mapping/Thesispic1.png',
            '/files/projects/wealth-index-mapping/Thesispic2.png'
        ],
        objectives: [
            'Analyze wealth index patterns across different demographics',
            'Develop predictive models for economic assessment',
            'Create data visualizations for wealth distribution insights',
            'Provide actionable recommendations for policy making'
        ],
        challenges: [
            'Handling large datasets with limited computational resources',
            'Ensuring data quality and consistency across multiple sources',
            'Optimizing model performance while maintaining interpretability',
            'Validating results across different demographic segments'
        ],
        lessons: [
            'Importance of comprehensive data preprocessing in ML projects',
            'Value of iterative model development and validation',
            'Need for clear documentation and reproducible research',
            'Benefits of stakeholder engagement throughout the project lifecycle'
        ],
        methodology: 'The project employed a mixed-methods approach combining quantitative analysis with machine learning techniques. Data preprocessing, feature engineering, and model validation were conducted using Python libraries.',
        results: [
            'Achieved 89% accuracy in wealth index prediction',
            'Identified 12 key indicators of wealth distribution',
            'Created comprehensive analysis dashboard',
            'Published findings in university research repository'
        ],
        features: ['Data preprocessing', 'Predictive modeling', 'Statistical analysis', 'Interactive visualizations'],
        files: [
            { name: 'Thesis Document', type: 'pdf', size: '2.5 MB', path: '/files/projects/wealth-index-mapping/thesis.pdf' },
            { name: 'Images', type: 'img', size: '10 MB', path: '/files/projects/wealth-index-mapping/project-files.zip' }
        ],
        technicalDetails: [
            {
                title: 'Data Collection & Preprocessing',
                description: 'Collected data from multiple sources including government databases and survey data. Applied comprehensive data cleaning, normalization, and feature engineering techniques.'
            },
            {
                title: 'Predictive Model Implementation',
                description: 'Implemented various ML algorithms including Random Forest, SVM, and Neural Networks. Used cross-validation and hyperparameter tuning for optimal performance.'
            },
            {
                title: 'Analysis & Visualization',
                description: 'Created comprehensive visualizations using Matplotlib and Seaborn. Developed analytical frameworks for wealth index assessment and pattern recognition.'
            }
        ]
    },
    'rice-disease': {
        id: 'rice-disease',
        title: 'Rice Leaf Disease Diagnosis',
        isThesis: false,
        description: 'AI-powered application for diagnosing rice leaf diseases using computer vision and CNN.',
        fullDescription: 'An innovative AI application that leverages deep learning and computer vision to diagnose rice leaf diseases. The system uses Convolutional Neural Networks to classify different types of diseases from leaf images, providing farmers with instant diagnosis and treatment recommendations.',
        category: 'AI/Machine Learning',
        technologies: ['Python', 'Keras', 'TensorFlow', 'Streamlit', 'OpenCV', 'PIL', 'NumPy'],
        status: 'Completed',
        duration: '4 months (2024)',
        team: 'Individual Project',
        showFiles: true,
        showMediaGallery: false,
        liveUrl: 'https://shieldrice.streamlit.app/',
        objectives: [
            'Develop accurate disease classification model',
            'Create user-friendly web interface for farmers',
            'Provide treatment recommendations for diagnosed diseases',
            'Enable real-time image processing and diagnosis'
        ],
        challenges: [
            'Collecting and labeling high-quality disease images',
            'Dealing with varying image conditions and lighting',
            'Optimizing model size for web deployment',
            'Ensuring accurate classification across different rice varieties'
        ],
        lessons: [
            'Importance of data augmentation in computer vision projects',
            'Value of transfer learning for domain-specific applications',
            'Need for user-friendly interfaces in agricultural technology',
            'Benefits of continuous model evaluation and improvement'
        ],
        methodology: 'Implemented a CNN-based approach using TensorFlow/Keras. Trained the model on a comprehensive dataset of rice leaf images with various disease types.',
        results: [
            'Achieved 94% accuracy in disease classification',
            'Successfully deployed web application',
            'Processed over 1000+ images during testing',
            'Received positive feedback from agricultural stakeholders'
        ],
        features: ['CNN-based classification', 'Real-time detection', 'Web interface', 'Treatment recommendations'],
        files: [
            // Updated the dataset file path and type for rice disease project
            { name: 'Rice Leaf Data sets', type: 'excel', size: '45 MB', path: '/files/projects/rice-disease/Rice Leaf Data sets.zip' }
        ],
        technicalDetails: [
            {
                title: 'Model Architecture',
                description: 'Designed a CNN architecture with multiple convolutional layers, pooling layers, and dropout for regularization. Used transfer learning with pre-trained models.'
            },
            {
                title: 'Data Augmentation',
                description: 'Applied various data augmentation techniques including rotation, scaling, and color adjustments to increase dataset diversity and model robustness.'
            },
            {
                title: 'Web Deployment',
                description: 'Deployed the model using Streamlit for easy web access. Integrated image upload functionality and real-time processing capabilities.'
            }
        ]
    },
    'sentiment-analysis': {
        id: 'sentiment-analysis',
        title: 'Social Media Sentiment Analysis',
        isThesis: false,
        description: 'NLP project for extracting and analyzing sentiments from social media data.',
        fullDescription: 'A comprehensive Natural Language Processing project that analyzes sentiment patterns in social media data. The project combines text preprocessing, sentiment classification, and association rule mining to extract meaningful insights from user-generated content.',
        category: 'Data Science',
        technologies: ['Python', 'NLP', 'Pandas', 'NLTK', 'TextBlob', 'Excel', 'Matplotlib'],
        status: 'Completed',
        duration: '3 months (2024)',
        team: 'Team of 2',
        showFiles: true,
        showMediaGallery: false,
        githubUrl: 'https://github.com/marshee456/my-portfolio.git',
        objectives: [
            'Extract sentiment patterns from social media posts',
            'Apply association rule mining for insight discovery',
            'Develop predictive models for sentiment trends',
            'Create comprehensive analysis reports'
        ],
        challenges: [
            'Handling noisy and unstructured social media text data',
            'Dealing with sarcasm and context-dependent sentiment',
            'Processing large volumes of data efficiently',
            'Maintaining model performance across different platforms'
        ],
        lessons: [
            'Importance of robust text preprocessing techniques',
            'Value of combining multiple sentiment analysis approaches',
            'Need for domain-specific sentiment lexicons',
            'Benefits of association rule mining for pattern discovery'
        ],
        methodology: 'Used NLP techniques for text preprocessing, sentiment analysis algorithms for classification, and association rule mining for pattern discovery.',
        results: [
            'Analyzed 50,000+ social media posts',
            'Identified key sentiment drivers and patterns',
            'Created predictive model with 85% accuracy',
            'Generated actionable business insights'
        ],
        features: ['Sentiment extraction', 'Association rule mining', 'Predictive analytics', 'Data visualization'],
        files: [
            { name: 'R&D-Sentiment Analysis', type: 'pdf', size: '1.8 MB', path: '/files/projects/sentiment-analysis/R&D-Sentiment Analysis.pdf' },
            { name: 'Dataset', type: 'excel', size: '12 MB', path: '/files/projects/sentiment-analysis/sentiment-data.xlsx' }
        ],
        technicalDetails: [
            {
                title: 'Text Preprocessing',
                description: 'Implemented comprehensive text cleaning including tokenization, stop word removal, stemming, and lemmatization using NLTK library.'
            },
            {
                title: 'Sentiment Classification',
                description: 'Used multiple sentiment analysis approaches including lexicon-based methods and machine learning classifiers for robust sentiment detection.'
            },
            {
                title: 'Association Rule Mining',
                description: 'Applied Apriori algorithm to discover interesting relationships and patterns in sentiment data across different user segments.'
            }
        ]
    },
    'portfolio-website': {
        id: 'portfolio-website',
        title: 'Personal Portfolio Website',
        isThesis: false,
        description: 'Modern, responsive portfolio website built with Vue.js and Tailwind CSS.',
        fullDescription: 'A modern, fully responsive portfolio website showcasing projects, skills, and professional experience. Built with Vue.js 3, TypeScript, and Tailwind CSS, featuring dynamic project galleries, interactive components, and file management capabilities.',
        category: 'Web Development',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vue Router'],
        status: 'In Progress',
        duration: '2 months (2024)',
        team: 'Individual Project',
        showFiles: false,
        showMediaGallery: false,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git',
        objectives: [
            'Create a professional online presence',
            'Showcase projects with detailed information',
            'Implement responsive and modern design',
            'Enable easy content management and updates'
        ],
        challenges: [
            'Designing an engaging and professional interface',
            'Implementing dynamic project filtering and search',
            'Optimizing performance and loading times',
            'Ensuring cross-browser compatibility'
        ],
        lessons: [
            'Importance of user experience in portfolio design',
            'Benefits of component-based architecture',
            'Value of responsive design principles',
            'Need for performance optimization in web applications'
        ],
        methodology: 'Used Vue.js composition API with TypeScript for type safety. Implemented responsive design with Tailwind CSS and dynamic routing with Vue Router.',
        results: [
            'Successfully deployed responsive portfolio website',
            'Implemented dynamic project gallery system',
            'Achieved excellent performance scores',
            'Created reusable component library'
        ],
        features: ['Responsive design', 'Dynamic routing', 'File management', 'Interactive UI', 'Modern animations'],
        files: [],
        technicalDetails: [
            {
                title: 'Frontend Architecture',
                description: 'Built with Vue.js 3 Composition API and TypeScript for enhanced developer experience and type safety.'
            },
            {
                title: 'Styling & Design',
                description: 'Implemented responsive design using Tailwind CSS with custom components and modern design patterns.'
            },
            {
                title: 'Performance Optimization',
                description: 'Applied code splitting, lazy loading, and asset optimization techniques for improved performance.'
            }
        ],
        liveUrl: 'https://your-portfolio-url.com'
    },
    'encryption-suite': {
        id: 'encryption-suite',
        title: 'AES/DES/RSA Encryption & Decryption Suite',
        description: 'A Java-based application for secure encryption and decryption using AES, DES, and RSA algorithms.',
        fullDescription: 'A comprehensive encryption suite built in Java that implements multiple encryption algorithms including AES, DES, and RSA. The application provides a user-friendly interface for encrypting and decrypting data using different cryptographic methods.',
        category: 'Information Security',
        technologies: ['Java', 'Streamlit'],
        status: 'Completed',
        isThesis: false,
        duration: '2 months (2023)',
        team: 'Individual Project',
        showFiles: false,
        showMediaGallery: false,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git',
        objectives: [
            'Implement multiple encryption algorithms',
            'Create user-friendly encryption/decryption interface',
            'Ensure secure handling of cryptographic operations',
            'Demonstrate understanding of information security principles'
        ],
        challenges: [
            'Understanding complex cryptographic algorithms',
            'Implementing secure key management',
            'Creating intuitive user interface',
            'Ensuring proper error handling and validation'
        ],
        lessons: [
            'Deep understanding of cryptographic principles',
            'Importance of secure coding practices',
            'Value of comprehensive testing in security applications',
            'Need for clear documentation in security software'
        ],
        features: ['AES, DES, RSA encryption', 'User input encryption/decryption', 'Java Stream-based UI', 'Secure key management'],
        files: [],
        technicalDetails: [
            {
                title: 'Encryption Implementation',
                description: 'Implemented AES, DES, and RSA encryption algorithms with proper key generation and secure random number generation.'
            },
            {
                title: 'User Interface',
                description: 'Created an intuitive Java-based interface using Streamlit integration for easy encryption and decryption operations.'
            },
            {
                title: 'Security Features',
                description: 'Implemented secure key storage, input validation, and proper error handling to ensure cryptographic security.'
            }
        ]
    },
    'chat-word-game': {
        id: 'chat-word-game',
        title: 'Chat and Word Game Application',
        description: 'A desktop application supporting multiplayer chat and word games built using distributed systems concepts.',
        fullDescription: 'A comprehensive desktop application that combines real-time multiplayer chat functionality with engaging word puzzle games. Built using distributed systems concepts including CORBA and RMI for seamless client-server communication.',
        category: 'Software Development',
        technologies: ['Java', 'XML', 'JSON', 'RMI', 'CORBA', 'DOM'],
        status: 'Completed',
        isThesis: false,
        duration: '2 months (2023)',
        team: 'Team of 6',
        showFiles: false,
        showMediaGallery: true,
        // Added images for chat-word-game project
        images: [
            '/files/projects/chat app-word game/received_197619353204686.webp',
            '/files/projects/chat app-word game/received_776384383984622.webp',
            '/files/projects/chat app-word game/received_807787957493834.webp',
            '/files/projects/chat app-word game/received_719994969843137.webp',
            '/files/projects/chat app-word game/received_875797697046710.webp',
            '/files/projects/chat app-word game/received_1132585314176714.webp'
        ],
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git',
        objectives: [
            'Develop multiplayer chat system',
            'Implement engaging word puzzle games',
            'Apply distributed systems concepts',
            'Create seamless user experience'
        ],
        challenges: [
            'Managing concurrent user connections',
            'Synchronizing game state across clients',
            'Implementing reliable message passing',
            'Handling network latency and disconnections'
        ],
        lessons: [
            'Understanding of distributed systems architecture',
            'Importance of robust network programming',
            'Value of proper synchronization mechanisms',
            'Benefits of modular application design'
        ],
        methodology: 'Implemented distributed client-server architecture using Java RMI and CORBA for real-time communication. Used XML and JSON for data serialization and DOM parsing for configuration management.',
        results: [
            'Successfully implemented multiplayer chat system',
            'Created engaging word puzzle game mechanics',
            'Achieved stable network communication',
            'Delivered functional desktop application'
        ],
        features: ['Multiplayer chat', 'Word puzzle game', 'Uses CORBA and RMI', 'Real-time synchronization'],
        files: [],
        technicalDetails: [
            {
                title: 'Distributed Architecture',
                description: 'Implemented client-server architecture using CORBA and RMI for distributed communication and game state management.'
            },
            {
                title: 'Chat System',
                description: 'Developed real-time chat functionality with message broadcasting, user management, and chat room features.'
            },
            {
                title: 'Game Engine',
                description: 'Created word puzzle game engine with scoring system, timer functionality, and multiplayer synchronization.'
            }
        ]
    },
    'attendance-system': {
        id: 'attendance-system',
        title: 'QR-Based Attendance System',
        description: 'A back-end system for managing attendance using QR code scanning and admin panel with SQL integration.',
        fullDescription: 'A comprehensive attendance management system that utilizes QR code technology for efficient check-in/check-out processes. Features an administrative dashboard for managing users, generating reports, and monitoring attendance patterns.',
        category: 'Web Development',
        technologies: ['SQL', 'NodeJs', 'PHP', 'Web APIs'],
        status: 'Completed',
        isThesis: false,
        duration: '2 months (2023)',
        team: 'Team of 2',
        showFiles: false,
        showMediaGallery: false,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git',
        objectives: [
            'Implement QR code-based attendance tracking',
            'Develop comprehensive admin dashboard',
            'Create automated reporting system',
            'Ensure secure data management'
        ],
        challenges: [
            'Integrating QR code generation and scanning',
            'Designing efficient database schema',
            'Implementing secure authentication',
            'Creating responsive admin interface'
        ],
        lessons: [
            'Understanding of QR code implementation',
            'Database design best practices',
            'Importance of user authentication and authorization',
            'Value of automated reporting systems'
        ],
        features: ['QR Code integration', 'Admin dashboard', 'Attendance logs and reports', 'User management'],
        files: [],
        technicalDetails: [
            {
                title: 'QR Code System',
                description: 'Implemented QR code generation and scanning functionality for seamless attendance tracking with real-time validation.'
            },
            {
                title: 'Database Design',
                description: 'Designed normalized SQL database schema for efficient storage of user data, attendance records, and system logs.'
            },
            {
                title: 'Admin Dashboard',
                description: 'Developed comprehensive admin panel using PHP and Node.js with features for user management and report generation.'
            }
        ]
    },
    'tryouts-system': {
        id: 'tryouts-system',
        title: 'Tryouts System Database Backend',
        description: 'A back-end database system developed to handle sports tryouts data and admin management.',
        fullDescription: 'A specialized database management system designed for handling sports tryouts and team selection processes. Features comprehensive data tracking, player evaluation systems, and administrative tools for coaches and sports managers.',
        category: 'Database Systems',
        technologies: ['SQL'],
        status: 'Completed',
        isThesis: false,
        duration: '1 month (2023)',
        team: 'Individual Project',
        showFiles: false,
        showMediaGallery: false,
        githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git',
        objectives: [
            'Design efficient database for tryouts management',
            'Implement player evaluation tracking',
            'Create administrative tools for coaches',
            'Ensure data integrity and security'
        ],
        challenges: [
            'Designing complex relational database schema',
            'Implementing efficient query optimization',
            'Handling large volumes of evaluation data',
            'Creating flexible reporting mechanisms'
        ],
        lessons: [
            'Advanced SQL database design principles',
            'Understanding of complex data relationships',
            'Importance of database normalization',
            'Value of proper indexing strategies'
        ],
        features: ['Database administration', 'Tryout records tracking', 'SQL-backed system', 'Player evaluation management'],
        files: [],
        technicalDetails: [
            {
                title: 'Database Schema Design',
                description: 'Designed comprehensive relational database schema with proper normalization for players, tryouts, evaluations, and team management.'
            },
            {
                title: 'Data Management',
                description: 'Implemented efficient data storage and retrieval systems with proper indexing and query optimization techniques.'
            },
            {
                title: 'Administrative Features',
                description: 'Created SQL procedures and functions for automated data processing, reporting, and administrative tasks.'
            }
        ]
    },
    'carbon-tracker': {
        id: 'carbon-tracker',
        title: 'Carbon Emission Tracker (UI/UX Design)',
        description: 'UI/UX design project for tracking carbon emissions using Figma.',
        fullDescription: 'A comprehensive UI/UX design project focused on creating an intuitive and engaging interface for tracking personal and corporate carbon emissions. The design emphasizes user experience, data visualization, and actionable insights for environmental sustainability.',
        category: 'UI/UX Design',
        technologies: ['Figma'],
        status: 'Completed',
        isThesis: false,
        duration: '1 month (2023)',
        team: 'Individual Project',
        showFiles: false,
        showMediaGallery: false,
        liveUrl: 'https://www.figma.com/proto/gPl5QuCDMEJ3Wd9erQ2qbI?node-id=255-1638&t=MJGMgsUTOYTxj9RK-6',
        objectives: [
            'Create intuitive carbon tracking interface',
            'Design engaging data visualization components',
            'Develop user-friendly onboarding flow',
            'Implement responsive design principles'
        ],
        challenges: [
            'Making complex environmental data accessible',
            'Creating engaging visual representations',
            'Designing for different user personas',
            'Balancing functionality with simplicity'
        ],
        lessons: [
            'Importance of user-centered design approach',
            'Value of iterative design and prototyping',
            'Understanding of environmental data visualization',
            'Benefits of comprehensive user research'
        ],
        features: ['Clean UI mockups', 'Carbon footprint tracking design', 'Figma prototyping', 'Data visualization components'],
        files: [],
        technicalDetails: [
            {
                title: 'Design System',
                description: 'Created comprehensive design system with consistent color schemes, typography, and component library for scalable design.'
            },
            {
                title: 'User Experience Flow',
                description: 'Designed intuitive user journey with clear navigation, onboarding process, and goal-setting features for carbon tracking.'
            },
            {
                title: 'Data Visualization',
                description: 'Developed engaging charts, graphs, and infographics to make carbon emission data easily understandable and actionable.'
            }
        ]
    }
};
const relatedProjects = computed(() => {
    if (!project.value)
        return [];
    return Object.values(projectsData)
        .filter(p => p.id !== project.value.id && p.category === project.value.category)
        .slice(0, 2);
});
const getFileIcon = (type) => {
    const icons = {
        pdf: FileText,
        source: Code,
        excel: Database,
        document: FileText,
        image: ImageIcon,
        video: Play
    };
    return icons[type] || FileText;
};
const getFileColor = (type) => {
    const colors = {
        pdf: 'bg-red-500',
        source: 'bg-blue-500',
        excel: 'bg-green-500',
        document: 'bg-purple-500',
        image: 'bg-orange-500',
        video: 'bg-pink-500'
    };
    return colors[type] || 'bg-gray-500';
};
const downloadFile = (file) => {
    const link = document.createElement('a');
    link.href = file.path;
    link.download = file.name;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const handleVideoError = () => {
    console.log('Video failed to load');
};
const handleImageError = (event) => {
    const img = event.target;
    img.src = '/placeholder-image.png'; // Add a placeholder image to your public folder
};
const openImageModal = (image) => {
    selectedImage.value = image;
    showImageModal.value = true;
};
onMounted(() => {
    const projectId = route.params.id;
    if (projectId && projectsData[projectId]) {
        project.value = projectsData[projectId];
        loading.value = false;
    }
    else {
        error.value = 'The requested project could not be found.';
        loading.value = false;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['prose']} */ ;
/** @type {__VLS_StyleScopedClasses['prose']} */ ;
/** @type {__VLS_StyleScopedClasses['prose']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "min-h-screen bg-gray-50" },
});
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex justify-center items-center min-h-screen" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" },
    });
}
else if (__VLS_ctx.error) {
    // @ts-ignore
    [error,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "container mx-auto px-6 py-20 text-center" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
        ...{ class: "text-4xl font-bold text-red-600 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-gray-600 mb-8" },
    });
    (__VLS_ctx.error);
    // @ts-ignore
    [error,];
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: "/",
        ...{ class: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" },
    }));
    const __VLS_2 = __VLS_1({
        to: "/",
        ...{ class: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_4 } = __VLS_3.slots;
    var __VLS_3;
}
else if (__VLS_ctx.project) {
    // @ts-ignore
    [project,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "bg-gradient-to-br from-blue-600 to-purple-700 text-white" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "container mx-auto px-6 py-12" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex justify-between items-start mb-6" },
    });
    const __VLS_5 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        to: "/",
        ...{ class: "flex items-center text-white hover:text-gray-200 transition-colors" },
    }));
    const __VLS_7 = __VLS_6({
        to: "/",
        ...{ class: "flex items-center text-white hover:text-gray-200 transition-colors" },
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
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex space-x-2" },
    });
    if (__VLS_ctx.project.isThesis) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold" },
        });
    }
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: (['px-3 py-1 rounded-full text-sm font-semibold',
                __VLS_ctx.project.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800']) },
    });
    // @ts-ignore
    [project,];
    (__VLS_ctx.project.status);
    // @ts-ignore
    [project,];
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
        ...{ class: "text-4xl md:text-5xl font-bold mb-4" },
    });
    (__VLS_ctx.project.title);
    // @ts-ignore
    [project,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-xl mb-6 opacity-90" },
    });
    (__VLS_ctx.project.description);
    // @ts-ignore
    [project,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex flex-wrap gap-2 mb-6" },
    });
    for (const [tech] of __VLS_getVForSourceType((__VLS_ctx.project.technologies))) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            key: (tech),
            ...{ class: "bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm" },
        });
        (tech);
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex space-x-4" },
    });
    if (__VLS_ctx.project.liveUrl) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            href: (__VLS_ctx.project.liveUrl),
            target: "_blank",
            ...{ class: "flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors" },
        });
        // @ts-ignore
        [project,];
        const __VLS_15 = {}.ExternalLink;
        /** @type {[typeof __VLS_components.ExternalLink, ]} */ ;
        // @ts-ignore
        ExternalLink;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
            ...{ class: "w-5 h-5" },
        }));
        const __VLS_17 = __VLS_16({
            ...{ class: "w-5 h-5" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    }
    if (__VLS_ctx.project.githubUrl) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            href: (__VLS_ctx.project.githubUrl),
            target: "_blank",
            ...{ class: "flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors" },
        });
        // @ts-ignore
        [project,];
        const __VLS_20 = {}.Github;
        /** @type {[typeof __VLS_components.Github, ]} */ ;
        // @ts-ignore
        Github;
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
            ...{ class: "w-5 h-5" },
        }));
        const __VLS_22 = __VLS_21({
            ...{ class: "w-5 h-5" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "container mx-auto px-6 py-12" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "grid lg:grid-cols-3 gap-8" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "lg:col-span-2 space-y-8" },
    });
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        ...{ class: "bg-white rounded-lg shadow-lg p-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
        ...{ class: "text-2xl font-bold text-gray-800 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "prose max-w-none" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-gray-600 leading-relaxed" },
    });
    (__VLS_ctx.project.fullDescription || __VLS_ctx.project.description);
    // @ts-ignore
    [project, project,];
    if (__VLS_ctx.project.objectives) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "mt-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
        });
        __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
            ...{ class: "space-y-2" },
        });
        for (const [objective] of __VLS_getVForSourceType((__VLS_ctx.project.objectives))) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
                key: (objective),
                ...{ class: "flex items-start" },
            });
            const __VLS_25 = {}.Target;
            /** @type {[typeof __VLS_components.Target, ]} */ ;
            // @ts-ignore
            Target;
            // @ts-ignore
            const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
                ...{ class: "w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" },
            }));
            const __VLS_27 = __VLS_26({
                ...{ class: "w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                ...{ class: "text-gray-600" },
            });
            (objective);
        }
    }
    if (__VLS_ctx.project.methodology) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "mt-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
        });
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "text-gray-600" },
        });
        (__VLS_ctx.project.methodology);
        // @ts-ignore
        [project,];
    }
    if (__VLS_ctx.project.results) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "mt-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
        });
        __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
            ...{ class: "space-y-2" },
        });
        for (const [result] of __VLS_getVForSourceType((__VLS_ctx.project.results))) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
                key: (result),
                ...{ class: "flex items-start" },
            });
            const __VLS_30 = {}.CheckCircle;
            /** @type {[typeof __VLS_components.CheckCircle, ]} */ ;
            // @ts-ignore
            CheckCircle;
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
                ...{ class: "w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" },
            }));
            const __VLS_32 = __VLS_31({
                ...{ class: "w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                ...{ class: "text-gray-600" },
            });
            (result);
        }
    }
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        ...{ class: "bg-white rounded-lg shadow-lg p-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
        ...{ class: "text-2xl font-bold text-gray-800 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "grid md:grid-cols-2 gap-4" },
    });
    for (const [feature] of __VLS_getVForSourceType((__VLS_ctx.project.features))) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (feature),
            ...{ class: "flex items-center p-3 bg-gray-50 rounded-lg" },
        });
        const __VLS_35 = {}.Star;
        /** @type {[typeof __VLS_components.Star, ]} */ ;
        // @ts-ignore
        Star;
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
            ...{ class: "w-5 h-5 text-yellow-500 mr-3" },
        }));
        const __VLS_37 = __VLS_36({
            ...{ class: "w-5 h-5 text-yellow-500 mr-3" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "text-gray-700" },
        });
        (feature);
    }
    if (__VLS_ctx.project.showMediaGallery && (__VLS_ctx.project.images || __VLS_ctx.project.videoDemo)) {
        // @ts-ignore
        [project, project, project,];
        __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
            ...{ class: "bg-white rounded-lg shadow-lg p-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
            ...{ class: "text-2xl font-bold text-gray-800 mb-4" },
        });
        if (__VLS_ctx.project.videoDemo) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "mb-6" },
            });
            __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
                ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
            });
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "aspect-video bg-gray-100 rounded-lg overflow-hidden" },
            });
            __VLS_asFunctionalElement(__VLS_elements.video, __VLS_elements.video)({
                ...{ onError: (__VLS_ctx.handleVideoError) },
                src: (__VLS_ctx.project.videoDemo),
                controls: true,
                ...{ class: "w-full h-full object-cover" },
            });
            // @ts-ignore
            [project, handleVideoError,];
        }
        if (__VLS_ctx.project.images && __VLS_ctx.project.images.length > 0) {
            // @ts-ignore
            [project, project,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "mb-6" },
            });
            __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
                ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
            });
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "grid md:grid-cols-2 gap-4" },
            });
            for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.project.images))) {
                // @ts-ignore
                [project,];
                __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                    ...{ onClick: (...[$event]) => {
                            if (!!(__VLS_ctx.loading))
                                return;
                            if (!!(__VLS_ctx.error))
                                return;
                            if (!(__VLS_ctx.project))
                                return;
                            if (!(__VLS_ctx.project.showMediaGallery && (__VLS_ctx.project.images || __VLS_ctx.project.videoDemo)))
                                return;
                            if (!(__VLS_ctx.project.images && __VLS_ctx.project.images.length > 0))
                                return;
                            __VLS_ctx.openImageModal(image);
                            // @ts-ignore
                            [openImageModal,];
                        } },
                    key: (index),
                    ...{ class: "aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" },
                });
                __VLS_asFunctionalElement(__VLS_elements.img, __VLS_elements.img)({
                    ...{ onError: (__VLS_ctx.handleImageError) },
                    src: (image),
                    alt: (`${__VLS_ctx.project.title} screenshot ${index + 1}`),
                    ...{ class: "w-full h-full object-cover" },
                });
                // @ts-ignore
                [project, handleImageError,];
            }
        }
    }
    if (__VLS_ctx.project.technicalDetails) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
            ...{ class: "bg-white rounded-lg shadow-lg p-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
            ...{ class: "text-2xl font-bold text-gray-800 mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "space-y-4" },
        });
        for (const [detail] of __VLS_getVForSourceType((__VLS_ctx.project.technicalDetails))) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                key: (detail.title),
                ...{ class: "border-l-4 border-blue-500 pl-4" },
            });
            __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
                ...{ class: "text-lg font-semibold text-gray-800" },
            });
            (detail.title);
            __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
                ...{ class: "text-gray-600" },
            });
            (detail.description);
        }
    }
    if (__VLS_ctx.project.challenges || __VLS_ctx.project.lessons) {
        // @ts-ignore
        [project, project,];
        __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
            ...{ class: "bg-white rounded-lg shadow-lg p-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
            ...{ class: "text-2xl font-bold text-gray-800 mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "space-y-6" },
        });
        if (__VLS_ctx.project.challenges) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
            __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
                ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
            });
            __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
                ...{ class: "space-y-2" },
            });
            for (const [challenge] of __VLS_getVForSourceType((__VLS_ctx.project.challenges))) {
                // @ts-ignore
                [project,];
                __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
                    key: (challenge),
                    ...{ class: "flex items-start" },
                });
                const __VLS_40 = {}.AlertTriangle;
                /** @type {[typeof __VLS_components.AlertTriangle, ]} */ ;
                // @ts-ignore
                AlertTriangle;
                // @ts-ignore
                const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
                    ...{ class: "w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" },
                }));
                const __VLS_42 = __VLS_41({
                    ...{ class: "w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" },
                }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                    ...{ class: "text-gray-600" },
                });
                (challenge);
            }
        }
        if (__VLS_ctx.project.lessons) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
            __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
                ...{ class: "text-lg font-semibold text-gray-800 mb-3" },
            });
            __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
                ...{ class: "space-y-2" },
            });
            for (const [lesson] of __VLS_getVForSourceType((__VLS_ctx.project.lessons))) {
                // @ts-ignore
                [project,];
                __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
                    key: (lesson),
                    ...{ class: "flex items-start" },
                });
                const __VLS_45 = {}.Lightbulb;
                /** @type {[typeof __VLS_components.Lightbulb, ]} */ ;
                // @ts-ignore
                Lightbulb;
                // @ts-ignore
                const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
                    ...{ class: "w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" },
                }));
                const __VLS_47 = __VLS_46({
                    ...{ class: "w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" },
                }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
                    ...{ class: "text-gray-600" },
                });
                (lesson);
            }
        }
    }
    if (!__VLS_ctx.project.showFiles && !__VLS_ctx.project.showMediaGallery) {
        // @ts-ignore
        [project, project,];
        __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
            ...{ class: "bg-white rounded-lg shadow-lg p-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
            ...{ class: "text-2xl font-bold text-gray-800 mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "text-center py-8" },
        });
        const __VLS_50 = {}.Github;
        /** @type {[typeof __VLS_components.Github, ]} */ ;
        // @ts-ignore
        Github;
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
            ...{ class: "w-16 h-16 text-gray-400 mx-auto mb-4" },
        }));
        const __VLS_52 = __VLS_51({
            ...{ class: "w-16 h-16 text-gray-400 mx-auto mb-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "text-gray-600 mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            href: "https://github.com/yourusername",
            target: "_blank",
            ...{ class: "inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors" },
        });
        const __VLS_55 = {}.Github;
        /** @type {[typeof __VLS_components.Github, ]} */ ;
        // @ts-ignore
        Github;
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
            ...{ class: "w-5 h-5" },
        }));
        const __VLS_57 = __VLS_56({
            ...{ class: "w-5 h-5" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
        const __VLS_60 = {}.ExternalLink;
        /** @type {[typeof __VLS_components.ExternalLink, ]} */ ;
        // @ts-ignore
        ExternalLink;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
            ...{ class: "w-4 h-4" },
        }));
        const __VLS_62 = __VLS_61({
            ...{ class: "w-4 h-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "space-y-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "bg-white rounded-lg shadow-lg p-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "text-xl font-bold text-gray-800 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "space-y-3" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex items-center" },
    });
    const __VLS_65 = {}.Calendar;
    /** @type {[typeof __VLS_components.Calendar, ]} */ ;
    // @ts-ignore
    Calendar;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
        ...{ class: "w-5 h-5 text-gray-500 mr-3" },
    }));
    const __VLS_67 = __VLS_66({
        ...{ class: "w-5 h-5 text-gray-500 mr-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "text-gray-600" },
    });
    (__VLS_ctx.project.duration || 'Duration not specified');
    // @ts-ignore
    [project,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex items-center" },
    });
    const __VLS_70 = {}.FolderOpen;
    /** @type {[typeof __VLS_components.FolderOpen, ]} */ ;
    // @ts-ignore
    FolderOpen;
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({
        ...{ class: "w-5 h-5 text-gray-500 mr-3" },
    }));
    const __VLS_72 = __VLS_71({
        ...{ class: "w-5 h-5 text-gray-500 mr-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_71));
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "text-gray-600" },
    });
    (__VLS_ctx.project.category);
    // @ts-ignore
    [project,];
    if (__VLS_ctx.project.team) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "flex items-center" },
        });
        const __VLS_75 = {}.Users;
        /** @type {[typeof __VLS_components.Users, ]} */ ;
        // @ts-ignore
        Users;
        // @ts-ignore
        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({
            ...{ class: "w-5 h-5 text-gray-500 mr-3" },
        }));
        const __VLS_77 = __VLS_76({
            ...{ class: "w-5 h-5 text-gray-500 mr-3" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_76));
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "text-gray-600" },
        });
        (__VLS_ctx.project.team);
        // @ts-ignore
        [project,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "bg-white rounded-lg shadow-lg p-6" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "text-xl font-bold text-gray-800 mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "space-y-2" },
    });
    for (const [tech] of __VLS_getVForSourceType((__VLS_ctx.project.technologies))) {
        // @ts-ignore
        [project,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            key: (tech),
            ...{ class: "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2" },
        });
        (tech);
    }
    if (__VLS_ctx.project.showFiles && __VLS_ctx.project.files.length > 0) {
        // @ts-ignore
        [project, project,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "bg-white rounded-lg shadow-lg p-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "text-xl font-bold text-gray-800 mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "space-y-3" },
        });
        for (const [file] of __VLS_getVForSourceType((__VLS_ctx.project.files))) {
            // @ts-ignore
            [project,];
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                key: (file.name),
                ...{ class: "flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors" },
            });
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: "flex items-center space-x-3" },
            });
            __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
                ...{ class: (['p-2 rounded', __VLS_ctx.getFileColor(file.type)]) },
            });
            // @ts-ignore
            [getFileColor,];
            const __VLS_80 = ((__VLS_ctx.getFileIcon(file.type)));
            // @ts-ignore
            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
                ...{ class: "w-5 h-5 text-white" },
            }));
            const __VLS_82 = __VLS_81({
                ...{ class: "w-5 h-5 text-white" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_81));
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
                        if (!!(__VLS_ctx.loading))
                            return;
                        if (!!(__VLS_ctx.error))
                            return;
                        if (!(__VLS_ctx.project))
                            return;
                        if (!(__VLS_ctx.project.showFiles && __VLS_ctx.project.files.length > 0))
                            return;
                        __VLS_ctx.downloadFile(file);
                        // @ts-ignore
                        [downloadFile,];
                    } },
                ...{ class: "text-blue-600 hover:text-blue-800 transition-colors" },
            });
            const __VLS_85 = {}.Download;
            /** @type {[typeof __VLS_components.Download, ]} */ ;
            // @ts-ignore
            Download;
            // @ts-ignore
            const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
                ...{ class: "w-5 h-5" },
            }));
            const __VLS_87 = __VLS_86({
                ...{ class: "w-5 h-5" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        }
    }
    if (__VLS_ctx.relatedProjects.length > 0) {
        // @ts-ignore
        [relatedProjects,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "bg-white rounded-lg shadow-lg p-6" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
            ...{ class: "text-xl font-bold text-gray-800 mb-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "space-y-3" },
        });
        for (const [relatedProject] of __VLS_getVForSourceType((__VLS_ctx.relatedProjects))) {
            // @ts-ignore
            [relatedProjects,];
            const __VLS_90 = {}.RouterLink;
            /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
            // @ts-ignore
            RouterLink;
            // @ts-ignore
            const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
                key: (relatedProject.id),
                to: (`/project/${relatedProject.id}`),
                ...{ class: "block p-3 border rounded-lg hover:bg-gray-50 transition-colors" },
            }));
            const __VLS_92 = __VLS_91({
                key: (relatedProject.id),
                to: (`/project/${relatedProject.id}`),
                ...{ class: "block p-3 border rounded-lg hover:bg-gray-50 transition-colors" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_91));
            const { default: __VLS_94 } = __VLS_93.slots;
            __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({
                ...{ class: "font-medium text-blue-600" },
            });
            (relatedProject.title);
            __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
                ...{ class: "text-sm text-gray-500" },
            });
            (relatedProject.category);
            var __VLS_93;
        }
    }
    if (__VLS_ctx.showImageModal) {
        // @ts-ignore
        [showImageModal,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.loading))
                        return;
                    if (!!(__VLS_ctx.error))
                        return;
                    if (!(__VLS_ctx.project))
                        return;
                    if (!(__VLS_ctx.showImageModal))
                        return;
                    __VLS_ctx.showImageModal = false;
                    // @ts-ignore
                    [showImageModal,];
                } },
            ...{ class: "fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "max-w-4xl max-h-full" },
        });
        __VLS_asFunctionalElement(__VLS_elements.img, __VLS_elements.img)({
            src: (__VLS_ctx.selectedImage),
            alt: (__VLS_ctx.project.title),
            ...{ class: "max-w-full max-h-full object-contain rounded-lg" },
        });
        // @ts-ignore
        [project, selectedImage,];
    }
}
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-32']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-br']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['to-purple-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-purple-800']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-90']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-20']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['prose']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-video']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-video']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-l-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-orange-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-75']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-contain']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ArrowLeft: ArrowLeft,
            ExternalLink: ExternalLink,
            Github: Github,
            Target: Target,
            CheckCircle: CheckCircle,
            Star: Star,
            Calendar: Calendar,
            FolderOpen: FolderOpen,
            Users: Users,
            Download: Download,
            AlertTriangle: AlertTriangle,
            Lightbulb: Lightbulb,
            loading: loading,
            error: error,
            project: project,
            showImageModal: showImageModal,
            selectedImage: selectedImage,
            relatedProjects: relatedProjects,
            getFileIcon: getFileIcon,
            getFileColor: getFileColor,
            downloadFile: downloadFile,
            handleVideoError: handleVideoError,
            handleImageError: handleImageError,
            openImageModal: openImageModal,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
