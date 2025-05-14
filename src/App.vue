<script setup>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

import { ref, onMounted, defineComponent, watch } from 'vue';

// Dark mode state
const isDark = ref(false);
const mobileMenuOpen = ref(false);

const links = ref([
  { path: '/', text: 'Home' },
  { path: '/team', text: 'Team' },
]);

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

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

const jelonVersion = ref('v1.0');
</script>

<template>
  <div :class="isDark ? 'dark' : ''" class="min-h-screen">
    <div
      class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <nav
        class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300"
      >
        <the-navbar
          :isDark="isDark"
          :toggleDarkMode="toggleDarkMode"
          :links="links"
          :mobileMenuOpen="mobileMenuOpen"
          :toggleMobileMenu="toggleMobileMenu"
        ></the-navbar>
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

<style>
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif;
}

.dark {
  color-scheme: dark;
}

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

/* Add support for backdrop-filter in browsers that support it */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}
</style>
