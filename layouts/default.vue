<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4  flex justify-between">
        <NuxtLink to="/">LOGO</NuxtLink>
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/products">Productos</NuxtLink></li>
            <li><NuxtLink to="/about">Nosotros</NuxtLink></li>
        </ul>
    </nav>
  </header>
  <div class="container mx-auto p-4 ">
      <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: rgb(44, 152, 1);
}
</style>
