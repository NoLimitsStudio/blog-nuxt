<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="container">
      <promo />
      <Intro title="My last posts:" />
      <!--      posts-->
      <PostsList :posts="posts" />
    </section>
    <contacts />
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default {
  components: {
    contacts,
    promo
  },
  computed: {
    posts () {
      return this.$store.getters.getPostsLoaded
    }
  },
  head () {
    const title = 'My SSR blog'
    const desc = 'My SSR blog with Nuxt.js'
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
