<template>
  <div class="snippet fullsnip">
    <router-link class="snippet title" :to="this.article.id"
      >{{ this.article.title }}
      <div class="snippet content">
        <img class="snippet image" :src="this.article.image" />
        <div class="snippet articlecontent" style="overflow: hidden">
          {{ article.content.split(" ").splice(0, 30).join(" ") }}...
        </div>
      </div>
      <h3 class="snippet date">Posted on {{ this.article.date }}</h3>
      <p class="snippet tags">
        Tags:
        <a v-for="tag in this.article.tags" :key="tag">{{ tag }}, </a>
      </p></router-link
    >
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
  margin-top: 15px;
  padding-bottom: 10px;
  text-align: left;
  transition: 0.5s;
  border-bottom: solid #cccccc 0.5px;
}

.snippet.fullsnip:hover {
  margin-top: 10px;
  padding-bottom: 15px;
}

.snippet.image {
  height: 100%;
  width: 100px;
  object-fit: cover;
}

.snippet.title {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 700;
  font-size: 20px;
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
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: left;
  padding: 0px 10px 10px 10px;
  margin: 0px;
  height: fit-content;
  font-size: calc(10px + 1vw);
  font-weight: 300;
}

.snippet.date {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 10px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet.tags {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 10px;
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

@media screen and (min-width: 769px) {
  .snippet.title {
    font-size: 28px;
  }
  .snippet.image {
    height: 150px;
    width: 100%;
  }
  .snippet.articlecontent {
    padding-left: 25px;
  }
}

@media screen and (min-width: 1024px) {
  .snippet.title {
    font-size: 34px;
  }
  .snippet.image {
    height: 200px;
    width: 50%;
  }
  .snippet.articlecontent {
    padding-left: 50px;
    font-size: 26px;
    width: 50%;
  }
}
</style>
