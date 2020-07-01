<template>
  <section class="home">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </section>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>

<style lang="sass" scoped>
.home
  max-width: 700px
  margin: auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    border-bottom: 1px solid #DADADA
</style>
