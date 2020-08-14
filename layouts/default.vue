<template>
  <div>
    <header>Potewo's Portfolio</header>
    <Nuxt />
  </div>
</template>

<style>

body {
  background-color: #78CDD7;
  margin: 20px;
}

header {
  font-size: 50px;
  margin-left: 20px;
}

.convex {
  margin: 20px;
  border-radius: 50px;
  background: #78CDD7;
  box-shadow: 20px 20px 60px #66aeb7, -20px -20px 60px #8aecf7;
  padding: 50px;
}

.cards {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
}

.card {
  margin: 20px;
  padding: 50px;
}

.card .cards {
  margin: 20px;
  padding: 20px;
}

.cards a {
  text-decoration: none;
  color: black;
}

div.image {
  width: 100%;
  position: relative;
}

div.image::before {
  content: "";
  display: block;
  padding-top: 100%;
}

div.image img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
}

</style>
