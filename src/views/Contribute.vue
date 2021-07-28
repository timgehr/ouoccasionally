<template>
  <div class="page contribute">
    <h1>Contribute</h1>
    <p>
      If you have an idea for an article, please DM us on twitter and we would
      love to collaborate with you! We aren't nearly funny enough to keep this
      going.
    </p>
    <a
      href="https://twitter.com/OUOccasionally?ref_src=twsrc%5Etfw"
      class="twitter-follow-button"
      data-size="large"
      data-show-count="false"
      >Follow @OUOccasionally</a
    >
  </div>
</template>

<script>
export default {
  mounted() {
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
  },
};
</script>