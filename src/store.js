// src/store/index.js

import { reactive } from "vue";

export const store = reactive({
  tasks: [],
  completedTasks: [],
  importantTasks: [], // Add this line
  deletedTasks: [], // Add this line
});
