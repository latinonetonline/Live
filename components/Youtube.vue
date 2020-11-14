<template>
  <div
    id="col-iframe-youtube"
    v-bind:class="{ 'col-xs-12 col-lg-9': !fullScreen }"
  >
    <iframe
      allow="autoplay; encrypted-media"
      frameborder="0"
      allowfullscreen
      src="https://www.youtube.com/embed/wcVrXGlxZxA?autoplay=1&mute=1"
    >
    </iframe>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Youtube",
  props: ["youtubeId"],
  data() {
    return {
      fullScreen: false
    };
  },
  created() {
    window.addEventListener("fullscreenchange", this.changeHandler, false);
    window.addEventListener(
      "webkitfullscreenchange",
      this.changeHandler,
      false
    );
    window.addEventListener("mozfullscreenchange", this.changeHandler, false);
  },
  updated: function () {
    this.$nextTick(function () {
      if (this.fullScreen) {
        var elem = document.getElementById("col-iframe-youtube");
        elem.webkitRequestFullscreen();
      }
    });
  },
  methods: {
    changeHandler(event) {
      if (document.fullscreenElement) {
        if (event.target.id == "frm-youtube") {
          this.fullScreen = !this.fullScreen;
          this.$emit("fullscreen", this.fullScreen);
          document.exitFullscreen();
        }
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("fullscreenchange", this.changeHandler);
    window.removeEventListener("webkitfullscreenchange", this.changeHandler);
    window.removeEventListener("mozfullscreenchange", this.changeHandler);
  },
};
</script>

<style scoped>
</style>