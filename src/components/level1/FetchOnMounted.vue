<script setup>
// TODO: TDD Exercise: complete the implementation of this component
// to pass all the tests defined in its companion .test.js file

import { ref, onMounted } from 'vue';
const response = ref({});
const loaded = ref(false);
const error = ref(false);

onMounted(async () => {
  try {
    const res = await fetch('https://yesno.wtf/api');
    if (!res.ok) {
      error.value = true;
    } else {
      response.value = await res?.json() || {};
      loaded.value = true;
    }
  } catch(e) {
    error.value = true;
  }
});
</script>

<template>
    <span v-if="error">error</span>
    <img v-else-if="loaded" :src="response.image"/>
    <span v-else-if="!loaded">
      loading...
    </span>
</template>
