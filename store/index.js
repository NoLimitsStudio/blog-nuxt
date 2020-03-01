import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  token: null
})

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts
  },
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  editPost (state, post) {
    const index = state.postsLoaded.findIndex(el => el.id === post.id)
    state.postsLoaded[index] = post
  },
  setToken (state, token) {
    state.token = token
  },
  destroyToken (state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit ({ commit }, context) {
    return axios.get('https://blog-test-f48cd.firebaseio.com/posts.json')
      .then((res) => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({
            ...res.data[key],
            id: key
          })
        }
        commit('setPosts', postsArray)
      })
      // eslint-disable-next-line
      .catch(e => console.log(e))
  },
  authUser ({ commit }, authData) {
    const key = 'AIzaSyBKx2kZmpfijLHIeCsClZrAOw9xzZyHjwo'
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
    // return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => commit('setToken', res.data.idToken))
      // eslint-disable-next-line
      .catch(e => console.log(e))
  },
  logoutUser ({ commit }) {
    commit('destroyToken')
  },
  addPost ({ commit }, post) {
    return axios.post('https://blog-test-f48cd.firebaseio.com/posts.json', post)
      .then(res => commit('addPost', {
        ...post,
        id: res.data.name
      }))
      // eslint-disable-next-line
      .catch(e => console.log(e))
  },
  editPost ({ commit, state }, post) {
    return axios.put(`https://blog-test-f48cd.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then(() => commit('editPost', post))
      // eslint-disable-next-line
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },
  checkAuthUser (state) {
    return state.token != null
  }
}
