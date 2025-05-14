<script setup>
import JelonLogo from '../assets/jelon-logo-compressed.png';

defineProps(['version']);
</script>

<template>
  <footer
    class="footer sm:footer-horizontal bg-base-100 text-neutral-content p-10 rounded-box"
  >
    <aside>
      <router-link to="/" class="bg-transparent">
        <img :src="JelonLogo" alt="Jelon Logo" class="h-[40px]" />
      </router-link>
      <h3 class="text-2xl font-bold mt-2">
        🍈 Jelon
        <span class="badge badge-sm font-light">
          {{ version }}
        </span>
      </h3>
      <p>A simple way to store your data in json format using pyhon.</p>
    </aside>
    <nav>
      <ul class="menu bg-base-100 rounded-box w-56">
        <li>
          <h2 class="menu-title">Menu</h2>
          <ul>
            <slot name="links"></slot>
          </ul>
        </li>
      </ul>
    </nav>
  </footer>
</template>
