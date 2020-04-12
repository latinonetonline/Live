<template>
  <modal name="hello-world">
    <div class="container">
      <div class="row title">
        <div class="col col-lg-12">
          <p class="text-center">{{poll.Question}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-12">
          <a href="#" class="square_btn">{{poll.Options.Option1.Text}}</a>
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-12">
          <a href="#" class="square_btn">{{poll.Options.Option2.Text}}</a>
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-12">
          <a href="#" class="square_btn">{{poll.Options.Option3.Text}}</a>
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-12">
          <a href="#" class="square_btn">{{poll.Options.Option4.Text}}</a>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "pollmodal",
  data() {
    return {
      poll: null
    };
  },
  watch: {
    poll: function(newValue) {
      if (this.poll.Show) {
        this.show();
      }
    }
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    }
  },
  firebase: {
    poll: db.ref("Poll")
  }
};
</script>

<style scoped>
.v--modal-overlay {
  background: rgba(0, 0, 0, 0.7);
}
.container {
  margin-top: 4vh;
}
.row {
  font-size: larger;
  height: auto;
  margin: 0 6vw;
}
.square_btn {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  border: solid 8px;
  text-decoration: none;
  color: #fff;
  background-image: -webkit-linear-gradient(45deg, #ea07ff 0%, #7f3fc7 100%);
  background-image: linear-gradient(45deg, #ea07ff 0%, #7f3fc7 100%);
  transition: 0.4s;
  width: 100%;
}
.square_btn:hover {
  background-image: -webkit-linear-gradient(45deg, #ea07ff 0%, #3f1f64 100%);
  background-image: linear-gradient(45deg, #ea07ff 0%, #3f1f64 100%);
}
</style>