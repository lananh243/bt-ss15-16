<template>
  <div>
    <h1>UserName = {{ name }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { name } = route.params;
</script>

<style></style>
