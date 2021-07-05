<template>
  <div class="splitPage makearticlepost">
    <div class="content makearticlepost">
      <button class="big-button" v-on:click="publish">Publish article</button>
      <button
        class="big-button"
        style="background: rgb(100, 35, 35)"
        v-on:click="deleteArticle"
      >
        Delete article
      </button>
      <a
        href="https://guides.github.com/features/mastering-markdown/"
        class="mdGuide"
        style="line-height: 40px"
        >Click here for a guide on using markdown</a
      >
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
        <textarea
          id="article_title"
          class="article title"
          placeholder="Post Title"
        />
        <textarea
          id="article_content"
          oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
          class="article markdown"
          placeholder="article content goes here"
        ></textarea>
      </div>
    </div>
    <div
      id="articlePreview"
      class="articleContent"
      style="padding-top: 0px"
    ></div>
  </div>
</template>

<script>
import db from "@/fb";
import { markdown } from "markdown";

export default {
  data() {
    return {
      myPostID: this.$route.params.id,
      id: this.$route.params.id,
    };
  },
  components: {},
  methods: {
    updatePreview() {
      document.getElementById("articlePreview").innerHTML = markdown.toHTML(
        document.getElementById("article_content").value
      );
    },
    publish() {
      const imageURL = document.getElementById("article_imageURL");
      const tags = document.getElementById("article_tags");
      const title = document.getElementById("article_title");
      const content = document.getElementById("article_content");

      db.collection("article")
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
    deleteArticle() {
      var response = prompt(
        'Are you sure you want to delete? Confirm by entering "yes"'
      );
      if (response === "yes") {
        db.collection("article").doc(this.myPostID).delete();
      }
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

    db.collection("article")
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

    this.updatePreview();

    document
      .getElementById("article_content")
      .addEventListener("input", this.updatePreview);
  },
};
</script>

<style>
.splitPage {
  display: flex;
  flex-direction: row;
  margin-left: 5%;
}

.content.makearticlepost,
#articlePreview {
  max-width: 45%;
  margin-right: 5%;
}

#articlePreview {
}

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
  background: rgb(39, 39, 39);
  color: white;
}

.article:focus {
  outline: 0px;
}

.articleContainer:focus {
  outline: 0px;
}

.article.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  font-family: "JetBrains Mono", monospace;
}

.article.markdown {
  font-size: 16px;
  height: 100%;
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

.big-button {
  height: 40px;
  width: 200px;
  font-size: 16px;
  font-family: "JetBrains Mono", monospace;
  font-weight: 400;
  background: rgb(87, 87, 87);
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  margin: 10px 20px 10px 0px;
}

.big-button:hover {
  cursor: pointer;
}

.big-button:active {
  background: rgb(65, 65, 65);
}
</style>
