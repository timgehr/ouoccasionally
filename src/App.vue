<template>
  <div id="app">
    <Nav></Nav>
    <div class="page-content-wrapper">
      <router-view />
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from './components/Bottom.vue';
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
    Bottom,
  },
};
</script>

<style>
:root {
  --blue: #0f49b4;
  --red: #b82929;
  --green: #1d8f2e;
  --StandardTextColor: rgba(0, 0, 0, 0.8);
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--StandardTextColor);
  background: rgb(255, 255, 255);
}

.page-content-wrapper {
  min-height: calc(100vh - 80px);
  min-width: 100%;
}

.page {
  width: 80%;
  max-width: 1100px;
  margin: 0px auto 0px auto;
  text-align: left;
  font-size: 18px;
  padding: 30px 30px 30px 30px;
}

a {
  color: rgb(0, 0, 0);
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
}
</style>