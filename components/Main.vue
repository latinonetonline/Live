<template>
  <div>
    <navbar v-if="!fullScreen"></navbar>
    <div v-bind:class="{ 'container-inner': !fullScreen}">
      <div v-bind:class="{ 'row': !fullScreen}">
        <div
          id="col-iframe-mixer"
          v-bind:class="{ 'col col-xs-12 col-sm-12 col-lg-10': !fullScreen}"
        >
          <iframe
            id="frm-mixer"
            allowfullscreen
            src="https://mixer.com/embed/player/latinonetonline?hideChannel=true&muted=false"
          ></iframe>
        </div>
        <div v-bind:class="{ 'col col-xs-12 col-sm-12 col-lg-2': !fullScreen}">
          <iframe
            v-bind:class="{'hide': fullScreen}"
            src="https://mixer.com/embed/chat/latinonetonline"
          ></iframe>
        </div>
      </div>
    </div>
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
  },
  data: function() {
    return {
      fullScreen: false
    };
  },
  updated: function() {
    this.$nextTick(function() {
      if (this.fullScreen) {
        var elem = document.getElementById("col-iframe-mixer");
        elem.webkitRequestFullscreen();
      }
    });
  },
  watch: {
    fullScreen: function(newValue) {}
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
  methods: {
    changeHandler(event) {
      if (document.fullscreenElement) {
        if (event.target.id == "frm-mixer") {
          this.fullScreen = !this.fullScreen;
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

<style >
body {
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

iframe {
  border: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.container-inner {
  margin-top: 90px;
  height: calc(100% - 90px);
}
.col {
  width: 100%;
  height: 100%;
}

.row {
  height: 100%;
}

.hide {
  display: none;
}
</style>