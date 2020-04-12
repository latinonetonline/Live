<template>
  <div id="col-iframe-mixer" v-bind:class="{ 'col col-xs-12 col-sm-12 col-lg-10': !fullScreen}">
    <iframe
      id="frm-mixer"
      allowfullscreen
      src="https://mixer.com/embed/player/latinonetonline?hideChannel=true&muted=false"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "mixer",
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
  updated: function() {
    this.$nextTick(function() {
      if (this.fullScreen) {
        var elem = document.getElementById("col-iframe-mixer");
        elem.webkitRequestFullscreen();
      }
    });
  },
  methods: {
    changeHandler(event) {
      if (document.fullscreenElement) {
        if (event.target.id == "frm-mixer") {
          this.fullScreen = !this.fullScreen;
          this.$emit("fullscreen", this.fullScreen);
          document.exitFullscreen();
        }
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("fullscreenchange", this.changeHandler);
    window.removeEventListener("webkitfullscreenchange", this.changeHandler);
    window.removeEventListener("mozfullscreenchange", this.changeHandler);
  }
};
</script>

<style scoped>
</style>