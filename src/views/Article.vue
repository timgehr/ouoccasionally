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

    db.collection("article")
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

<style>
.articleContent {
  padding-top: 20px;
  width: 100%;
  text-align: left;
}

.page.articlepost {
  text-align: center;
}

.content.articlepost {
  text-align: center;
  margin: auto;
}

.articleTitleTxt {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  width: calc(100% - 0px);
  text-align: left;
  margin: 0px 0px 0px 0px;
  z-index: 2;
}

.articleDate {
  text-align: left;
  margin: 20px 0px 20px 0px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: gray;
}

.articleContent h1 {
  font-size: 24px;
  font-weight: 700;
  text-decoration: underline var(--green);
  padding-top: 30px;
}

.articleContent h2 {
  font-size: 20px;
  font-weight: 700;
}

.articleContent p {
  font-size: 18px;
  font-weight: 100;
  line-height: 28px;
}

.articleContent li {
  font-size: 18px;
  font-weight: 300;
  line-height: 36px;
}

.articleImage {
  margin: 0px !important;
  width: 100% !important;
  max-width: 100% !important;
  height: 300px !important;
  max-height: 300px !important;
  object-fit: cover !important;
}

.articleContent {
  font-family: Georgia, "Times New Roman", Times, serif;
  animation: rideup 2.0s ease, noshow 1.6s ease-in;
}

.articleContent h1 {
  animation: underlineTransition 2s ease-in;
}

blockquote{
  border-left: solid #841617 4px;
  padding-left: 15px;
  font-style: italic;
}

@keyframes underlineTransition {
  from {
    text-decoration: underline transparent;
  }
}

@keyframes noshow {
  from {
    color: transparent;
  }
}

@keyframes rideup {
  from {
    padding-top: 80px;
  }
}

.content.articlepost img {
  display: block;
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-bottom: 100px;
  max-height: 300px;
  object-fit: cover;
}

.content.articlepost strong {
  font-size: 30px;
  display: block;
}
</style>
