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
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple
        @mouseover="task.hover = true"
        @mouseleave="task.hover = false"
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            @update:model-value="handleTaskCheck(task, index)"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section side v-if="task.hover">
          <div class="button-group">
            <q-btn
              @click="deleteTask(index)"
              flat
              dense
              round
              color="secondary"
              icon="delete"
            />
            <q-btn
              flat
              dense
              round
              color="warning"
              icon="star"
              @click="markAsImportant(task, index)"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="secondary" />
      <div class="text-h5 text-primary text-center">No tasks</div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { store } from "src/store";
import { useRouter } from "vue-router";

const tasks = computed(() => store.tasks);
const newTask = ref("");
const router = useRouter();

const handleTaskCheck = (task, index) => {
  if (task.done) {
    setTimeout(() => {
      toggleTaskDone(task, index);
    }, 1000);
  }
};

const toggleTaskDone = (task, index) => {
  if (task.done) {
    store.completedTasks.unshift(task); // Add to the beginning of the array
    store.tasks.splice(index, 1);
  }
};

const deleteTask = (index) => {
  store.deletedTasks.unshift(store.tasks[index]);
  store.tasks.splice(index, 1);
};

const addTask = () => {
  if (newTask.value.trim()) {
    store.tasks.push({
      title: newTask.value.trim(),
      done: false,
      hover: false, // Add hover property to each task
    });
    newTask.value = "";
  }
};

const markAsImportant = (task, index) => {
  store.importantTasks.unshift(task); // Add to the beginning of the array
  store.tasks.splice(index, 1);
  // Removed the router.push("/important") line to stay on the same page
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}

.no-tasks {
  opacity: 0.5px;
}

.button-group {
  display: flex;
  gap: 8px; /* Adjust the gap as needed */
}
</style>
