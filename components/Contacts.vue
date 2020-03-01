<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">
        Contact me!
      </h2>
      <!--      message-->
      <Message v-if="message" :message="message" />
      <form class="contact-form" @submit.prevent="onSubmit">
        <!--        name-->
        <AppInput v-model="user.name">
          Name:
        </AppInput>
        <!--        email-->
        <AppInput v-model="user.email" type="email">
          Email:
        </AppInput>
        <!--        textarea-->
        <AppTextarea v-model="user.text">
          Text:
        </AppTextarea>
        <!--        buttons-->
        <div class="controls">
          <AppButton btn-class="btnWhite">
            Submit!
          </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    message: null,
    user: {
      name: '',
      email: '',
      text: ''
    }
  }),
  methods: {
    onSubmit () {
      // eslint-disable-next-line no-console
      console.log(this.user)
      this.message = 'Submited!'
    }
  }
}
</script>

<style lang="scss">
  .contact {
    text-align: center;
    background-color: #4f68f4;
    color: white;
    .title {
      color: white;
    }
    .contact-form {
      max-width: 600px;
      margin: 30px auto;
    }
    .controls {
      margin: 30px 0;
    }
  }
</style>
