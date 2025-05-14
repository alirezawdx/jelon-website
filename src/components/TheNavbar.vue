<script setup>
import JelonLogo from '../assets/jelon-logo-compressed.png';

defineProps([
  'links',
  'isDark',
  'toggleDarkMode',
  'mobileMenuOpen',
  'toggleMobileMenu',
]);
</script>

<template>
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <div class="flex items-center space-x-2">
      <div
        class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center"
      >
        <span class="text-white font-bold">J</span>
      </div>
      <span class="font-bold text-xl text-gray-900 dark:text-white">Jelon</span>
    </div>

    <div class="flex items-center space-x-6">
      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors duration-300"
        >
          {{ link.text }}
        </router-link>
      </div>

      <!-- Dark mode toggle -->
      <button
        @click="toggleDarkMode"
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      >
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      <button @click="toggleMobileMenu" class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  <transition
    enter-active-class="transition duration-300 ease-in"
    enter-from-class="transform  opacity-0"
    enter-to-class="transform opacity-100"
    leave-active-class="transition duration-200 ease-out"
    leave-from-class="transform opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-if="mobileMenuOpen"
      class="md:hidden px-4 py-2 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/90 dark:bg-gray-900/90"
    >
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="block py-2 text-gray-600 dark:text-gray-300"
      >
        {{ link.text }}
      </router-link>
    </div>
  </transition>
</template>
