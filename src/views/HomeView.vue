<template>
  <main>
    <div class="task-container">
      <p v-for="todo in tasks" :key="todo.id">{{ todo.title }}</p>
      <button @click="_addNewTask({ title: 'New task', userId: this.user.id })">Create New Task</button>
    </div>
    <button class="btn-secondary" @click="_handleLogOut">Log Out</button>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user';
import taskStore from '@/stores/task';
// import TaskList from '@/components/TaskList.vue';
// import TaskListActions from '@/components/TaskListActions.vue';

export default {
  name: 'HomeView',
  // components: {
  //   TaskList,
  //   TaskListActions,
  // },
  data() {
    return {
      newTaskTitle: '',
    }
  },
  computed: {
    ...mapState(userStore, ['user']),
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    ...mapActions(taskStore, ['_addNewTask', '_fetchTasks']),
    async _handleLogOut() {
      try {
        await this.signOut()
        this.$router.push({ name: 'signIn' })
      } catch(err) {
        console.error(err)
      }
    },
  },
  created() {
    this._fetchTasks()
  }
}
</script>

<style>
main, div {
  display: flex;
  flex-direction: column;
}
</style>