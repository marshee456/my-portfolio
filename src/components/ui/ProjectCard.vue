<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
      <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" 
           class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 class="text-white text-xl font-bold text-center px-4">{{ project.title }}</h3>
      </div>
      <div class="absolute top-4 right-4">
        <span v-if="project.isThesis" class="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
          Thesis
        </span>
        <span :class="statusColors[project.status]" class="text-white text-xs px-2 py-1 rounded ml-1">
          {{ project.status }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      
      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in project.technologies.slice(0, 4)" :key="tech" 
              class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 4" class="text-gray-500 text-xs">
          +{{ project.technologies.length - 4 }} more
        </span>
      </div>
      
      <!-- File Count -->
      <div class="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z" />
          </svg>
          {{ project.files.length }} files
        </span>
        <span v-if="project.screenshots.length" class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
          </svg>
          {{ project.screenshots.length }} images
        </span>
      </div>
      
      <!-- Actions -->
      <div class="flex gap-2">
        <router-link :to="`/project/${project.id}`" 
                     class="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          View Details
        </router-link>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
           class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/portfolio';

defineProps<{
  project: Project;
}>();

const statusColors = {
  completed: 'bg-green-500',
  'in-progress': 'bg-blue-500',
  planned: 'bg-gray-500'
};
</script>