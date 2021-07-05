<template>
  <div class="snippet-big fullsnip">
      <router-link class="snippet-big title" :to="this.article.id">{{
        this.article.title
      }}</router-link>
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
  min-height: 300px;
  height: fit-content;
  width: calc(100%-40px);
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px 20px 20px 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}

.snippet-big.fullsnip:hover{
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin-top: 25px;
  margin-bottom: 35px;
}

.snippet-big.image {
  height: 200px;
  width: 400px;
  object-fit: cover;
}

.snippet-big.title {
  font-size: 55px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
  color: black;
  text-decoration: none;
}

.snippet-big.content {
  display: flex;
  flex-direction: row;
  justify-content: left;
  max-width: 100%;
  padding: 10px 0px 10px 0px;
  margin: 0px;
  height: 200px;
}

.snippet-big.articlecontent {
  text-align: left;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 0px 10px 10px 50px;
  margin: 0px;
  height: 190px;
  font-size: 21px;
  font-weight: 300;
}

.snippet-big.date {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet-big.tags {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
  color: black;
}
</style>
