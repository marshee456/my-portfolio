<template>
  <div class="bg-white rounded-lg border border-gray-200">
    <div class="p-4 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-800">Project Files</h3>
    </div>
    
    <div class="divide-y divide-gray-200">
      <div v-for="file in files" :key="file.name" 
           class="p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div :class="fileTypeColors[file.type]" 
                 class="w-10 h-10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path :d="fileTypeIcons[file.type]" />
              </svg>
            </div>
            
            <div>
              <p class="font-medium text-gray-900">{{ file.name }}</p>
              <p class="text-sm text-gray-500">{{ file.description }}</p>
              <p v-if="file.size" class="text-xs text-gray-400">{{ file.size }}</p>
            </div>
          </div>
          
          <a :href="file.url" 
             :download="file.name"
             class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Download
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectFile } from '@/types/portfolio';

defineProps<{
  files: ProjectFile[];
}>();

const fileTypeColors = {
  source: 'bg-blue-500',
  document: 'bg-red-500',
  pdf: 'bg-red-600',
  excel: 'bg-green-500',
  image: 'bg-purple-500'
};

const fileTypeIcons = {
  source: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z',
  document: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2v1a1 1 0 001-1h6a1 1 0 001 1v1a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z',
  pdf: 'M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z',
  excel: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z',
  image: 'M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z'
};
</script>