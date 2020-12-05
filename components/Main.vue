<template>
  <div>
    <navbar v-if="!fullScreen"></navbar>
    <div v-bind:class="{ 'container-inner': !fullScreen }">
      <div v-bind:class="{ row: !fullScreen }">
        <youtube
          @fullscreen="changeFullScreen($event)"
          v-bind:youtubeId="youtubeId"
        ></youtube>
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
        <div v-bind:class="{ 'col-xs-12 col-lg-3': !fullScreen }">
          <iframe
            frameborder="0"
            scrolling="yes"
            allow="autoplay; encrypted-media"
            allowfullscreen
            id="chat_embed"
            :src="`https://www.youtube.com/live_chat?v=${this.youtubeId}&embed_domain=latinonet.online`"
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
import Youtube from "./Youtube.vue";
import PollModal from "./PollModal.vue";
import EventFlyer from "./EventFlyer.vue";

export default {
  name: "Main",
  components: {
    navbar: Navbar,
    youtube: Youtube,
    pollmodal: PollModal,
    eventflyer: EventFlyer,
  },
  data() {
    return {
      fullScreen: false,
      youtubeId: "",
      iframeChatUrl: "",
      event: {},
    };
  },
  created() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCIn0D2WXX9aoglkgHmde-yw&api_key=hfii0d4syu8xqnomg2qjcsrc2u1dsccqrdox0ecb&order_by=pubDate&order_dir=desc&count=15"
    )
      .then((data) => data.json())
      .then((res) => {
        let video = res.items.filter(function (e) {
          return e.title.includes("Latino .NET Online");
        })[0];

        this.youtubeId = video.guid.split(":")[2];
      });
  },
  methods: {
    changeFullScreen(isFullScreen) {
      this.fullScreen = isFullScreen;
    },
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