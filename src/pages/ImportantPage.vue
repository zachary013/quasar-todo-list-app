<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in importantTasks"
        :key="task.title"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            @click="deleteTask(index)"
            flat
            round
            dense
            color="secondary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!importantTasks.length" class="no-tasks absolute-center">
      <q-icon size="100px" color="secondary" />
      <div class="text-h5 text-primary text-center">No important tasks</div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { store } from "src/store";

const importantTasks = computed(() => store.importantTasks);

const deleteTask = (index) => {
  store.deletedTasks.unshift(store.importantTasks[index]);
  store.importantTasks.splice(index, 1);
};
</script>

<style lang="scss">
.no-tasks {
  opacity: 0.5px;
}
</style>
