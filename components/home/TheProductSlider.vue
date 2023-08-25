<template>
    <div class="container mx-auto px-4">
        <h3 class="typography-headline-3 md:typography-headline-2 md:leading-[67.5px] font-bold text-center mt-2 mb-4">Productos destacados</h3>
        <SfScrollable
        class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        buttons-placement="floating"
        drag
        >
        <template #previousButton="defaultProps">
            <SfButton
            v-bind="defaultProps"
            class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
            :class="{ '!hidden': defaultProps.disabled }"
            variant="secondary"
            size="lg"
            square
            >
            <SfIconChevronLeft />
            </SfButton>
        </template>
        <div
            v-for="{ id, name, price, img } in products"
            :key="id"
            class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[50%] lg:w-[20%]"
        >
            <div class="relative">
                <SfLink href="#" class="block">
                    <img
                    :src="img.src"
                    :alt="img.alt"
                    class="block object-cover h-auto rounded-md aspect-square w-[100%] h-[100%]"
                    width="146"
                    height="146"
                    />
                </SfLink>
                <SfButton
                    type="button"
                    variant="tertiary"
                    size="sm"
                    square
                    class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
                    aria-label="Add to wishlist"
                >
                    <SfIconFavorite size="sm" />
                </SfButton>
            </div>
            <div class="p-2 border-t border-neutral-200 typography-text-sm">
            <SfLink href="#" variant="secondary" class="no-underline">{{ name }}</SfLink>
            <span class="block mt-2 font-bold">{{ price }}</span>
            </div>
        </div>
        <template #nextButton="defaultProps">
            <SfButton
            v-bind="defaultProps"
            class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
            :class="{ '!hidden': defaultProps.disabled }"
            variant="secondary"
            size="lg"
            square
            >
            <SfIconChevronRight />
            </SfButton>
        </template>
        </SfScrollable>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {
    SfLink,
    SfButton,
    SfIconFavorite,
    SfIconChevronLeft,
    SfIconChevronRight,
    SfScrollable,
  } from '@storefront-ui/vue';
  
  const products = Array.from(Array(10), (_, i) => ({
    id: i.toString(),
    name: 'Athletic mens walking sneakers',
    price: '$2,345.99',
    img: {
      src: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png',
      alt: 'White sneaker shoe',
    },
  }));
  </script>
  