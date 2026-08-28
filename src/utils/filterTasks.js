export function filterTasks(tasks, keyword) {
  const term = keyword.toLowerCase().trim()

  if (!term) {
    return tasks
  }

  return tasks.filter(task =>
    task.taskTitle.toLowerCase().includes(term) ||
    task.subject.toLowerCase().includes(term)
  )
}