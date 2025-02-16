<script setup lang="ts">
</script>

<template>
    <div class="relative w-full h-64 flex items-center justify-center bg-cover bg-center" 
    style="background-image: url('/src/assets/img/banner.avif');">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <h1 class="text-white text-5xl font-bold relative z-10">
            <font-awesome-icon :icon="['fas', 'rocket']" class="mr-2" />
            Frontend SpaceX Launch 
        </h1>
    </div>
</template>