<template>
  <no-ssr>
    <componentTable
      :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']"
    >
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td>
            <span>{{ comment.name }}</span>
          </td>
          <td>
            <span>{{ comment.text }}</span>
          </td>
          <td>
            <span class="status" :class="{true: comment.publish, false: !comment.publish}">{{ comment.publish ? 'Published' : 'Hidden' }}</span>
          </td>
          <td>
            <span class="link" @click="changeComment(comment)">Change status</span>
          </td>
          <td>
            <span class="link" @click="deleteComment(comment.id)">Delete</span>
          </td>
        </tr>
      </tbody>
    </componentTable>
  </no-ssr>
</template>

<script>
import axios from 'axios'
import componentTable from '@/components/Admin/CommentTable.vue'
export default {
  components: { componentTable },
  layout: 'admin',
  data: () => ({
    comments: [
    ]
  }),
  mounted () {
    this.loadComments()
  },
  methods: {
    loadComments () {
      axios.get('https://blog-test-f48cd.firebaseio.com/comments.json')
        .then((res) => {
          const commentsArray = []
          Object.keys(res.data).forEach((key) => {
            commentsArray.push({ ...res.data[key], id: key })
          })
          this.comments = commentsArray
        })
    },
    changeComment (e) {
      e.publish = !e.publish
      axios.put(`https://blog-test-f48cd.firebaseio.com/comments/${e.id}.json`, e)
    },
    deleteComment (e) {
      // eslint-disable-next-line no-console
      axios.delete(`https://blog-test-f48cd.firebaseio.com/comments/${e}.json`)
        .then(() => this.loadComments())
    }
  }
}
</script>

<style lang="scss">

</style>
