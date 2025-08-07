<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white shadow-lg z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <router-link to="/" class="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            {{ portfolioData.personal.name }}
          </router-link>
          <router-link to="/" class="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft class="w-5 h-5 mr-2" />
            Back to Home
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">
          Explore my portfolio of software development, machine learning, and data science projects
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-6 bg-white border-b">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="activeFilter = 'all'"
            :class="['px-6 py-2 rounded-full transition-colors',
                    activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
            All Projects ({{ allProjects.length }})
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeFilter = category"
            :class="['px-6 py-2 rounded-full transition-colors',
                    activeFilter === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
            {{ category }} ({{ getProjectsByCategory(category).length }})
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            
            <!-- Project Image/Thumbnail -->
            <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
              <img 
                v-if="project.thumbnail" 
                :src="project.thumbnail" 
                :alt="project.title"
                class="w-full h-full object-cover"
              />
              <div v-else class="flex items-center justify-center h-full">
                <component :is="getCategoryIcon(project.category)" class="w-16 h-16 text-white opacity-50" />
              </div>
              
              <!-- Status Badge -->
              <div class="absolute top-4 right-4">
                <span v-if="project.isThesis" 
                      class="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Thesis
                </span>
                <span v-else
                      :class="['px-2 py-1 rounded-full text-xs font-semibold',
                              project.status === 'Completed' ? 'bg-green-500 text-white' : 
                              project.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-white']">
                  {{ project.status }}
                </span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
              
              <!-- Technologies -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech"
                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 3" 
                        class="text-xs text-gray-500">
                    +{{ project.technologies.length - 3 }} more
                  </span>
                </div>
              </div>

              <!-- Key Features Preview -->
              <div class="mb-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li 
                    v-for="feature in project.features.slice(0, 2)" 
                    :key="feature"
                    class="flex items-center">
                    <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {{ feature }}
                  </li>
                  <li v-if="project.features.length > 2" class="text-xs text-blue-600">
                    +{{ project.features.length - 2 }} more features
                  </li>
                </ul>
              </div>

              <!-- Available Files - Only show for featured projects with files -->
              <div v-if="project.showFiles && project.files.length > 0" class="mb-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">Available Files:</h4>
                <div class="flex flex-wrap gap-1">
                  <span 
                    v-for="file in project.files.slice(0, 2)" 
                    :key="file.name"
                    class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded flex items-center">
                    <component :is="getFileIcon(file.type)" class="w-3 h-3 mr-1" />
                    {{ file.name }}
                  </span>
                  <span v-if="project.files.length > 2" 
                        class="text-xs text-blue-600">
                    +{{ project.files.length - 2 }} more
                  </span>
                </div>
              </div>

              <!-- GitHub/Figma Reference - For non-featured projects -->
              <div v-else-if="!project.showFiles && project.githubUrl" class="mb-4">
                <div class="flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded">
                  <Github v-if="!project.githubUrl.includes('figma')" class="w-3 h-3 mr-2" />
                  <Palette v-if="project.githubUrl.includes('figma')" class="w-3 h-3 mr-2" />
                  <span v-if="!project.githubUrl.includes('figma')">Source code available on GitHub</span>
                  <span v-if="project.githubUrl.includes('figma')">Design prototype available on Figma</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex space-x-2">
                <router-link 
                  :to="`/project/${project.id}`" 
                  class="flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  <Eye class="w-4 h-4" />
                  <span>View Details</span>
                </router-link>
                <a 
                  v-if="project.liveUrl" 
                  :href="project.liveUrl" 
                  target="_blank"
                  class="flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                  <ExternalLink class="w-4 h-4" />
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="flex items-center justify-center bg-gray-800 text-white px-3 py-2 rounded text-sm hover:bg-gray-900 transition-colors">
                  <Github v-if="!project.githubUrl.includes('figma')" class="w-4 h-4" />
                  <Palette v-if="project.githubUrl.includes('figma')" class="w-4 h-4" />
                </a>
                <button 
                  v-if="project.showFiles && project.files.length > 0"
                  @click="showDownloadModal(project)"
                  class="flex items-center justify-center bg-indigo-600 text-white px-3 py-2 rounded text-sm hover:bg-indigo-700 transition-colors">
                  <Download class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <div class="text-gray-400 mb-4">
            <FolderOpen class="w-16 h-16 mx-auto mb-4" />
            <h3 class="text-xl font-semibold">No projects found</h3>
            <p>No projects match the selected filter.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-md w-full">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-800">Download Files</h3>
            <button @click="showModal = false" class="text-gray-400 hover:text-gray-600">
              <X class="w-6 h-6" />
            </button>
          </div>
          
          <div class="space-y-3">
            <div 
              v-for="file in selectedProject?.files" 
              :key="file.name"
              class="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <div class="flex items-center space-x-3">
                <div :class="['p-2 rounded', getFileColor(file.type)]">
                  <component :is="getFileIcon(file.type)" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <p class="font-medium text-gray-800">{{ file.name }}</p>
                  <p class="text-sm text-gray-500">{{ file.size }}</p>
                </div>
              </div>
              <button 
                @click="downloadFile(file)" 
                class="text-blue-600 hover:text-blue-800">
                <Download class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  ArrowLeft, Eye, ExternalLink, Download, FolderOpen, X,
  Code, Database, FileText, Image, Brain, BarChart3, Globe, Play, Github,
  Shield, Users2, Palette
} from 'lucide-vue-next'

// Define the project type
interface ProjectFile {
  name: string
  type: string
  size: string
  path: string
}

interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  status: string
  isThesis: boolean
  thumbnail?: string | null
  features: string[]
  files: ProjectFile[]
  liveUrl?: string | null
  showFiles: boolean
  githubUrl?: string | null
}

const activeFilter = ref('all')
const showModal = ref(false)
const selectedProject = ref<Project | null>(null)

// Your portfolio data
const portfolioData = {
  personal: {
    name: "Maria Sheena Shield P. Emocling"
  }
}

// Updated projects data with the requested changes
const allProjects: Project[] = [
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
]

// Computed properties and methods
const categories = computed(() => {
  const cats = [...new Set(allProjects.map(p => p.category))]
  return cats
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return allProjects
  }
  return allProjects.filter(project => project.category === activeFilter.value)
})

const getProjectsByCategory = (category: string) => {
  return allProjects.filter(project => project.category === category)
}

const getCategoryIcon = (category: string) => {
  const iconMap: { [key: string]: any } = {
    'Web Development': Globe,
    'AI/Machine Learning': Brain,
    'Data Science': BarChart3,
    'Software Development': Code,
    'Information Security': Shield,
    'Database Systems': Database,
    'UI/UX Design': Palette
  }
  return iconMap[category] || Code
}

const getFileIcon = (type: string) => {
  const iconMap: { [key: string]: any } = {
    'pdf': FileText,
    'excel': BarChart3,
    'source': Code,
    'image': Image,
    'video': Play
  }
  return iconMap[type] || FileText
}

const getFileColor = (type: string) => {
  const colorMap: { [key: string]: string } = {
    'pdf': 'bg-red-500',
    'excel': 'bg-green-500',
    'source': 'bg-blue-500',
    'image': 'bg-purple-500',
    'video': 'bg-yellow-500'
  }
  return colorMap[type] || 'bg-gray-500'
}

const showDownloadModal = (project: Project) => {
  selectedProject.value = project
  showModal.value = true
}

const downloadFile = (file: ProjectFile) => {
  // Implementation for file download
  const link = document.createElement('a')
  link.href = file.path
  link.download = file.name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>