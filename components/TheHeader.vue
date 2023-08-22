<template>
    <header class="shadow-sm py-4">
    <UContainer>
      <nav class="flex justify-between items-center">
        <NuxtLink to="/">
            <div class="w-[100px]">
                <img src="@/i_logo.png" class="w-full h-auto object-cover" alt="logo">
            </div>
        </NuxtLink>
        <ul class="flex gap-4 items-center">
            <li><NuxtLink to="/about">Conéctate</NuxtLink></li>
            <li><NuxtLink to="/products">
                <UButton icon="i-heroicons-shopping-cart" size="xl" color="primary" variant="ghost" :trailing="false" class="relative">
                    <UBadge 
                    size="xs" 
                    :ui="{ rounded: 'rounded-full' }" 
                    class="min-w-[20px] aspect-square flex items-center justify-center absolute top-0 right-0">
                        1
                    </UBadge>
                </UButton>    
            </NuxtLink></li>
        </ul>
    </nav>
    </UContainer>
  </header>
</template> 

<style scoped>
.router-link-exact-active {
  color: rgb(44, 152, 1);
}
</style>