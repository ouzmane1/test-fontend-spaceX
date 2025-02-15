<script setup lang="ts">
import { ref } from "vue";
// Récupère les données du lancement sélectionné
defineProps(["launch"]);
// Pour fermer le modal
defineEmits(["close"]);
//Pour afficher masqué la video
const openVideo = ref(false);

</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
        <div class="bg-white w-[60%] max-h-[90vh] overflow-auto p-4 rounded-lg">
            <!--Nom-->
            <h2 class="text-2xl font-semibold">{{ launch.name }}</h2>
            <!--Date-->
            <p class="text-lg">Date : 
                {{ new Date(launch.date_utc).toLocaleString() }}
            </p>
            <!--lieu-->
            <p class="text-lg mt-2">Lieu : 
                {{ launch.launchpad.full_name || "Inconnu" }}
            </p>
            <!--Detail-->
            <p class="mt-2">
                {{launch.details || "Pas de détails"}}
            </p>
            <!--Payloads envoyés-->
            <div v-if="launch.payloads.length" class="mt-2">
                <h3 class="text-lg">Chargements envoyés :</h3>
                <ul class="list-disc list-inside text-white">
                    <li v-for="payload in launch.payloads" :key="payload.id">
                        {{ payload.name || "Aucun chargement" }}
                    </li>
                </ul>
            </div>
            <!--Clients-->
            <div v-if="launch.payloads.length" class="mt-2">
                <h3 class="text-lg">Clients :</h3>
                <ul class="list-disc list-inside">
                    <li v-for="payload in launch.payloads" :key="payload.id">
                        {{ payload.customers?.join(", ") || "Aucun client" }}
                    </li>
                </ul>
            </div>
            <!--Image d'illustration-->
            <img v-if="launch.links?.patch?.small"
                :src="launch.links.patch.small"
                alt="Patch" 
                class="mt-4 w-40 mx-auto"
            />
            <!--Lien arcticle de presentation-->
            <a v-if="launch.links?.article"
                :href="launch.links.article"
                target="_blank"
                class="block text-blue-500 mt-4"
            >
                Article officiel
            </a>

            <!--affichage de la video-->
            <!--checkbox pour l'affichage de la video-->
            <div class="flex justify-center items-center mt-4">
                <input type="checkbox" 
                    id="video" 
                    v-model="openVideo" 
                    class="mr-2"
                />
                <label for="video">Voir la vidéo</label>
            </div>
            <!--video-->
            <div v-if="openVideo && launch.links?.youtube_id" class="mt-4">
                <iframe 
                    :src="'https://www.youtube.com/embed/' + launch.links.youtube_id" 
                    width="100%" 
                    height="400" 
                    frameborder="0" 
                    allowfullscreen
                ></iframe>
            </div>

            <button @click="$emit('close')" 
                class="bg-red-500 text-white p-2 rounded-lg mt-4">
                Fermer
            </button>
        </div>
    </div>
</template>