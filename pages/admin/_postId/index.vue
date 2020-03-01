<template>
  <new-post-form
    :post-edit="post"
    @save="save"
  />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
  components: {
    newPostForm
  },
  layout: 'admin',
  async asyncData (context) {
    const { data } = await axios.get(`https://blog-test-f48cd.firebaseio.com/posts/${context.params.postId}.json`)
    return { post: { ...data, id: context.params.postId } }
  },
  methods: {
    save (post) {
      this.$store.dispatch('editPost', post)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style lang="scss">

</style>
