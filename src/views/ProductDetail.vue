<template>
  <div>
    <h1>Product Detail Page Of Id = {{ id }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
// const id = route.params.id;

const { id } = route.params;
</script>

<style></style>
