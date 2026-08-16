<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  editingTask: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel'])

const taskTitle = ref('')
const subject = ref('')
const description = ref('')
const dueDate = ref('')
const priority = ref('Medium')
const status = ref('Pending')
const errorMessage = ref('')

watch(
  () => props.editingTask,
  (task) => {
    if (task) {
      taskTitle.value = task.taskTitle
      subject.value = task.subject
      description.value = task.description
      dueDate.value = task.dueDate
      priority.value = task.priority
      status.value = task.status
      errorMessage.value = ''
    } else {
      clearForm()
    }
  },
  { immediate: true }
)

function submitForm() {
  if (!taskTitle.value.trim() || !subject.value.trim() || !dueDate.value) {
    errorMessage.value = 'Please complete all required fields.'
    return
  }

  emit('save', {
    taskTitle: taskTitle.value.trim(),
    subject: subject.value.trim(),
    description: description.value.trim(),
    dueDate: dueDate.value,
    priority: priority.value,
    status: status.value
  })

  clearForm()
}

function clearForm() {
  taskTitle.value = ''
  subject.value = ''
  description.value = ''
  dueDate.value = ''
  priority.value = 'Medium'
  status.value = 'Pending'
  errorMessage.value = ''
}
</script>

<template>
  <section class="rounded-xl bg-white p-6 shadow">
    <div class="mb-5">
      <h2 class="text-xl font-bold text-gray-800">
        {{ editingTask ? 'Edit Task' : 'Add New Task' }}
      </h2>

      <p class="mt-1 text-sm text-gray-500">
        Enter the task information below.
      </p>
    </div>

    <div
      v-if="errorMessage"
      class="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700"
    >
      {{ errorMessage }}
    </div>

    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">
          Task Title *
        </label>

        <input
          v-model="taskTitle"
          type="text"
          placeholder="Enter task title"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">
          Subject *
        </label>

        <input
          v-model="subject"
          type="text"
          placeholder="Enter subject"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label class="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          v-model="description"
          rows="3"
          placeholder="Enter task description"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            Due Date *
          </label>

          <input
            v-model="dueDate"
            type="date"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            Priority
          </label>

          <select
            v-model="priority"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            Status
          </label>

          <select
            v-model="status"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          class="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          {{ editingTask ? 'Update Task' : 'Add Task' }}
        </button>

        <button
          v-if="editingTask"
          type="button"
          @click="emit('cancel')"
          class="rounded-lg bg-gray-200 px-5 py-2 font-medium text-gray-700 hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  </section>
</template>