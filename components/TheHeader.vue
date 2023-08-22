<template>
    <header class="shadow-sm">
    <nav class="bg-[#108399] py-1 text-white">
        <UContainer>
            <ul class="flex gap-4 items-center justify-end">
            <li><NuxtLink to="/about">Contacto</NuxtLink></li>
        </ul>
        </UContainer>
    </nav>
    <nav>
        <UContainer class="flex justify-between items-center py-4">
            <NuxtLink to="/">
                <div class="w-[100px]">
                    <img src="@/i_logo.png" class="w-full h-auto object-cover" alt="logo">
                </div>
            </NuxtLink>
            <ul class="flex items-center">
                <li>
                    <UButton icon="i-heroicons-magnifying-glass" size="xl" color="gray" variant="link" class="relative" />
                </li>
                <li>
                    <UButton icon="i-heroicons-user" size="xl" color="gray" variant="link" to="/about" />
                </li>
                <li>
                    <UButton icon="i-heroicons-shopping-cart" size="xl" color="gray" variant="link" class="relative" to="/products">
                        <UBadge 
                        size="xs" 
                        :ui="{ rounded: 'rounded-full' }" 
                        class="min-w-[20px] aspect-square flex items-center justify-center absolute top-0 right-0">
                            1
                        </UBadge>
                    </UButton>
                </li>
            </ul>
        </UContainer>
    </nav>
  </header>
</template> 

<style scoped>

</style>