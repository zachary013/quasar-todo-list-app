<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        square
        bg-color="white"
        filled
        placeholder="Add Task"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done"
          ><q-btn
            @click="deleteTask(index)"
            flat
            dense
            round
            color="secondary"
            icon="delete"
        /></q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="secondary" />
      <div class="text-h5 text-primary text-center">No tasks</div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  data() {
    return {
      newTask: "",
      tasks: [
        {
          title: "Complete laravel + vue.js project",
          done: false,
        },
        {
          title: "Start Quasar tutorial + simple project",
          done: false,
        },
        {
          title: "Advanced Quasar project",
          done: false,
        },
      ],
    };
  },
  methods: {
    toggleTaskDone(task) {
      task.done = !task.done;
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Do you really want to delete this task?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify("Task deleted successfully");
        });
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false,
      });
      this.newTask = "";
    },
  },
});
</script>

<style lang="scss" >
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5px;
}
</style>
