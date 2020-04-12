<template>
  <div>
    <navbar v-if="!fullScreen"></navbar>
    <div v-bind:class="{ 'container-inner': !fullScreen}">
      <div v-bind:class="{ 'row': !fullScreen}">
        <mixer @fullscreen="changeFullScreen($event)"></mixer>
        <pollmodal />
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
import PollModal from "./PollModal.vue";

export default {
  name: "Main",
  components: {
    navbar: Navbar,
    mixer: Mixer,
    pollmodal: PollModal
  },
  data() {
    return {
      fullScreen: false
    };
  },
  methods: {
    changeFullScreen(isFullScreen) {
      this.fullScreen = isFullScreen;
    }
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