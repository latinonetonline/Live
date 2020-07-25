<template>
  <div id="col-iframe-twitch" v-bind:class="{ 'col-xs-12 col-lg-9': !fullScreen}">
    <div id="twitch-embed"></div>
  </div>
</template>

<script>
import Vue from "vue";
import LoadScript from "vue-plugin-load-script";

Vue.use(LoadScript);

export default {
  name: "Twitch",
  data() {
    return {
      fullScreen: false,
    };
  },
  created() {
    Vue.loadScript("https://player.twitch.tv/js/embed/v1.js").then(() => {
      var embed = new window.Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "latinonetonline",
        layout: "video",
        autoplay: true,
        // only needed if your site is also embedded on embed.example.com and othersite.example.com
        parent: ["latinonet.online", "localhost"],
      });

      embed.addEventListener(window.Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
      });
    });

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
        var elem = document.getElementById("col-iframe-twitch");
        elem.webkitRequestFullscreen();
      }
    });
  },
  methods: {
    changeHandler(event) {
      if (document.fullscreenElement) {
        if (event.target.id == "frm-twitch") {
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