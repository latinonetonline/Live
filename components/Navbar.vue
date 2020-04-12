<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
     
        <img src="https://latinonet.online/assets/img/latinonet/Logo%20Hexagono.png" width="61px" />
        <h3 class="navbar-brand">{{title}}</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
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
    fetch("https://mixer.com/api/v1/channels/latinonetonline?fields=name")
      .then(json => json.json())
      .then(data => (this.title = data.name));
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