<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in deletedTasks"
        :key="task.title"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            @click="restoreTask(task, index)"
            flat
            round
            dense
            color="primary"
            icon="restore"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!deletedTasks.length" class="no-tasks absolute-center">
      <q-icon name="delete_forever" size="100px" color="secondary" />
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { store } from "src/store";

const deletedTasks = computed(() => store.deletedTasks);

const restoreTask = (task, index) => {
  store.tasks.unshift(task);
  store.deletedTasks.splice(index, 1);
};
</script>

<style lang="scss">
.no-ttasks {
  opacity: 0.5px;
}
</style>
