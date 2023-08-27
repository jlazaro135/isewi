<template>
    <div class="m-10">
        <span class="relative flex items-center justify-center m-3 mx-auto w-fit p-2 rounded-full border-2 bg-primary-600 text-white">
            <SfIconBase
            :viewbox="viewbox ?? '0 0 32 32'"
            size="lg"
            >
            <slot></slot>
        </SfIconBase>
    </span>
    <h3 class="relative typography-headline-3 md:typography-headline-2 md:leading-[67.5px] text-center mt-2 mb-4 text-neutral-800 p-2">
        {{ title }}
    </h3>
    </div>
</template>

<script lang="ts" setup>
import { SfIconBase } from '@storefront-ui/vue';

const {icon, title} = defineProps(['icon', 'title', 'viewbox'])

</script>

<style scoped>
h3{
width: fit-content;
margin: auto;
}

span:after, span:before{
content: '';
position: absolute;
top: 0;
bottom: 0;
left: 100%;
width: 10vw;
min-width: 100%;
height: 1px;
margin: auto;
background-color: theme('colors.primary.600');
}

span:before{
left: auto;
right: 100%;
}
</style>
