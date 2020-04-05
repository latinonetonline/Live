<template>
  <!-- Navigation -->
  <div class="container-inner">
    <div class="row">
      <div class="col col-xs-12 col-sm-12 col-lg-9">
        <iframe
          src="https://mixer.com/embed/player/latinonetonline?hideChannel=true&muted=false"
        ></iframe>
      </div>
      <div class="col col-xs-12 col-sm-12 col-lg-3">
        <iframe
          src="https://mixer.com/embed/chat/latinonetonline"
        ></iframe>
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

<style>
iframe {
  border: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.col {
    width: 100%;
    height: 500;
}
</style>