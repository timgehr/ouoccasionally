<template>
  <div class="snippet fullsnip">
      <router-link class="snippet title" :to="this.article.id">{{
        this.article.title
      }}</router-link>
      <div class="snippet content">
        <img class="snippet image" :src="this.article.image" />
        <div class="snippet articlecontent" style="overflow: hidden">
          {{ article.content.split(" ").splice(0, 20).join(" ") }}...
        </div>
      </div>
      <h3 class="snippet date">Posted on {{ this.article.date }}</h3>
      <p class="snippet tags">
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
    leftColor: String,
    animDelay: Number,
  },
  computed: {
    style() {
      return (
        "background-color: " +
        this.leftColor +
        "animation-delay: " +
        this.animDelay.toString() +
        "s;"
      );
    },
  },
};
</script>

<style>
.snippet.fullsnip {
  min-height: 100px;
  height: fit-content;
  width: calc(100%-40px);
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px 20px 20px 20px;
  text-align: left;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}

.snippet.fullsnip:hover{
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin-top: 25px;
  margin-bottom: 35px;
}

.snippet.image {
  height: 100px;
  width: 200px;
  object-fit: cover;
}

.snippet.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 40px;
  color: black;
  text-decoration: none;
}

.snippet.leftAndTitle {
  display: flex;
  flex-direction: row;
}

.snippet.content {
  display: flex;
  flex-direction: row;
  justify-content: left;
  max-width: 100%;
  padding: 10px 0px 10px 0px;
  margin: 0px;
}

.snippet.articlecontent {
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: left;
  padding: 0px 10px 10px 50px;
  margin: 0px;
  height: fit-content;
  font-size: 21px;
  font-weight: 300;
}

.snippet.date {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet.tags {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
  color: black;
}

.stuff {
  box-sizing: border-box; /* required */
  width: 100%; /* required */
  flex: none; /* required */
}
</style>
