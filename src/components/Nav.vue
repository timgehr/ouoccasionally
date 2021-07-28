<template>
  <div class="nav">
    <router-link to="/" tag="div" class="homegroup">
      <img src='../assets/logoalt.svg'
      height="70%"
      width="auto"
      style="vertical-align: middle">
    </router-link>
    <div class="navitself">
      <router-link id="nav1" to="/">Home</router-link>
      <router-link id="nav3" to="/about">About</router-link>
      <router-link id="nav4" to="/contribute">Contribute</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.nav {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  align-items: left;
  height: 60px;
  line-height: 60px;
  width: 100%;
  justify-content: center;
  background: #841617;
  font-weight: 600;
  box-shadow: 0px 0px 0px #0000005e;
  display: flex;
  flex-direction: row;
  position: -webkit-sticky;
  position: relative;
  top: 0;
  transition: 0.5s;
  z-index: 100;
}

.primary-home-size{
  font-size: 60px;
  font-weight: bolder;
  margin-right: 10px;
}

.secondary-home-size{
  font-size: 20px;
  font-weight: bolder;
  line-height: 100px;
}

.navitself {
  width: 100%;
  max-width: 1000px;
  text-align: right;
  padding-right: 30px;
  display: none;
}

.homegroup {
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  transition: 0.5s;
  color: white;
}

.homegroup:hover {
  cursor: pointer;
}

.nav a {
  padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;
  color: white;
  transition: 0.5s;
}

.nav a:hover {
  color: rgba(255, 255, 255, 0.692);
}

.nav a:link {
  text-decoration: none;
}

.logo60 {
  margin: 10px 20px 10px 0px;
  z-index: 100;
}
</style>
