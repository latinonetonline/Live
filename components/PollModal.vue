<template>
  <modal name="hello-world">
    <h1>¿Cuantos dedos tengo?</h1>
    <h4>5</h4>
    <h4>10</h4>
    <h4>20</h4>
    <h4>40</h4>
  </modal>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "pollmodal",
  data() {
    return {
      polls: null
    };
  },
  watch: {
    polls: function(newValue) {
      if (newValue.id == 1) {
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
    polls: db.ref("polls")
  }
};
</script>

<style scoped>
</style>