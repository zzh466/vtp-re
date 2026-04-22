<template>
  <div class="app-shell">
    <header class="header">
      <h1>Electron + Vue + Vue Router + Vuex + Electron Store</h1>
      <nav class="nav">
       
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
 
});
</script>
