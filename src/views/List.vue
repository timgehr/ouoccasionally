<template>
  <div class="page articlepost">
    <div class="content articlepost" id="thisarticle"></div>
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-text="@OUOccasionally "
      data-show-count="false"
      >Tweet</a
    >
  </div>
</template>

<script>
import db from "@/fb";
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: {
        title: "No Such article Exists",
        content:
          "<p> Sorry, but the article you're looking for does not exist.</p>",
        date: null,
      },
    };
  },
  methods: {},
  mounted() {
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
    var showdown = require("showdown");
    var converter = new showdown.Converter();

    const article = document.getElementById("thisarticle");

    function renderArticle(doc) {
      if (doc.title !== undefined) {
        const content = document.createElement("div");
        content.setAttribute("class", "articleContent");
        const title = document.createElement("h1");
        const image = document.createElement("img");
        image.setAttribute("src", doc.image);
        image.setAttribute("class", "articleImage");
        title.setAttribute("class", "articleTitleTxt");
        title.innerText = doc.title;
        content.innerHTML = converter.makeHtml(
          doc.content.replaceAll("\\n", "\n\n")
        );
        const date = document.createElement("div");
        date.setAttribute("class", "articleDate");
        date.innerText = doc.date;
        const tags = document.createElement("tags");
        tags.innerHTML = doc.tags;
        article.append(title);
        article.append(date);
        article.append(image);
        article.append(content);
      }
    }

    db.collection("list")
      .doc(this.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("article retrieved");
          console.log(doc.data());
          renderArticle(doc.data());
        } else {
          console.log("No such document!");
        }
        renderArticle(doc);
      });
  },
};
</script>

<style scoped>
.articleImage {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin: none;
}

img {
  width: 60%;
  margin: auto;
  height: 200;
  object-fit: cover;
}
</style>
