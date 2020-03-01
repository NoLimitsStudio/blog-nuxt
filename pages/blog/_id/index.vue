<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment :post-id="$route.params.id" />
  </div>
</template>

<script>
import axios from 'axios'
import post from '@/components/Blog/Post'
import Comments from '@/components/Comments/Comments'
import NewComment from '@/components/Comments/NewComment'

export default {
  components: {
    Comments,
    NewComment,
    post
  },
  async asyncData (context) {
    const [posts, comments] = await Promise.all([
      axios.get(`https://blog-test-f48cd.firebaseio.com/posts/${context.params.id}.json`),
      axios.get('https://blog-test-f48cd.firebaseio.com/comments.json')
    ])
    const commentsArray = Object.values(comments.data).filter(comment => (comment.postId === context.params.id) && comment.publish
    )
    return {
      post: posts.data,
      comments: commentsArray
    }
  },
  head () {
    const title = this.post.title
    const desc = this.post.descr
    const type = 'article'
    const img = `site.com/${this.post.img}`

    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:description', name: 'og:description', content: desc },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img }
      ]
    }
  }
}
</script>

<style lang="scss">
  .post {
    max-width: 900px;
    margin: 0 auto;
  }

  .post-header {
    text-align: center;
    margin-bottom: 30px;

    img {
      margin-bottom: 16px;
      max-width: 400px;
    }

    p {
      color: #999999;
    }
  }

  .post-body {
    text-align: left;
  }
</style>
