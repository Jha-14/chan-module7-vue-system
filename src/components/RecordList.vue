<script setup>
defineProps({
  tasks: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <section class="rounded-xl bg-white p-6 shadow">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="text-xl font-bold text-gray-800">
          Task List
        </h2>

        <p class="mt-1 text-sm text-gray-500">
          All of your academic tasks are shown below.
        </p>
      </div>

      <span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        {{ tasks.length }} task{{ tasks.length === 1 ? '' : 's' }}
      </span>
    </div>

    <!-- No tasks -->
    <div
      v-if="tasks.length === 0"
      class="rounded-lg bg-gray-100 p-8 text-center"
    >
      <p class="text-gray-500">
        No tasks found.
      </p>
    </div>

    <!-- Task cards -->
    <div v-else class="space-y-4">
      <article
        v-for="task in tasks"
        :key="task.id"
        class="rounded-lg border border-gray-200 p-5"
      >
        <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

          <!-- Task information -->
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-bold text-gray-800">
                {{ task.taskTitle }}
              </h3>

              <span
                class="rounded-full px-3 py-1 text-xs font-medium"
                :class="
                  task.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                "
              >
                {{ task.status }}
              </span>

              <span
                class="rounded-full px-3 py-1 text-xs font-medium"
                :class="
                  task.priority === 'High'
                    ? 'bg-red-100 text-red-700'
                    : task.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                "
              >
                {{ task.priority }} Priority
              </span>
            </div>

            <p class="mt-2 text-sm font-medium text-blue-600">
              {{ task.subject }}
            </p>

            <p
              v-if="task.description"
              class="mt-2 text-sm text-gray-600"
            >
              {{ task.description }}
            </p>

            <p class="mt-3 text-sm text-gray-500">
              Due Date:
              <span class="font-medium text-gray-700">
                {{ task.dueDate }}
              </span>
            </p>
          </div>

          <!-- Actions -->
          <div class="flex shrink-0 gap-2">
            <button
              type="button"
              @click="emit('edit', task)"
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Edit
            </button>

            <button
              type="button"
              @click="emit('delete', task.id)"
              class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>

        </div>
      </article>
    </div>
  </section>
</template>