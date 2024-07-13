<template>
  <q-page class="q-pa-md">
    <div class="calendar-header">
      <q-btn @click="today" label="Today" color="primary" />
      <q-select
        v-model="currentView"
        :options="views"
        dense
        outlined
        color="primary"
        class="view-select"
      />
      <q-btn @click="syncCalendar" label="Sync Calendar" color="primary" />
    </div>
    <div class="calendar-container">
      <vue-cal
        v-model="selectedDate"
        :events="events"
        :time="false"
        @event-click="onEventClick"
        locale="en"
        :disable-views="['years', 'year']"
        class="vue-cal"
        style="height: 600px"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const selectedDate = ref(new Date());
const currentView = ref("month");
const views = ["day", "week", "month"];
const events = ref([
  {
    start: "2024-07-12",
    end: "2024-07-12",
    title: "Black Box Testing",
    content: "",
    class: "green-event",
  },
  {
    start: "2024-07-13",
    end: "2024-07-14",
    title: "Design Wireframe",
    content: "",
    class: "blue-event",
  },
  {
    start: "2024-07-15",
    end: "2024-07-18",
    title: "User Interface Design",
    content: "",
    class: "red-event",
  },
  {
    start: "2024-07-20",
    end: "2024-07-20",
    title: "PSD to HTML Conversion",
    content: "",
    class: "orange-event",
  },
]);

const onEventClick = (event) => {
  console.log("Event clicked:", event);
};

const syncCalendar = () => {
  console.log("Syncing calendar...");
};

const today = () => {
  selectedDate.value = new Date();
};
</script>

<style scoped>
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.view-select {
  width: 150px;
}

.calendar-container {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.vue-cal {
  --vuecal-bg: #ffffff;
  --vuecal-border: #dee2e6;
  --vuecal-color-text: #343a40;
  --vuecal-header-bg: #007bff;
  --vuecal-header-text: #ffffff;
  --vuecal-color-primary: #007bff;
  --vuecal-color-secondary: #6c757d;
}

.green-event {
  background-color: #28a745 !important;
  border-color: #28a745 !important;
  color: #ffffff !important;
}

.blue-event {
  background-color: #007bff !important;
  border-color: #007bff !important;
  color: #ffffff !important;
}

.red-event {
  background-color: #dc3545 !important;
  border-color: #dc3545 !important;
  color: #ffffff !important;
}

.orange-event {
  background-color: #fd7e14 !important;
  border-color: #fd7e14 !important;
  color: #ffffff !important;
}
</style>
