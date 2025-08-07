<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center min-h-screen">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-6 py-20 text-center">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Project Not Found</h1>
      <p class="text-gray-600 mb-8">{{ error }}</p>
      <router-link to="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Back to Home
      </router-link>
    </div>

    <!-- Project Details -->
    <div v-else-if="project">
      <!-- Header -->
      <div class="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div class="container mx-auto px-6 py-12">
          <div class="flex justify-between items-start mb-6">
            <router-link to="/" class="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft class="w-5 h-5 mr-2" />
              Back to Portfolio
            </router-link>
            <div class="flex space-x-2">
              <span v-if="project.isThesis" 
                    class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                Thesis Project
              </span>
              <span :class="['px-3 py-1 rounded-full text-sm font-semibold',
                            project.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800']">
                {{ project.status }}
              </span>
            </div>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-xl mb-6 opacity-90">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tech in project.technologies" 
                  :key="tech"
                  class="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
              {{ tech }}
            </span>
          </div>

          <div class="flex space-x-4">
            <a v-if="project.liveUrl" 
               :href="project.liveUrl" 
               target="_blank"
               class="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <ExternalLink class="w-5 h-5" />
              <span>Live Demo</span>
            </a>
            <a v-if="project.githubUrl" 
               :href="project.githubUrl" 
               target="_blank"
               class="flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              <Github class="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-6 py-12">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Project Overview -->
            <section class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <div class="prose max-w-none">
                <p class="text-gray-600 leading-relaxed">{{ project.fullDescription || project.description }}</p>
                
                <div v-if="project.objectives" class="mt-6">
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Objectives</h3>
                  <ul class="space-y-2">
                    <li v-for="objective in project.objectives" 
                        :key="objective"
                        class="flex items-start">
                      <Target class="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span class="text-gray-600">{{ objective }}</span>
                    </li>
                  </ul>
                </div>

                <div v-if="project.methodology" class="mt-6">
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Methodology</h3>
                  <p class="text-gray-600">{{ project.methodology }}</p>
                </div>

                <div v-if="project.results" class="mt-6">
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Results & Findings</h3>
                  <ul class="space-y-2">
                    <li v-for="result in project.results" 
                        :key="result"
                        class="flex items-start">
                      <CheckCircle class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span class="text-gray-600">{{ result }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Key Features -->
            <section class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="feature in project.features" 
                     :key="feature"
                     class="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Star class="w-5 h-5 text-yellow-500 mr-3" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </section>

            <!-- Media Gallery Section - Only for featured projects -->
            <section v-if="project.showMediaGallery && (project.images || project.videoDemo)" class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Media Gallery</h2>
              
              <!-- Video Demo -->
              <div v-if="project.videoDemo" class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">Demo Video</h3>
                <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <video 
                    :src="project.videoDemo" 
                    controls 
                    class="w-full h-full object-cover"
                    @error="handleVideoError">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <!-- Screenshots -->
              <div v-if="project.images && project.images.length > 0" class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">Screenshots</h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div v-for="(image, index) in project.images" 
                       :key="index"
                       class="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                       @click="openImageModal(image)">
                    <img 
                      :src="image" 
                      :alt="`${project.title} screenshot ${index + 1}`"
                      class="w-full h-full object-cover"
                      @error="handleImageError">
                  </div>
                </div>
              </div>
            </section>

            <!-- Technical Implementation -->
            <section v-if="project.technicalDetails" class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Technical Implementation</h2>
              <div class="space-y-4">
                <div v-for="detail in project.technicalDetails" 
                     :key="detail.title"
                     class="border-l-4 border-blue-500 pl-4">
                  <h3 class="text-lg font-semibold text-gray-800">{{ detail.title }}</h3>
                  <p class="text-gray-600">{{ detail.description }}</p>
                </div>
              </div>
            </section>

            <!-- Additional Information -->
            <section v-if="project.challenges || project.lessons" class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Challenges & Learnings</h2>
              <div class="space-y-6">
                <div v-if="project.challenges">
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Challenges Faced</h3>
                  <ul class="space-y-2">
                    <li v-for="challenge in project.challenges" 
                        :key="challenge"
                        class="flex items-start">
                      <AlertTriangle class="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span class="text-gray-600">{{ challenge }}</span>
                    </li>
                  </ul>
                </div>
                <div v-if="project.lessons">
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Key Learnings</h3>
                  <ul class="space-y-2">
                    <li v-for="lesson in project.lessons" 
                        :key="lesson"
                        class="flex items-start">
                      <Lightbulb class="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span class="text-gray-600">{{ lesson }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- GitHub Link Section - Only for non-featured projects -->
            <section v-if="!project.showFiles && !project.showMediaGallery" class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Source Code & Documentation</h2>
              <div class="text-center py-8">
                <Github class="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p class="text-gray-600 mb-4">
                  Complete source code, documentation, and additional project files are available on GitHub.
                </p>
                <a href="https://github.com/yourusername" 
                   target="_blank"
                   class="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                  <Github class="w-5 h-5" />
                  <span>View on GitHub</span>
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Project Info -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Project Information</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <Calendar class="w-5 h-5 text-gray-500 mr-3" />
                  <span class="text-gray-600">{{ project.duration || 'Duration not specified' }}</span>
                </div>
                <div class="flex items-center">
                  <FolderOpen class="w-5 h-5 text-gray-500 mr-3" />
                  <span class="text-gray-600">{{ project.category }}</span>
                </div>
                <div v-if="project.team" class="flex items-center">
                  <Users class="w-5 h-5 text-gray-500 mr-3" />
                  <span class="text-gray-600">{{ project.team }}</span>
                </div>
              </div>
            </div>

            <!-- Technologies -->
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
              <div class="space-y-2">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Download Files - Only for featured projects -->
            <div v-if="project.showFiles && project.files.length > 0" class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Project Files</h3>
              <div class="space-y-3">
                <div v-for="file in project.files" 
                     :key="file.name"
                     class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="flex items-center space-x-3">
                    <div :class="['p-2 rounded', getFileColor(file.type)]">
                      <component :is="getFileIcon(file.type)" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-800">{{ file.name }}</p>
                      <p class="text-sm text-gray-500">{{ file.size }}</p>
                    </div>
                  </div>
                  <button @click="downloadFile(file)" 
                          class="text-blue-600 hover:text-blue-800 transition-colors">
                    <Download class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Related Projects -->
            <div v-if="relatedProjects.length > 0" class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Related Projects</h3>
              <div class="space-y-3">
                <router-link v-for="relatedProject in relatedProjects" 
                            :key="relatedProject.id"
                            :to="`/project/${relatedProject.id}`"
                            class="block p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h4 class="font-medium text-blue-600">{{ relatedProject.title }}</h4>
                  <p class="text-sm text-gray-500">{{ relatedProject.category }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Modal -->
      <div v-if="showImageModal" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" @click="showImageModal = false">
        <div class="max-w-4xl max-h-full">
          <img :src="selectedImage" :alt="project.title" class="max-w-full max-h-full object-contain rounded-lg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ArrowLeft, ExternalLink, Github, Target, CheckCircle, Star, 
  Calendar, FolderOpen, Users, Download, Code, Database, 
  FileText, Image as ImageIcon, AlertTriangle, Lightbulb, Play
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// Define interfaces
interface ProjectFile {
  name: string
  type: string
  size: string
  path: string
}

interface TechnicalDetail {
  title: string
  description: string
}

interface ProjectData {
  id: string
  title: string
  description: string
  fullDescription?: string
  category: string
  technologies: string[]
  status: string
  isThesis: boolean
  duration?: string
  team?: string
  objectives?: string[]
  challenges?: string[]
  lessons?: string[]
  methodology?: string
  results?: string[]
  features: string[]
  files: ProjectFile[]
  technicalDetails?: TechnicalDetail[]
  images?: string[]
  videoDemo?: string
  liveUrl?: string
  githubUrl?: string
  showFiles: boolean
  showMediaGallery: boolean
}

const loading = ref(true)
const error = ref<string | null>(null)
const project = ref<ProjectData | null>(null)
const showImageModal = ref(false)
const selectedImage = ref('')

// Updated projects data with the requested changes
const projectsData: Record<string, ProjectData> = {
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
    githubUrl: 'https://github.com/Sheena-sh/projects-portfolio.git',
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
}

const relatedProjects = computed(() => {
  if (!project.value) return []
  
  return Object.values(projectsData)
    .filter(p => p.id !== project.value!.id && p.category === project.value!.category)
    .slice(0, 2)
})

const getFileIcon = (type: string) => {
  const icons = {
    pdf: FileText,
    source: Code,
    excel: Database,
    document: FileText,
    image: ImageIcon,
    video: Play
  }
  return icons[type as keyof typeof icons] || FileText
}

const getFileColor = (type: string) => {
  const colors = {
    pdf: 'bg-red-500',
    source: 'bg-blue-500',
    excel: 'bg-green-500',
    document: 'bg-purple-500',
    image: 'bg-orange-500',
    video: 'bg-pink-500'
  }
  return colors[type as keyof typeof colors] || 'bg-gray-500'
}

const downloadFile = (file: ProjectFile) => {
  const link = document.createElement('a')
  link.href = file.path
  link.download = file.name
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const handleVideoError = () => {
  console.log('Video failed to load')
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/placeholder-image.png' // Add a placeholder image to your public folder
}

const openImageModal = (image: string) => {
  selectedImage.value = image
  showImageModal.value = true
}

onMounted(() => {
  const projectId = route.params.id as string
  
  if (projectId && projectsData[projectId]) {
    project.value = projectsData[projectId]
    loading.value = false
  } else {
    error.value = 'The requested project could not be found.'
    loading.value = false
  }
})
</script>

<style scoped>
.prose {
  @apply text-gray-600 leading-relaxed;
}

.prose h3 {
  @apply text-lg font-semibold text-gray-800 mb-3;
}

.prose ul {
  @apply space-y-2;
}

.prose li {
  @apply flex items-start;
}
</style>