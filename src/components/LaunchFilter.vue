<script setup lang="ts">
// props qui sera passé par v-model
defineProps(["modelValue"]);
// evennement emis lorsqu'on change la valeur du filtre
defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="flex justify-center items-center space-x-4 p-4 rounded-lg shadow-lg">
      <label class="text-lg font-semibold"> Filtrer :</label>
      <select  
        @change="$emit('update:modelValue', $event.target.value)"
        class="p-2 bg-blue-500 text-white rounded-lg  "
      >
        <option value="all"> Tous les lancements</option>
        <option value="success">Lancements réussis</option>
        <option value="fail"> Lancements échoués</option>
      </select>
    </div>
  </template>