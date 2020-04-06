<template>
  <!-- Navigation -->
  <div class="container-inner">
    <div class="row">
      <div id="col-iframe-mixer" class="col col-xs-12 col-sm-12 col-lg-9">
        <!-- https://davidwalsh.name/iframe-contentwindow-null -->
        <iframe
          id="frm-mixer"
          allowfullscreen
          src="https://mixer.com/embed/player/latinonetonline?hideChannel=true&muted=false"
        ></iframe>
      </div>
      <div class="col col-xs-12 col-sm-12 col-lg-3">
        <iframe src="https://mixer.com/embed/chat/latinonetonline"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "mixer"
};
</script>

<style scoped>
.container-inner {
  margin-top: 90px;
}
.col {
  width: 100%;
  height: 500;
}
</style>