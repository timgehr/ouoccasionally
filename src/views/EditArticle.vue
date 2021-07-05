<template>
  <div class="page makearticlepost">
    <div class="content makearticlepost">
      <div class="articleContainer" id="articleEditor">
        <input
          id="article_URL"
          class="article imageURL"
          placeholder="Create a custom post url e.g. roof-replacement-quotes"
          v-model="myPostID"
        />
        <input
          id="article_imageURL"
          class="article imageURL"
          placeholder="Paste image URL here"
        />
        <input
          id="article_tags"
          class="article tags"
          placeholder="Enter, tags, like, this"
        />
        <input
          id="article_title"
          class="article title"
          placeholder="Post Title"
        />
        <textarea
          id="article_content"
          class="article markdown"
          placeholder="article content goes here

Type a header like #this

Type a sub-header like ##this

to make a link [put your text here](and your link here)

to make a list
* use
* these
* stars"
        ></textarea>
      </div>
      <button class="big-button" v-on:click="publish">Publish article</button>
      <br />
      <a
        href="https://guides.github.com/features/mastering-markdown/"
        class="mdGuide"
        style="line-height: 40px"
        >Click here for a guide on using markdown</a
      >
    </div>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      myPostID: this.$route.params.id,
      id: this.$route.params.id,
    };
  },
  methods: {
    publish() {
      const imageURL = document.getElementById("article_imageURL");
      const tags = document.getElementById("article_tags");
      const title = document.getElementById("article_title");
      const content = document.getElementById("article_content");

      db.collection("articles")
        .doc(this.myPostID)
        .set({
          id: this.myPostID,
          title: title.value,
          date: new Date().toLocaleDateString(),
          content: content.value,
          image: imageURL.value,
          tags: tags.value.split(", "),
        })
        .then(function () {
          console.log("Document written with ID: ", this.myPostID);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },
  },
  mounted() {
    document.getElementById("article_URL").value = this.id;
    const imageURL = document.getElementById("article_imageURL");
    const tags = document.getElementById("article_tags");
    const title = document.getElementById("article_title");
    const content = document.getElementById("article_content");

    function renderArticle(doc) {
      if (doc.title !== undefined) {
        imageURL.value = doc.image;
        tags.value = doc.tags.join(", ");
        title.value = doc.title;
        content.value = doc.content;
      }
    }

    db.collection("articles")
      .doc(this.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("article retrieved");
          renderArticle(doc.data());
        } else {
          console.log("No such document!");
        }
      });
  },
};
</script>

<style>
#publish .append {
  font-weight: 400px;
  font-size: 12px;
  color: rgb(0, 173, 78);
  background: none;
  border: none;
}
.append:focus {
  outline: none;
}
.append:hover {
  cursor: pointer;
  color: rgb(0, 216, 97);
}

.articleContainer {
  text-align: left;
}

.article {
  border: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.article:focus {
  outline: 0px;
}

.articleContainer:focus {
  outline: 0px;
}

.article.title {
  text-align: center;
  font-size: 45px;
  font-weight: 700;
}

.article.markdown {
  font-size: 16px;
  min-height: 1000px;
  resize: none;
}

::placeholder {
  color: rgb(180, 180, 180);
}

:-ms-input-placeholder {
  color: rgb(180, 180, 180);
}

::-ms-input-placeholder {
  color: rgb(180, 180, 180);
}
</style>
