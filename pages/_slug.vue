<template>
  <article class="convex">
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug || 'index').fetch()
    return { article }
  }
}
</script>
