<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="save">
        <AppInput v-model="post.title">
          Title
        </AppInput>
        <AppInput v-model="post.descr">
          Description
        </AppInput>
        <AppInput v-model="post.img">
          Image
        </AppInput>
        <AppTextarea v-model="post.content">
          Content
        </AppTextarea>
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">
            Cancel
          </div>
          <AppButton>
            Save
          </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    save () {
      // eslint-disable-next-line no-console
      console.log('Start')
      this.$emit('save', this.post)
    },
    cancel () {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>
  .controls {
    text-align: center;
    margin: 20px 0;
  }
</style>
