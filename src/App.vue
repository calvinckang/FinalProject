<!-- <script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions } from 'pinia';
import UserStore from '@/stores/user.js';

export default {
  name: 'App',
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    ...mapActions(UserStore, ['fetchUser'])
  },
  async created() {
    await this.fetchUser()
  }
}
</script> -->

<template>
  <div class="container">
    <header>
      <span>✏️</span>
      <h1>To Do List</h1>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/auth/sign-in">Sign In</RouterLink>
          <RouterLink to="/auth/sign-up">Sign Up</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  text-align: center;
  margin: 16px auto 80px auto;
}

span {
  font-size: 48px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 12px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>