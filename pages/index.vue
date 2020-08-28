<template>
  <main>
    <div class="description convex">
      <h2>About</h2>
      <nuxt-content :document="about" />
    </div>
    <div class="products convex">
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
    const about = await $content('about').fetch()
    return { articles, about }
  }
}
</script>
<style>
@media screen and (max-width: 550px) {
  .cards {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .convex {
    margin: 10px;
    border-radius: 25px;
    padding: 25px;
  }
}
@media screen and (max-width: 4000px) {
}
</style>
