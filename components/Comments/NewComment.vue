<template>
  <section class="new-comment">
    <div class="container">
      <!--      message-->
      <Message v-if="message" :message="message" />
      <form class="contact-form" @submit.prevent="onSubmit">
        <!--        name-->
        <AppInput v-model="comment.name">
          Name:
        </AppInput>
        <!--        textarea-->
        <AppTextarea v-model="comment.text">
          Text:
        </AppTextarea>
        <!--        buttons-->
        <div class="controls">
          <AppButton>
            Post comment
          </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data: () => ({
    message: null,
    comment: {
      name: '',
      text: ''
    }
  }),
  methods: {
    onSubmit () {
      const comment = {
        postId: this.postId,
        publish: false,
        ...this.comment
      }
      return axios.post('https://blog-test-f48cd.firebaseio.com/comments.json', comment)
        .then(() => {
          this.comment.name = ''
          this.comment.text = ''
          this.message = 'Commented!'
        })
        // eslint-disable-next-line
        .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="scss">
  .new-comment {
    text-align: center;
    .contact-form {
      max-width: 600px;
      margin: 30px auto;
    }
    .controls {
      margin: 30px 0;
    }
  }
</style>
