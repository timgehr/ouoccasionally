<template>
  <div class="page home">
    <articleSnipBig :article="articles[0]"></articleSnipBig>
    <div v-for="article in articles.slice(1)" v-bind:key="article">
      <articleSnip
        :article="article"
        :leftColor="colors[articles.indexOf(article)]"
        :animDelay="0.2 + articles.indexOf(article) / 4"
      ></articleSnip>
    </div>
  </div>
</template>

<script>
import db from "@/fb";
import articleSnip from "../components/ArticleSnip";
import articleSnipBig from "../components/ArticleSnipBig";

export default {
  name: "Home",
  components: {
    articleSnipBig,
    articleSnip,
  },
  data() {
    return {
      articles: [],
      colors: ["#0f49b4;", "#B82929;", "#1D8F2E;"],
    };
  },
  created() {
    db.collection("article")
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.articles.push(doc.data());
        });
      });
  },
};
</script>

<style>
hr {
  outline: none;
  border: none;
  height: 2px;
  background: rgba(255, 255, 255, 0.137);
  margin-bottom: 20px;
}

.left {
  min-height: 100%;
  transition: 0.5s;
  min-width: 0px;
  animation-delay: 1s;
  animation: removeCovers 1.5s ease backwards;
  z-index: 1;
}

@keyframes removeCovers {
  0% {
    min-width: 100%;
    margin-right: -100%;
  }
  100% {
    min-width: 0px;
    margin-right: 0px;
  }
}
</style>
