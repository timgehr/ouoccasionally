<template>
  <div class="bottom">
    <div class="bottom content">
    <a
      href="https://twitter.com/OUOccasionally?ref_src=twsrc%5Etfw"
      class="twitter-follow-button"
      data-size="large"
      data-show-count="false"
      >Follow</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",mounted() {
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
  },
};
</script>

<style scoped>
.bottom {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  align-items: left;
  height: 100px;
  width: 100%;
  justify-content: center;
  background: #2b2b2b;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  vertical-align: bottom;
}

.bottom.content{
  height: 50px;
  margin: 20px;
}

</style>
