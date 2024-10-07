<template>
  <div class="container">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav> -->

    <!-- <nav>
      <button @click="goToHome">Home</button>
      <button @click="goToAbout">About</button>
      <button @click="goToContact">Contact</button>
    </nav> -->

    <nav>
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/contact" exact-active-class="active"
        >Contact</router-link
      >
      <router-link to="/product" exact-active-class="active"
        >Product</router-link
      >
      <router-link to="/detail" exact-active-class="active">Detail</router-link>
      <router-link to="/dashboard" exact-active-class="active"
        >Dashboard</router-link
      >
      <router-link to="/account" exact-active-class="active"
        >Account</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToHome = () => {
  // Điều hướng qua trang home
  router.push("/");
};

const goToAbout = () => {
  // Điều hướng qua trang about
  router.push({ name: "about" });
};

const goToContact = () => {
  // Điều hướng qua contact
  router.replace({ name: "contact" });
};
// setTimeout(() => {
//   router.push({ name: "contact" });
// }, 3000);
</script>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}
.container {
  padding: 20px;
}
.b6 {
  display: flex;
  gap: 30px;
}
.active {
  background-color: rgb(115, 115, 189);
  color: white;
  text-decoration: none;
  width: 90px;
  text-align: center;
  font-weight: 700;
  height: 35px;
  border-radius: 5px;
}
</style>
