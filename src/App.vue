<script setup>
import { ref, computed, onMounted } from 'vue'

import AppHeader from './components/AppHeader.vue'
import RecordForm from './components/RecordForm.vue'
import RecordList from './components/RecordList.vue'
import AppFooter from './components/AppFooter.vue'

const tasks = ref([])
const searchTerm = ref('')
const editingTask = ref(null)
const message = ref('')
const messageType = ref('success')

onMounted(() => {
  const savedTasks = localStorage.getItem('module7-tasks')

  tasks.value = savedTasks ? JSON.parse(savedTasks) : []
})

function saveTasks() {
  localStorage.setItem(
    'module7-tasks',
    JSON.stringify(tasks.value)
  )
}

function showMessage(text, type = 'success') {
  message.value = text
  messageType.value = type

  setTimeout(() => {
    message.value = ''
  }, 3000)
}

function addTask(newTask) {
  tasks.value.push({
    id: Date.now(),
    ...newTask
  })

  saveTasks()

  showMessage('Task successfully added!')
}

function updateTask(updatedTask) {
  const index = tasks.value.findIndex(
    task => task.id === editingTask.value.id
  )

  if (index !== -1) {
    tasks.value[index] = {
      id: editingTask.value.id,
      ...updatedTask
    }

    saveTasks()

    editingTask.value = null

    showMessage('Task successfully updated!')
  }
}

function saveTask(task) {
  if (editingTask.value) {
    updateTask(task)
  } else {
    addTask(task)
  }
}

function editTask(task) {
  editingTask.value = { ...task }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function cancelEdit() {
  editingTask.value = null
}

function deleteTask(id) {
  const confirmed = window.confirm(
    'Are you sure you want to delete this task?'
  )

  if (!confirmed) return

  tasks.value = tasks.value.filter(
    task => task.id !== id
  )

  saveTasks()

  showMessage('Task successfully deleted!')
}

const filteredTasks = computed(() => {
  const keyword = searchTerm.value.toLowerCase().trim()

  if (!keyword) {
    return tasks.value
  }

  return tasks.value.filter(task =>
    task.taskTitle.toLowerCase().includes(keyword) ||
    task.subject.toLowerCase().includes(keyword)
  )
})

const totalTasks = computed(() => tasks.value.length)

const completedTasks = computed(() =>
  tasks.value.filter(task => task.status === 'Completed').length
)

const pendingTasks = computed(() =>
  tasks.value.filter(task => task.status === 'Pending').length
)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />

    <main class="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">

      <div
        v-if="message"
        class="rounded-lg px-4 py-3 font-medium"
        :class="
          messageType === 'success'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        "
      >
        {{ message }}
      </div>

      <RecordForm
        :editing-task="editingTask"
        @save="saveTask"
        @cancel="cancelEdit"
      />

      <section class="rounded-xl bg-white p-6 shadow">
        <div class="mb-4">
          <h2 class="text-xl font-bold text-gray-800">
            Search Academic Tasks
          </h2>

          <p class="mt-1 text-sm text-gray-500">
            Search by task title or subject.
          </p>
        </div>

        <input
          v-model="searchTerm"
          type="search"
          placeholder="Search tasks..."
          class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </section>

      <section class="grid gap-4 sm:grid-cols-3">
        <div class="rounded-xl bg-white p-5 shadow">
          <p class="text-sm text-gray-500">
            Total Tasks
          </p>

          <p class="mt-2 text-3xl font-bold text-gray-800">
            {{ totalTasks }}
          </p>
        </div>

        <div class="rounded-xl bg-white p-5 shadow">
          <p class="text-sm text-gray-500">
            Completed
          </p>

          <p class="mt-2 text-3xl font-bold text-green-600">
            {{ completedTasks }}
          </p>
        </div>

        <div class="rounded-xl bg-white p-5 shadow">
          <p class="text-sm text-gray-500">
            Pending
          </p>

          <p class="mt-2 text-3xl font-bold text-orange-600">
            {{ pendingTasks }}
          </p>
        </div>
      </section>

      <RecordList
        :tasks="filteredTasks"
        @edit="editTask"
        @delete="deleteTask"
      />

    </main>

    <AppFooter />
  </div>
</template>