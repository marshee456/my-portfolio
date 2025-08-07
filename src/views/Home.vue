<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white shadow-lg z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-gray-800">{{ portfolioData.personal.name }}</div>
          <div class="hidden md:flex space-x-6">
            <a v-for="section in ['hero', 'about', 'skills', 'projects', 'experience']" 
               :key="section"
               :href="`#${section}`"
               :class="['text-gray-600 hover:text-blue-600 transition-colors capitalize', 
                       activeSection === section ? 'text-blue-600 font-semibold' : '']">
              {{ section }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-20 pb-16 bg-gradient-to-br from-blue-600 to-purple-700">
      <div class="container mx-auto px-6 text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          {{ portfolioData.personal.name }}
        </h1>
        <p class="text-xl md:text-2xl mb-6 opacity-90">
          {{ portfolioData.personal.title }}
        </p>
        <p class="text-lg mb-8 max-w-3xl mx-auto opacity-80">
          {{ portfolioData.personal.summary }}
        </p>
        <div class="flex justify-center space-x-4 mb-8">
          <a :href="`mailto:${portfolioData.personal.email}`" 
             class="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <Mail class="w-5 h-5" />
            <span>Contact Me</span>
          </a>
          <router-link to="/projects" 
           class="flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            <ExternalLink class="w-5 h-5" />
            <span>View Projects</span>
          </router-link>
        </div>
        <div class="flex justify-center space-x-6 text-sm opacity-80">
          <div class="flex items-center space-x-2">
            <Mail class="w-4 h-4" />
            <span>{{ portfolioData.personal.email }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Phone class="w-4 h-4" />
            <span>{{ portfolioData.personal.phone }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Education</h3>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="text-xl font-semibold text-blue-600 mb-2">
                {{ portfolioData.education.degree }}
              </h4>
              <p class="text-gray-600 mb-2">{{ portfolioData.education.institution }}</p>
              <p class="text-gray-500 mb-4">{{ portfolioData.education.period }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="honor in portfolioData.education.honors" 
                      :key="honor"
                      class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {{ honor }}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Certifications</h3>
            <div class="space-y-4">
              <div v-for="cert in portfolioData.certifications" 
                   :key="cert.name"
                   class="bg-gray-50 p-4 rounded-lg">
                <div class="flex items-start space-x-3">
                  <Award class="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 class="font-semibold text-gray-800">{{ cert.name }}</h4>
                    <p class="text-gray-600 text-sm">{{ cert.issuer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Technologies</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="skillGroup in portfolioData.skills" 
               :key="skillGroup.category"
               class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <div :class="['w-4 h-4 rounded-full mr-3', skillGroup.color]"></div>
              <h3 class="text-xl font-semibold text-gray-800">{{ skillGroup.category }}</h3>
            </div>
            <div class="space-y-2">
              <span v-for="skill in skillGroup.items" 
                    :key="skill"
                    class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="project in portfolioData.projects" 
               :key="project.id"
               class="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-800">{{ project.title }}</h3>
                <span v-if="project.isThesis" 
                      class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Thesis
                </span>
                <span v-else
                      :class="['px-2 py-1 rounded-full text-xs font-semibold',
                              project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']">
                  {{ project.status }}
                </span>
              </div>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              
              <!-- Technologies -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" 
                        :key="tech"
                        class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Features -->
              <div class="mb-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="feature in project.features" 
                      :key="feature"
                      class="flex items-center">
                    <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Files Preview - Only for featured projects with files -->
              <div v-if="project.showFiles && project.files.length > 0" class="mb-4">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">Available Files:</h4>
                <div class="flex flex-wrap gap-1">
                  <span v-for="file in project.files.slice(0, 3)" 
                        :key="file.name"
                        class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {{ file.name }}
                  </span>
                  <span v-if="project.files.length > 3" 
                        class="text-xs text-blue-600">
                    +{{ project.files.length - 3 }} more
                  </span>
                </div>
              </div>

              <!-- GitHub Reference - For non-featured projects -->
              <div v-else-if="!project.showFiles" class="mb-4">
                <div class="flex items-center text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded">
                  <Github class="w-3 h-3 mr-2" />
                  <span>Source code on GitHub</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex space-x-2">
                <router-link :to="`/project/${project.id}`" 
                           class="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  <ExternalLink class="w-4 h-4" />
                  <span>View Details</span>
                </router-link>
                <a v-if="project.liveUrl" 
                   :href="project.liveUrl" 
                   target="_blank"
                   class="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                  <ExternalLink class="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- View All Projects Button -->
        <div class="text-center mt-12">
          <router-link to="/projects" 
                     class="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            <span>View All Projects</span>
            <ExternalLink class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
        <div class="max-w-4xl mx-auto">
          <div v-for="exp in portfolioData.experience" 
               :key="exp.title"
               class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ exp.title }}</h3>
                <p class="text-lg text-blue-600 font-semibold">{{ exp.company }}</p>
                <p class="text-gray-600">{{ exp.period }}</p>
              </div>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {{ exp.type }}
              </span>
            </div>
            
            <div class="mb-4">
              <h4 class="text-lg font-semibold text-gray-700 mb-2">Responsibilities:</h4>
              <ul class="space-y-2">
                <li v-for="responsibility in exp.responsibilities" 
                    :key="responsibility"
                    class="flex items-start">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="text-gray-600">{{ responsibility }}</span>
                </li>
              </ul>
            </div>

            <div class="mb-4">
              <h4 class="text-lg font-semibold text-gray-700 mb-2">Technologies Used:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in exp.technologies" 
                      :key="tech"
                      class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h4>
              <ul class="space-y-1">
                <li v-for="achievement in exp.achievements" 
                    :key="achievement"
                    class="flex items-center">
                  <Award class="w-4 h-4 text-yellow-500 mr-2" />
                  <span class="text-gray-600">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-blue-600 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p class="text-xl mb-8 opacity-90">
          Ready to bring your next project to life? Let's connect!
        </p>
        <div class="flex justify-center space-x-4">
          <a :href="`mailto:${portfolioData.personal.email}`" 
             class="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            <Mail class="w-5 h-5" />
            <span>Send Email</span>
          </a>
          <a :href="`tel:${portfolioData.personal.phone}`" 
             class="flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            <Phone class="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Download, ExternalLink, Github, Mail, Phone, MapPin, 
  Calendar, Award, Code, Database, FileText, Image 
} from 'lucide-vue-next'

const activeSection = ref('hero')

const portfolioData = {
  personal: {
    name: "Maria Sheena Shield P. Emocling",
    title: "Computer Science Graduate",
    email: "sheimariemocling493@gmail.com",
    phone: "09612612753",
    summary: "As an aspiring Computer Science professional, I aim to apply my undergraduate knowledge and skills in the IT and Computer Science sectors. I am driven to further develop my expertise through internships, academic projects, and specialized skills, seeking a dynamic company where I can contribute, grow, and collaborate effectively."
  },
  
  skills: [
    { category: "Programming", items: ["JavaScript", "Python", "Java", "PHP", "SQL", "HTML/CSS"], color: "bg-blue-500" },
    { category: "Frameworks", items: ["Node.js", "Laravel", "React", "Vue.js", "TensorFlow", "Keras"], color: "bg-green-500" },
    { category: "Tools", items: ["Git", "CI/CD", "Docker", "MySQL", "PostgreSQL"], color: "bg-purple-500" },
    { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Science"], color: "bg-orange-500" }
  ],
  
  experience: [
    {
      title: "Intern",
      company: "Philippine Military Academy",
      period: "June - July 2024",
      type: "Internship",
      responsibilities: [
        "Developed PMA enrollment system using Laravel, React, and PHP",
        "Implemented database management and API integration",
        "Performed network monitoring and maintenance",
        "Ensured information security and data protection"
      ],
      technologies: ["Laravel", "React", "PHP", "MySQL"],
      achievements: ["Deployed system for 500+ cadets", "Improved performance by 30%"]
    }
  ],
  
  // Featured projects - only the first 4 main projects
  projects: [
    {
      id: 'wealth-index-mapping',
      title: 'Wealth Index Mapping using Predictive Models',
      description: 'Thesis project analyzing wealth index patterns using ML and predictive modeling techniques.',
      category: 'Data Science',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      status: 'Completed',
      isThesis: true,
      showFiles: true,
      files: [
        { name: 'Thesis Document', type: 'pdf', size: '2.5 MB' },
        { name: 'Complete Project Files', type: 'source', size: '25 MB' }
      ],
      features: ['Data preprocessing', 'Predictive modeling', 'Statistical analysis', 'Interactive visualizations']
    },
    {
      id: 'rice-disease',
      title: 'Rice Leaf Disease Diagnosis',
      description: 'AI-powered application for diagnosing rice leaf diseases using computer vision and CNN.',
      category: 'AI/Machine Learning',
      technologies: ['Python', 'Keras', 'TensorFlow', 'Streamlit', 'OpenCV'],
      status: 'Completed',
      isThesis: false,
      showFiles: true,
      liveUrl: 'https://shieldrice.streamlit.app/',
      files: [
        { name: 'Dataset', type: 'excel', size: '45 MB' }
      ],
      features: ['CNN-based classification', 'Real-time detection', 'Web interface', 'Treatment recommendations']
    },
    {
      id: 'sentiment-analysis',
      title: 'Social Media Sentiment Analysis',
      description: 'NLP project for extracting and analyzing sentiments from social media data.',
      category: 'Data Science',
      technologies: ['Python', 'NLP', 'Pandas', 'Excel'],
      status: 'Completed',
      isThesis: false,
      showFiles: true,
      files: [
        { name: 'Analysis Report', type: 'pdf', size: '1.8 MB' },
        { name: 'Dataset', type: 'excel', size: '12 MB' }
      ],
      features: ['Sentiment extraction', 'Association rule mining', 'Predictive analytics']
    },
     {
      id: 'chat-word-game',
      title: 'Chat and Word Game Application',
      description: 'A desktop application supporting multiplayer chat and word games built using distributed systems concepts.',
      category: 'Software Development',
      technologies: ['Java', 'XML', 'JSON', 'RMI Client-Server', 'CORBA', 'DOM'],
      status: 'Completed',
      isThesis: false,
      showFiles: false,
      files: [],
      features: ['Multiplayer chat', 'Word puzzle game', 'Uses CORBA and RMI', 'Real-time synchronization']
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Saint Louis University",
    period: "2021 - 2025",
    honors: ["Dean's List (1st yr to 4th yr)", "Cum Laude", "Batch 2025"]
  },
  
  certifications: [
    { name: "Google Data Analytics Professional Certificate", issuer: "Coursera" },
    { name: "Advanced Data Analytics Professional Certificate", issuer: "Coursera" },
    { name: "CHED - LAKAS AI/NLP Training", issuer: "CHED" }
  ]
}

const getFileIcon = (type: string) => {
  const icons = {
    pdf: FileText,
    source: Code,
    excel: Database,
    document: FileText,
    image: Image
  }
  return icons[type as keyof typeof icons] || FileText
}

const getFileColor = (type: string) => {
  const colors = {
    pdf: 'bg-red-500',
    source: 'bg-blue-500',
    excel: 'bg-green-500',
    document: 'bg-purple-500',
    image: 'bg-orange-500'
  }
  return colors[type as keyof typeof colors] || 'bg-gray-500'
}

const handleScroll = () => {
  const sections = ['hero', 'about', 'skills', 'projects', 'experience']
  const scrollPosition = window.scrollY + 100
  
  sections.forEach(section => {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>