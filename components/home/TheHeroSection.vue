<template>
  <div class="relative flex lg:block min-h-[600px]">
    <picture>
      <source srcset="@/assets/img/hero.jpg" media="(min-width: 768px)" />
      <img
        src="@/assets/img/hero_mb.jpg"
        class="absolute w-full h-full z-[-1] md:object-cover opacity-50"
      />
    </picture>
    <div class="lg:flex max-w[1536px] m-auto lg:min-h-[600px]">
      <div class="p-4 md:p-10 md:max-w-[768px] md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
        <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
          Relocaliza tu estilo
        </p>
        <h1 class="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          MODA CERCA DE TI
        </h1>
        <p class="typography-text-base md:typography-text-lg">
          Moda de autor, sostenible y de proximidad.
        </p>
        <div class="flex flex-col md:flex-row gap-4 mt-6">
          <SfButton size="lg" variant="secondary" class="bg-white"> Más Información </SfButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
</script>
