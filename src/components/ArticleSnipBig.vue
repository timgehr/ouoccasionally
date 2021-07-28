<template>
  <div class="snippet-big fullsnip">
    <router-link class="snippet-big link" :to="this.article.id">
      <h1 class="snippet-big title">{{ this.article.title }}</h1>
      <div class="snippet-big content">
        <img class="snippet-big image" :src="this.article.image" />
        <div class="snippet-big articlecontent" style="overflow: hidden">
          {{ article.content.split(" ").splice(0, 50).join(" ") }}...
        </div>
      </div>
      <h3 class="snippet-big date">Posted on {{ this.article.date }}</h3>
      <p class="snippet-big tags">
        Tags:
        <a v-for="tag in this.article.tags" :key="tag">{{ tag }}, </a>
      </p>
    </router-link>
  </div>
</template>

<script>
// import { markdown } from 'markdown'
export default {
  props: {
    article: Object,
  },
};
</script>

<style>
.snippet-big.fullsnip {
  text-decoration: none;
  min-height: 300px;
  height: fit-content;
  margin-top: 0px;
  padding-bottom: 30px;
  /*padding: 20px 20px 20px 20px;*/
  /*box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);*/
  border-bottom: solid #cccccc 0.5px;
  transition: 0.5s;
}

.snippet-big.link {
  text-decoration: none;
}

.snippet-big.fullsnip:hover {
  /*box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);*/
  margin-top: -5px;
  padding-bottom: 35px;
}

.snippet-big.image {
  height: 50vw;
  width: 100%;
  object-fit: cover;
}

.snippet-big.title {
  font-size: 24px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 700;
  color: black;
  text-decoration: none;
  margin: 0px;
  transition: 0.2s;
}

.snippet-big.content {
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 100%;
  padding: 10px 0px 10px 0px;
  margin: 0px;
  height: fit-content;
}

.snippet-big.articlecontent {
  text-align: left;
  font-family: Georgia, "Times New Roman", Times, serif;
  padding: 0px 10px 10px 50px;
  margin: 0px;
  height: 190px;
  font-size: 16px;
  font-weight: 300;
  display: none;
}

.snippet-big.date {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 10px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet-big.tags {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 10px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
  color: black;
}

@media screen and (min-width: 769px) {
  .snippet-big.title {
    font-size: 34px;
  }
  .snippet-big.image {
    height: 400px;
  }
}

@media screen and (min-width: 1024px) {
  .snippet-big.title {
    font-size: 44px;
  }
  .snippet-big.image {
    height: 500px;
  }
}
</style>