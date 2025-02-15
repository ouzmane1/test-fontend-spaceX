<script setup lang="ts">
import Banner from "./components/Banner.vue";
import NextLaunch from "./components/NextLaunch.vue";
import { getPastLaunches } from "./services/Spacex.ts";
import { ref, onMounted, computed } from "vue";
import LaunchList from "./components/LaunchList.vue";
import LaunchFilter from "./components/LaunchFilter.vue";

//Creation de variable pour les lancements et filtrage
const launches = ref<any[]>([]);
const filter = ref("all");

// Recuperation les lancements passés
onMounted(async () => {
  launches.value = await getPastLaunches();
});

//Filtrage en fonction de la valeur
const filtered = computed(() => 
  filter.value === "all"
    ? launches.value
    : launches.value.filter(l => filter.value === "success" ? l.success : !l.success)
);

</script>

<template>
  <div class=" mx-auto p-6 text-center">
    <h1 class="text-4xl font-bold mb-6 py-4"> Test Frontend SpaceX</h1>
    
    <Banner />

    <NextLaunch class="mb-4"/>

    <LaunchFilter v-model="filter" class=" mb-4"/>
    
    <LaunchList :launches="filtered" />
    
  </div>
</template>