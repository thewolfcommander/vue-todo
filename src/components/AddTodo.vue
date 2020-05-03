<template>
  <div class="add-todo">
    <div class="row justify-content-center">
      <form class="form-inline mx-auto my-4" @submit.prevent="addTask">
        <div class="form-group mb-2">
          <input type="text" class="form-control rounded-0 w-100 mt-5" id="task" placeholder="Press enter to submit..." v-model="task" />
          <small class="text-muted" v-if="task">Press Enter to add: <strong class="text-success">{{ task }}</strong></small>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: "AddTodo",
  data() {
    return {
        task: null
    };
  },
  methods: {
      addTask() {
          db.collection('tasks').add({
              task: this.task,
          }).then(
              this.$router.push({name: 'Home'})
          ).catch(
              console.log("Fauked")
          )
      }
  }
};
</script>


<style>

.add-todo {
    position: relative;
    margin-bottom: 70px;
}
</style>