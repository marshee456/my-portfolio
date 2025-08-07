export const projects = [
    {
        id: 'financial-stability',
        title: 'Financial Stability Mapping',
        description: 'Thesis project analyzing financial stability patterns using ML and data science',
        longDescription: 'A comprehensive research project that maps financial stability indicators across different demographics using advanced machine learning algorithms and data visualization techniques.',
        category: 'Data Science',
        technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib'],
        features: [
            'Data preprocessing and cleaning',
            'ML model development',
            'Statistical analysis',
            'Interactive visualizations'
        ],
        startDate: '2024-01',
        endDate: '2024-12',
        status: 'completed',
        isThesis: true,
        advisor: 'Dr. [Advisor Name]',
        keywords: ['Financial Analysis', 'Machine Learning', 'Data Visualization'],
        files: [
            {
                name: 'Thesis Document',
                type: 'pdf',
                url: '/files/documents/financial-stability-thesis.pdf',
                description: 'Complete thesis document with methodology and findings'
            },
            {
                name: 'Source Code',
                type: 'source',
                url: '/files/projects/financial-stability/source-code.zip',
                description: 'Python scripts and Jupyter notebooks'
            },
            {
                name: 'Dataset',
                type: 'excel',
                url: '/files/projects/financial-stability/dataset.xlsx',
                description: 'Processed financial data used in analysis'
            }
        ],
        screenshots: [
            '/files/images/projects/financial-stability-1.png',
            '/files/images/projects/financial-stability-2.png'
        ],
        imageUrl: '/files/images/projects/financial-stability-cover.png'
    },
    {
        id: 'rice-disease',
        title: 'Rice Leaf Disease Diagnosis',
        description: 'AI-powered application for diagnosing rice leaf diseases using computer vision',
        longDescription: 'An intelligent system that uses convolutional neural networks to identify and classify rice leaf diseases from images, helping farmers make informed decisions about crop treatment.',
        category: 'AI/Machine Learning',
        technologies: ['Python', 'Keras', 'TensorFlow', 'Streamlit', 'OpenCV'],
        features: [
            'Image classification using CNN',
            'Real-time disease detection',
            'Web-based interface',
            'Disease treatment recommendations'
        ],
        startDate: '2023-08',
        endDate: '2024-01',
        status: 'completed',
        liveUrl: 'https://shieldrice.streamlit.app/',
        files: [
            {
                name: 'Source Code',
                type: 'source',
                url: '/files/projects/rice-disease/rice-disease-app.zip',
                description: 'Complete application source code'
            },
            {
                name: 'Model Weights',
                type: 'document',
                url: '/files/projects/rice-disease/model-weights.h5',
                description: 'Trained CNN model weights'
            },
            {
                name: 'Dataset Info',
                type: 'excel',
                url: '/files/projects/rice-disease/dataset-analysis.xlsx',
                description: 'Dataset statistics and analysis'
            }
        ],
        screenshots: [
            '/files/images/projects/rice-disease-1.png',
            '/files/images/projects/rice-disease-2.png'
        ],
        imageUrl: '/files/images/projects/rice-disease-cover.png'
    }
];
export const experience = [
    {
        id: 'pma-intern',
        title: 'IT/Computer Science Intern',
        company: 'Philippine Military Academy',
        location: 'Baguio City, Philippines',
        startDate: 'June 2024',
        endDate: 'July 2024',
        type: 'internship',
        responsibilities: [
            'Developed and maintained PMA enrollment system using Laravel and React',
            'Implemented database management and API integration',
            'Performed network monitoring and maintenance tasks',
            'Ensured information security and data protection protocols'
        ],
        technologies: ['Laravel', 'React', 'PHP', 'MySQL', 'Network Administration'],
        achievements: [
            'Successfully deployed enrollment system used by 500+ cadets',
            'Improved system performance by 30%',
            'Implemented security measures that passed military standards'
        ]
    }
];
