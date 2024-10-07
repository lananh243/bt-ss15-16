<template>
  <div class="user-list">
    <div class="container" v-for="(user, index) in users" :key="user.id">
      <p>Id : {{ index + 1 }}</p>
      <p>UserName : {{ user.name }}</p>
      <p>Email : {{ user.email }}</p>
      <p>Address : {{ user.address }}</p>
      <br />
      <button @click="handleDetail(user.id)">Xem chi tiết</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

// Hàm chuyển hướng đến chi tiết người dùng
const handleDetail = (userId) => {
  router.push(`/user-detail/${userId}`);
};
</script>

<style scoped>
.user-list {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.container {
  width: 200px;
  height: 200px;
  border: 1px solid grey;
  padding: 10px;
}

button {
  width: 150px;
}
</style>
