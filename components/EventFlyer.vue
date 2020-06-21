<template>
  <div class="col-xs-12 col-lg-9">
    <img
      :src="event.ImageUrl"
      class="center"
    />
  </div>
</template>

<script>
export default {
  name: "eventflyer",
  created: function() {
    fetch(
      "https://raw.githubusercontent.com/latinonetonline/eventsdb/master/events/NextEvent"
    )
      .then(json => json.json())
      .then(event => (this.event = event));
  },
  data: function() {
    return {
      event: {}
    };
  }
};
</script>

<style scoped>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>