<script setup>
  import TheHeader from "./components/TheHeader.vue";
  import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader msg="Welcome to your Private Gallery" />
  <hr>
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>
