<template>
  <section class="auth">
    <div class="container">
      <form class="auth__form" @submit.prevent="onSubmit">
        <AppInput v-model="user.email" type="email">
          Login:
        </AppInput>
        <AppInput v-model="user.password" type="password">
          Password:
        </AppInput>
        <!--        <AppInput type="password">Repeat password:</AppInput>-->
        <div class="controls">
          <AppButton>Sign in</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authUser', this.user)
        .then((res) => {
          this.$router.push('/admin')
          // Reset
          // this.user.email = ''
          // this.user.password = ''
        })
        .catch((e) => {
          // eslint-disable-next-line
          console.log(e)
          // Reset
          this.user.email = ''
          this.user.password = ''
        })
    }
  }
}
</script>

<style lang="scss">
  .auth {
    text-align: center;
  }
  .auth__form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    input {
      min-width: 460px;
    }
  }
</style>
