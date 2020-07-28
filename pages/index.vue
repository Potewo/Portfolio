<template>
  <main>
    <div class="products">
      <h2>Products</h2>
      <div class="cards">
        <nuxt-link v-for="article in articles" :key="article.slug" :to="article.slug">
          <div class="card convex">
            <div class="image">
              <img :src="'images/' + article.image">
            </div>
            <h2>{{ article.title }}</h2>
          </div>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles').fetch()
    return { articles }
  }
}
</script>
<style>
</style>
