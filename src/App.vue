<template>
  <div :class="isDark ? 'dark' : ''" class="min-h-screen">
    <div
      class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <nav
        class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300"
      >
        <the-navbar></the-navbar>
      </nav>

      <main>
        <router-view #="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <footer class="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <the-footer></the-footer>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineComponent, watch } from 'vue';

// Dark mode state
const isDark = ref(false);
const mobileMenuOpen = ref(false);

// Initialize dark mode from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('jelon-theme');
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true;
  }
});

// Toggle dark mode
function toggleDarkMode() {
  isDark.value = !isDark.value;
  localStorage.setItem('jelon-theme', isDark.value ? 'dark' : 'light');
}

// Feature Card Component
const FeatureCard = defineComponent({
  props: {
    title: String,
    description: String,
    icon: String,
    delay: String,
  },
  setup(props) {
    const isVisible = ref(false);

    onMounted(() => {
      setTimeout(() => {
        isVisible.value = true;
      }, parseInt(props.delay));
    });

    return { isVisible };
  },
  template: `
    <transition
      enter-active-class="transition duration-700 ease-out"
      enter-from-class="transform translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <div v-if="isVisible" class="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300">
        <div class="flex items-start">
          <div class="mr-4 mt-1">
            <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <svg v-if="icon === 'code'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <svg v-if="icon === 'database'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              <svg v-if="icon === 'package'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
              <svg v-if="icon === 'search'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <svg v-if="icon === 'feather'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
              <svg v-if="icon === 'lock'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{{ title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ description }}</p>
          </div>
        </div>
      </div>
    </transition>
  `,
});

import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

const jelonVersion = ref('v1.0');
</script>

<style>
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fade 200ms ease-in;
}
.fade-leave-active {
  animation: fade 200ms ease-out reverse;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif;
}

.dark {
  color-scheme: dark;
}

/* Add support for backdrop-filter in browsers that support it */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}
</style>
