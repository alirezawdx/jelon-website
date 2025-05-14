<script setup>
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <div class="container p-3 mx-auto">
    <header>
      <nav>
        <the-navbar #links version="v1.0">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
        </the-navbar>
      </nav>
    </header>

    <main>
      <router-view #="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
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
