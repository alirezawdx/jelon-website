<script setup>
import JelonLogo from '../assets/jelon-logo-compressed.png';

defineProps(['version']);
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm rounded-box">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden ms-1 me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow gap-2"
        >
          <slot name="links"></slot>
        </ul>
      </div>
      <router-link to="/" class="bg-transparent">
        <img :src="JelonLogo" alt="Jelon Logo" class="h-[25px] ms-0 lg:ms-4" />
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-2">
        <slot name="links"></slot>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="badge me-3">{{ version }}</a>
    </div>
  </div>
</template>
