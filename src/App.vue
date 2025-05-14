<script setup>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import { ref } from 'vue';

const jelonVersion = ref('v1.0');
</script>

<template>
  <div class="container p-3 mx-auto">
    <header>
      <nav>
        <the-navbar #links :version="jelonVersion">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
        </the-navbar>
      </nav>
    </header>

    <main class="my-3">
      <router-view #="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer>
      <the-footer :version="jelonVersion">
        <template #links>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
        </template>
      </the-footer>
    </footer>
  </div>
</template>

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
</style>
