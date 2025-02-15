<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getNextLaunch } from "../services/Spacex.ts";

// creation de variable pour prochain lancement et decompte
const nextLaunch = ref<any>(null);
const decompt = ref("");

const updateDecompt = () => {
    // si le prochain lancement n'est pas encore disponible
    if (!nextLaunch.value) return;
    // sinon on recupere la date du prochain lancement et la date actuelle
    const date = new Date(nextLaunch.value.date_utc).getTime();
    const now = new Date().getTime();
    const dateDiff = date - now;

    // Lancement en cours ou terminé
    if (dateDiff <= 0) {
        decompt.value = "Lancement en cours ou terminé";
        return;
    }

    // sinon on met a jour le decompte à temps réel
    const heure = Math.floor((dateDiff / (1000 * 60 * 60 )) % 24);
    const minute = Math.floor((dateDiff / (1000 * 60)) % 60);
    const seconde = Math.floor((dateDiff / 1000) % 60);

    decompt.value = `${heure}h ${minute}m ${seconde}s`;
}

onMounted(async () => {
    nextLaunch.value = await getNextLaunch();
    // console.log("Données récupérées :", nextLaunch.value);
    updateDecompt(); // pour mettre a jour le decompte
    setInterval(updateDecompt, 1000); 
});

</script>

<template>
    <div v-if="nextLaunch" class="flex justify-center mt-6">
      <div class="bg-blue-600 hover:bg-blue-500 cursor-pointer text-white p-6 rounded-xl shadow-lg max-w-md w-full text-center border border-blue-400 ">
        <h2 class="text-3xl font-bold"> Prochain Lancement</h2>
        <p class="text-lg font-semibold mt-2">{{ nextLaunch.name }}</p>
  
        <div class="mt-4">
          <p class="text-gray-200 text-lg"> Date : 
            <span class="font-bold">{{ new Date(nextLaunch.date_utc).toLocaleString() }}</span>
          </p>
          <p class="mt-3 text-2xl text-gray-300 font-mono bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md ">
             {{ decompt }}
          </p>
        </div>
      </div>
    </div>
  </template>