<script setup lang="ts">
import { ref } from "vue";
import LaunchModal from "./LaunchModal.vue";

defineProps(["launches"]);

const launchSelected = ref<any>(null);

const openModal = (launch: any) => launchSelected.value = launch;

const closeModal = () => launchSelected.value = null;
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div 
            v-for="launch in launches"
            :key="launch.id"
            class="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg cursor-pointer"
            @click="openModal(launch)"
            >
            <h3 class="text-xl font-semibold">
                {{ launch.name }}
            </h3>
            <p class="text-sm text-gray-200">
                Date : {{ new Date(launch.date_utc).toLocaleDateString() }}
            </p>
            <p class="text-sm" :class="launch.success ? 'text-white' : 'text-red-700'">
                {{ launch.success ? " Réussi" : " Echoué" }}
            </p>
        </div>
    </div>

    <LaunchModal v-if="launchSelected" :launch="launchSelected" @close="closeModal" />
</template>