<template>
  <div class="container">
    <h1 class="title">Login account</h1>
    <label for="">
      <b>Your email</b>
      <input type="email" /> </label
    ><br /><br />
    <label for="">
      <b>Password</b>
      <input type="password" /> </label
    ><br /><br />
    <button>Login an account</button>
    <br /><br />
    <p>Already have an account ? <a href="">Register Here</a></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 400px;
  height: 400px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  border-radius: 10px;
}
input {
  width: 320px;
  height: 35px;
}
button {
  width: 320px;
  height: 30px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 8px;
}
.title {
  text-align: center;
}
p {
  text-align: center;
  color: grey;
}
</style>
