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
        <!--        <AppTextarea v-model="post.content">-->
        <!--          Content-->
        <!--        </AppTextarea>-->
        <div class="texteditor">
          <label>Content</label>
          <prism-editor v-model="post.content" :code="code" language="html" />
        </div>
        <div class="controls">
          <div class="btn btnSuccess" @click="status = !status">
            Preview
          </div>
          <div class="btn btnDanger" @click="cancel">
            Cancel
          </div>
          <AppButton>
            Save
          </AppButton>
        </div>
      </form>
      <app-preview :post-content="post.content" :status="status" @status="status = $event" />
    </div>
  </section>
</template>

<script>
import PrismEditor from 'vue-prism-editor'
import AppPreview from '@/components/Admin/Preview'
import 'vue-prism-editor/dist/VuePrismEditor.css'

export default {
  components: {
    AppPreview,
    PrismEditor
  },
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
      },
      code: '',
      status: false
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

<style lang="scss">
  .controls {
    text-align: center;
    margin: 20px 0;
  }
  .texteditor {
    min-height: 80px;
  }
  .prism-editor__code {
    min-height: 80px;
    border-radius: 20px;
    border: 1px solid RGB(220, 223, 230);
  }
  pre[class*="language-"] {
    background-color: #fff;
  }
</style>
