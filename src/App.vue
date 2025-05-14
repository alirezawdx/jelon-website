<template>
  <div class="container mx-auto">
    <router-link to="/">Home</router-link>
    <router-link to="/team">Team</router-link>

    <router-view #="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
