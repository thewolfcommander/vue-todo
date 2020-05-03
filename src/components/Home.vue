<template>
  <div class="home container-fluid">
    <div class="row">
      <form class="form-inline mx-auto my-4">
        <input
          type="text"
          name="search"
          class="form-control mb-2 mr-sm-2"
          id="search"
          placeholder="Type something to search ..."
          v-model="search"
        />
      </form>
    </div>
    <center>
      <span class="btn btn-warning">
        <router-link :to="{name: 'AddTodo' }">Add a new Task</router-link>
      </span>
    </center>
    <div class="col-md-6 col-sm-12 col-12 task-container mt-5">
      <div class="row justify-content-center">
        <div class="card w-100" v-for="todo in tasks" :key="todo.id">
          <div class="card-body text-info">
            {{ todo.task }}
            <!-- <span class="complete">
              <i class="material-icons">edit</i>
            </span>-->
            <span class="delete">
              <i class="material-icons" @click="deleteTask(todo.id)">delete</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Home",
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    callGetApi() {
      db.collection("tasks")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let task = doc.data();
            task.id = doc.id;
            this.tasks.push(task);
          });
        });
    },
    deleteTask(id) {
      db.collection("tasks")
        .doc(id)
        .delete();
      this.tasks = this.tasks.filter(task => task.id != id);
    }
  },
  created() {
    this.callGetApi();
  }
};
</script>


<style>
.home .task-container {
  position: relative;
  left: 25%;
}

.home .card-body {
  position: relative;
}

.home .complete {
  color: green;
  cursor: pointer;
  position: absolute;
  right: 40px;
}

.home .delete {
  color: #444;
  cursor: pointer;
  position: absolute;
  right: 10px;
}

.home .complete:hover,
.home .complete:active,
.home .delete:hover,
.home .delete:active {
  color: #e25226;
  cursor: pointer;
}
</style>
