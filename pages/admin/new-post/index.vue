<template>
  <new-post-form @save="save" />
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
  components: {
    newPostForm
  },
  layout: 'admin',
  methods: {
    save (post) {
      this.$store.dispatch('addPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style lang="scss">

</style>
