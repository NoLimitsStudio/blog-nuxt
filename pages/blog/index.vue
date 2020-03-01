<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="container">
      <Intro title="My post:" />
      <!--      posts-->
      <PostsList :posts="posts" />
    </section>
  </div>
</template>

<script>

export default {
  computed: {
    posts () {
      return this.$store.getters.getPostsLoaded
    }
  },
  head () {
    const title = 'Blog Pages'
    const desc = 'My SSR blog pages'
    const type = 'website'

    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:description', name: 'og:description', content: desc },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  }
}
</script>
