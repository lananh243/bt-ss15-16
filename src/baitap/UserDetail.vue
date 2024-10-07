<template>
  <div class="user-detail">
    <h1>Chi tiết người dùng</h1>
    <div v-if="user">
      <p>Tên: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Địa chỉ: {{ user.address }}</p>
    </div>
    <div v-else>
      <h2>Người dùng không tồn tại</h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

// Lấy userId từ params và chuyển đổi thành số nguyên
const userId = parseInt(route.params.id); // Đảm bảo lấy đúng tham số và chuyển đổi
const user = computed(() => users.find((u) => u.id === userId));
</script>

<style scoped>
.user-detail {
  padding: 20px;
}
</style>
