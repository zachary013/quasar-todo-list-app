const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/TasksPage.vue") },
      {
        path: "/important",
        component: () => import("src/pages/ImportantPage.vue"),
      },
      {
        path: "/calendar",
        component: () => import("src/pages/CalPage.vue"),
      },
      {
        path: "/help",
        component: () => import("src/pages/HelpPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;