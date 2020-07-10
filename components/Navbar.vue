<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <img src="https://latinonet.online/assets/img/latinonet/Logo%20Hexagono.png" width="61px" />
      <h3 class="navbar-brand d-none d-md-block">{{title}}</h3>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/" target="_blank">
              <font-awesome-icon icon="home" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  created: function() {
    fetch(
      "https://raw.githubusercontent.com/latinonetonline/eventsdb/master/events/NextEvent"
    )
      .then(json => json.json())
      .then(event => {
        let date = new Date(event.Date)
        let titleDate = `${date.getDate()}/${date.getMonth() + 1}`
        this.title = `Latino .NET Online ${titleDate}: ${event.Title}`;
      });
  },
  data: function() {
    return {
      title: ""
    };
  }
};
</script>

<style scoped>
body {
  padding-top: 90px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h1 {
  text-align: center;
}
nav {
  background: #5c2d91 !important;
}
h3.navbar-brand {
  margin-left: 6vw;
  padding-top: 1.1rem;
}
.nav-link {
  font-size: x-large;
}
</style>