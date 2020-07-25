<template>
  <div>
    <navbar v-if="!fullScreen"></navbar>
    <div v-bind:class="{ 'container-inner': !fullScreen}">
      <div v-bind:class="{ 'row': !fullScreen}">
        <twitch @fullscreen="changeFullScreen($event)"></twitch>
        <!-- <eventflyer v-else>
          <img
            :src="event.ImageUrl"
            width="auto"
            height="auto"
            class="img-responsive"
            style="text-align: center;display: inline-block;"
          />
        </eventflyer>-->
        <pollmodal />
        <div v-bind:class="{ 'col-xs-12 col-lg-3': !fullScreen}">
          <iframe
            frameborder="0"
            scrolling="yes"
            id="chat_embed"
            src="https://www.twitch.tv/embed/latinonetonline/chat?parent=latinonet.online"
            height="500"
            width="350"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Twitch from "./Twitch.vue";
import PollModal from "./PollModal.vue";
import EventFlyer from "./EventFlyer.vue";

export default {
  name: "Main",
  components: {
    navbar: Navbar,
    twitch: Twitch,
    pollmodal: PollModal,
    eventflyer: EventFlyer,
  },
  data() {
    return {
      fullScreen: false,
      event: {},
    };
  },
  created() {},
  methods: {
    changeFullScreen(isFullScreen) {
      this.fullScreen = isFullScreen;
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
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

.row {
  height: 100%;
  margin-left: 0px;
  margin-right: 0px;
}

.hide {
  display: none;
}

div.v--modal-box.v--modal {
  height: auto !important;
}
</style>