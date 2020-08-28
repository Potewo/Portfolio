<template>
  <article class="convex">
    <img :src="'images/' + article.image">
    <nuxt-content :document="article" />
  </article>
</template>

<style>
article > img {
  width: 80%;
}
article > * {
  overflow-wrap: break-word;
}
</style>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug || 'index').fetch()
    return { article }
  }
}
</script>
