<template>
  <transition name="fade">
    <div v-if="status" class="preview">
      <div class="container">
        <vue-markdown>{{ postContent }}</vue-markdown>
      </div>
      <div class="btn btnPrimary" @click="$emit('status', false)">
        Close
      </div>
    </div>
  </transition>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  props: [
    'postContent',
    'status'
  ],
  data: () => ({
    test: '# Example'
  }),
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.preview {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
}
.container {
  height: 80vh;
  width: 70vw;
  padding: 4rem 2rem;
  background-color: #e9e9e9;
  border: 1px solid #c0c0c0;
  border-radius: 25px;
  margin-bottom: 1.5rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
