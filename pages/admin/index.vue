<template>
  <PostsList :admin="true" :posts="posts" />
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    posts () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style lang="scss">

</style>
