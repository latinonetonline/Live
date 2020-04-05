<template>
  <!-- Navigation -->
  <div>
    <navbar></navbar>
    <mixer></mixer>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Mixer from "./Mixer.vue";
export default {
  name: "Main",
  components: {
    navbar: Navbar,
    mixer: Mixer
  }
};
</script>

<style>
body {
  padding-top: 80px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background: url(https://latinonet.online/assets/img/latinonet/fondo.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
h1 {
  text-align: center;
}
</style>