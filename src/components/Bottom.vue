<template>
  <div class="bottom">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Follow</a>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.bottom {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  align-items: left;
  height: 200px;
  width: 100%;
  justify-content: center;
  background: #2b2b2b;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  vertical-align: bottom
}
</style>
